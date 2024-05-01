import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
// import { Repository } from 'typeorm';
// import { Film } from './entities/film.entity';

@Injectable()
export class FilmsService {
  // constructor(private readonly repository: Repository<Film>) {}

  create(dto: CreateFilmDto) {
    // const film = this.repository.create(dto);
    //
    // return this.repository.save(film);
  }

  findAll() {
    // return this.repository.find();
  }

  findOne(id: number) {
    // return this.repository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateFilmDto) {
    // const film = await this.repository.findOneBy({ id });
    //
    // if (!film) return null;
    //
    // this.repository.merge(film, dto);
    //
    // return this.repository.save(film);
  }

  async remove(id: number) {
    // const film = await this.repository.findOneBy({ id });
    //
    // if (!film) return null;
    //
    // return this.repository.delete(film);
  }
}
