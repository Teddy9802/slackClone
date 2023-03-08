import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// 요청, 응답은 모른다.
@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  async getHello() {
    return this.configService.get('SECRET');
  }
}
