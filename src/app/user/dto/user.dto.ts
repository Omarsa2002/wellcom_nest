import { IsEmail, IsString } from 'class-validator';

export class CreateUser {
    @IsString()
        firstName: string;
    @IsString()
        lastName: string;
    @IsEmail()
        email: string;

}
