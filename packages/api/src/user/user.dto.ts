import { IsEmail, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
    firstName: string;

  @IsNotEmpty()
    lastName: string;

  @IsEmail()
    email: string;

  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: 'password too weak',
  })
    password: string;
}

export class LoginUserDto {
  @IsEmail()
    email: string;

  @IsNotEmpty()
    password: string;
}
