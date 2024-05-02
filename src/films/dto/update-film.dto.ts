import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmDto } from './create-film.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateFilmDto extends PartialType(CreateFilmDto) {
  @ApiProperty({
    description: 'Title of Film',
    required: false,
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Synopsis of Film',
    required: false,
  })
  @IsString()
  synopsis: string;
}
