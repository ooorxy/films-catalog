import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Films')
@ApiBearerAuth()
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    schema: { example: { message: ['Request field validation'] } },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
    schema: { example: { message: 'Invalid credentials.' } },
  })
  @ApiBody({ type: CreateFilmDto, description: 'Create a new film.' })
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    schema: { example: { message: ['Request field validation'] } },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
    schema: { example: { message: 'Invalid credentials.' } },
  })
  @ApiBody({ description: 'Return a film catalog.' })
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    schema: { example: { message: ['Request field validation'] } },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
    schema: { example: { message: 'Invalid credentials.' } },
  })
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }

  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    schema: { example: { message: ['Request field validation'] } },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
    schema: { example: { message: 'Invalid credentials.' } },
  })
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.update(+id, updateFilmDto);
  }

  @ApiResponse({
    status: 400,
    description: 'Bad request.',
    schema: { example: { message: ['Request field validation'] } },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
    schema: { example: { message: 'Invalid credentials.' } },
  })
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
}
