import { Body, Controller, Get, Post, Session, UseGuards } from '@nestjs/common';
import { JwtSessionGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Get('/whoami')
  @UseGuards(JwtSessionGuard)
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    const { user, accessToken } = await this.authService.signup(body.email, body.password);
    return { user, accessToken }
  }

  @Post('/signin')
  async signin(@Body() body: CreateUserDto) {
    const { user, accessToken } = await this.authService.signin(body.email, body.password);
    return { user, accessToken };
  }

  @Post('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
    return { message: 'Signout successful' };
  }
}
