import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UsersController } from './users/users.controller';
import { AppService } from './app.service'
import { UsersService } from './users/users.service'
import { AuthService } from './users/auth.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: null,
      database: 'zeus',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [
    AppController,
    UsersController
  ],
  providers: [
    AppService,
    UsersService,
    AuthService
  ],
})
export class AppModule {}
