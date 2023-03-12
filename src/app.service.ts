import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';

// 요청, 응답은 모른다.
@Injectable()
export class AppService {
  constructor(private readonly usersService: UsersService) {}

  async getHello() {
    this.usersService.getUser();
    return process.env.SECRET;
  }
}
