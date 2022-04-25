import { IsString, IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateCategorieDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateCategorieDto extends PartialType(CreateCategorieDto) {}
