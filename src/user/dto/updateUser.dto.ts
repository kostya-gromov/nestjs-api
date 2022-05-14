import { IsEmail } from 'class-validator';

export class UpdateUserDro {
  readonly username: string;

  @IsEmail()
  readonly email: string;

  readonly bio: string;

  readonly image: string;
}

// Only for payload
