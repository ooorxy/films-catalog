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
import { AuthDto } from '../auth/dto/auth.dto';

@ApiTags('Films')
@ApiBearerAuth()
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @ApiResponse({
    status: 200,
    description: 'Return a new film created.',
    schema: { example: { film: {} } },
  })
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
    status: 200,
    description: 'Returns a film catalog.',
    schema: { example: { film: [{}, {}] } },
  })
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
  @ApiBody({ description: 'Returns a film catalog.' })
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Return a film.',
    schema: { example: { film: {} } },
  })
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
  @ApiBody({ description: 'Return film.' })
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Update film.',
    schema: { example: { film: {} } },
  })
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
  @ApiBody({ type: UpdateFilmDto, description: 'Update film.' })
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.update(+id, updateFilmDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Delete film.',
    schema: { example: { status: true } },
  })
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
  @ApiBody({ description: 'Delete film.' })
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmsService.remove(+id);
  }
}
