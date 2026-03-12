/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './dto/user.dto';

@Controller('User')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    getUsers(): string {
        return this.userService.findAll()
    }
    @Post('new-user')
    createNewUser(@Body(new ValidationPipe) createUser: CreateUser) {
        console.log(createUser);
    }
}