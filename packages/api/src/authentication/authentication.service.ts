import { Injectable, BadRequestException, UnauthorizedException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { User } from '../user/user.schema';
import { CreateUserDto, LoginUserDto } from '../user/user.dto';
import { pick } from '../utils';

@Injectable()
export class AuthenticationService {
  private readonly logger = new Logger(AuthenticationService.name);

  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<{ token: string }> {
    const { email, password } = createUserDto;
    
    if (!password) {
      this.logger.error('Password is undefined');
      throw new BadRequestException('Password is required');
    }

    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    
    await newUser.save();

    const payload = { email: newUser.email, sub: newUser._id };
    const token = this.jwtService.sign(payload);

    return { token };
  }

  async login(loginUserDto: LoginUserDto): Promise<Pick<CreateUserDto, "email" | "firstName" | "lastName"> & { token: string }> {
    const { email, password } = loginUserDto;

    if (!password) {
      this.logger.error('Password is undefined');
      throw new UnauthorizedException('Password is required');
    }

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user._id };
    const token = this.jwtService.sign(payload);

    return { ...pick(user, ['email', 'firstName', 'lastName']) , token };
  }
}
