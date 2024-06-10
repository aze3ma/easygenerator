import { Controller, Post, Body } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { CreateUserDto, LoginUserDto } from '../user/user.dto';

@Controller('auth') // Base path
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('register') // POST /auth/register
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login') // POST /auth/login
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
