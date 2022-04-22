import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('')
  getUsers(@Query('limit') limit = 30, @Query('offset') offset: number) {
    return `Users: ${limit} - ${offset}`;
  }

  @Get(':id')
  getUser(@Param('id') id: any) {
    return `User id: ${id}`;
  }
}
