import { BadRequestException, Injectable } from "@nestjs/common";
import { AuthDto } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { comparePassword } from "../utils/bcrypt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}
  async signIn(dto: AuthDto) {
    const user = await this.repository.findOneBy({
      email: dto.email,
    });

    if (!user || !(await comparePassword(dto.password, user.password))) {
      return null;
    }

    return user;
  }
}
