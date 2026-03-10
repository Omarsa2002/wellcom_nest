/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('User')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    getUsers(): string {
        return this.userService.findAll()
    }
}