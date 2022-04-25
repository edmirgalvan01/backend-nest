import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../../dtos/user.dto';

@Injectable()
export class UsersService {
  private counterId = 1;

  private users: User[] = [
    {
      id: 1,
      name: 'Edmir',
      age: 19,
      email: 'edmir@gmail.com',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);

    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) {
      const indexUser = this.users.findIndex((u) => u.id === id);
      this.users[indexUser] = {
        ...user,
        ...payload,
      };
      return this.users[indexUser];
    } else {
      return null;
    }
  }

  delete(id: number) {
    const user = this.findOne(id);
    if (user) {
      const indexUser = this.users.findIndex((u) => u.id === id);
      this.users.splice(indexUser, 1);
      return { message: true };
    } else {
      return { message: false };
    }
  }
}
