import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    registerUsers(@Body() body: {username: string; password: string}) {
        return this.usersService.register(body);
    }

    @Post('login')
    loginUser(@Body() body: {username: string; password: string}) {
        return this.usersService.login(body);
    }
}