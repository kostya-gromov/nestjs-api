import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDro {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}

// Only for payload
