import { IsNotEmpty, IsString } from 'class-validator';
import { JoinColumn, OneToOne } from "typeorm";
import { User } from "../../users/entities/user.entity";

export class CreateFilmDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  synopsis: string;
}
