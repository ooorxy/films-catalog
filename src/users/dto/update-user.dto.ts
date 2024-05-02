import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'Name of User',
    required: false,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'E-mail of User',
    required: false,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password of User',
    required: false,
  })
  @IsString()
  password: string;
}
