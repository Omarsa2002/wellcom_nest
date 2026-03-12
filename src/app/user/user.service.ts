import { Injectable } from '@nestjs/common';
//import { Cat } from './interfaces/cat.interface';

@Injectable()
export class UserService {
    findAll(): string {
        return 'This action returns all users';
    }
}
