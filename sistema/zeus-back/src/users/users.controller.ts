import { Body, Controller, Get, Patch, Delete, Param, Query, NotFoundException, UseGuards } from '@nestjs/common';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { JwtSessionGuard } from '../auth/guards/jwt-auth.guard'

@Controller('user')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private usersService: UsersService
  ) {}

  @Get('/:id')
  @UseGuards(JwtSessionGuard) // Protege a rota com JWT
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  @Get()
  @UseGuards(JwtSessionGuard) // Protege a rota com JWT
  findAllUsers(@Query('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Delete('/:id')
  @UseGuards(JwtSessionGuard) // Protege a rota com JWT
  async removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  @UseGuards(JwtSessionGuard) // Protege a rota com JWT
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}