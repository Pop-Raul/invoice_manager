import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthDto {
    @IsNotEmpty()
    @IsEmail({}, { message: 'invalid Email' })
    email: string;

    @IsString()
    @MinLength(6, { message: 'password must have a minimum of 6 characters' })
    password: string;
}