import { IsEmail, MinLength } from "class-validator";


export class CreateUserDto {
    
    @MinLength(5)
    fullName: string;

    @IsEmail()
    email: string;

    @MinLength(5)
    password: string;
}
