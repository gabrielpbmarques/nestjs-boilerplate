import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/User.entity';
import { UserRepository } from 'src/repositories/User.repository';
import { v4 as uuid } from 'uuid';
import { CreateUserDTO } from './CreateUser.dto';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async execute(payload: CreateUserDTO): Promise<User> {
    const newUser: User = {
      ...payload,
      id: uuid(),
      insertedAt: new Date(),
      updatedAt: new Date(),
    };

    return this.userRepository.create(newUser);
  }
}
