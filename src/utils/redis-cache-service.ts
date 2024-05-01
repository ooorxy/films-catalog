import { Injectable } from "@nestjs/common";
import * as Redis from "ioredis";

@Injectable()
export class RedisCacheService {
  private readonly redisClient: Redis.Redis;

  constructor() {
    this.redisClient = new Redis.Redis();
  }

  async setToken(token: string, userId: string): Promise<void> {
    await this.redisClient.set(token, userId, 'EX', 3600);
  }

  async getUserIdByJWT(token: string): Promise<string | null> {
    return this.redisClient.get(token);
  }

  async deleteToken(token: string): Promise<void> {
    await this.redisClient.del(token);
  }
}
