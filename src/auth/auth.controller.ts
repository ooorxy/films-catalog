import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from "@nestjs/jwt";
import { CacheService } from "../cache/cache.service";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly redisCache: CacheService,
  ) {}

  @Post('login')
  async signIn(@Body() authDto: AuthDto) {
    const user = await this.authService.signIn(authDto);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials.');
    }
    const token = {
      access_token: await this.jwtService.signAsync({
        id: user.id,
        email: user.email,
      }),
    };

    await this.redisCache.storeData(token.access_token);

    return token;
  }
}
