import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin';
import { SignUpDto } from './dto/signup';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signin(signInDto);
  }

  @Post('signup')
  signup(@Body() signUpDto: SignUpDto) {
    return this.authService.signup(signUpDto);
  }
}
