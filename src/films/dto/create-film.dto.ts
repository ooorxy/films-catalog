import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmDto {
  @ApiProperty({
    description: 'Title of Film',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Synopsis of Film',
  })
  @IsString()
  @IsNotEmpty()
  synopsis: string;
}
