import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { hashPassword } from "../utils/bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const password = await hashPassword(createUserDto.password);
    const user = this.repository.create({ ...createUserDto, password });
    return this.repository.save(user).catch((e) => {
      if (/(email)[\s\S]+(already exists)/.test(e.detail)) {
        throw new BadRequestException('This email already exists.');
      }

      throw new BadRequestException('Internal server error.');
    });
  }

  async findOne(id: string) {
    const user = await this.repository.findOneBy({ id });

    if (!user) throw new BadRequestException('User not found.');

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.repository.findOneBy({ id });

    if (!user) throw new BadRequestException('User not found.');

    if (updateUserDto.password) {
      updateUserDto.password = await hashPassword(updateUserDto.password);
    }

    this.repository.merge(user, updateUserDto);

    return this.repository.save(user).catch((e) => {
      if (/(email)[\s\S]+(already exists)/.test(e.detail)) {
        throw new BadRequestException('This email already exists.');
      }

      throw new BadRequestException('Internal server error.');
    });
  }

  async remove(id: string) {
    const user = await this.repository.findOneBy({ id });

    if (!user) throw new BadRequestException('User not found.');

    const removed = await this.repository.delete({ id });

    return {
      status: removed.affected === 1,
    };
  }
}
