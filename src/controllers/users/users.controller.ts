import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('')
  getUsers(@Query('limit') limit = 30, @Query('offset') offset: number) {
    return {
      message: `Users: ${limit} - ${offset}`,
    };
  }

  @Get(':id')
  getUser(@Param('id') id: any) {
    return {
      message: `User id: ${id}`,
    };
  }

  //Create a new user
  @Post()
  //payload is the information that the user sends through the method POST
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload,
    };
  }

  //Edit a user through your id
  @Put(':id')
  //We will receive new user data through the body.
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'Accion de eliminar',
      id,
    };
  }
}
