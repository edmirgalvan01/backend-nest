import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  readonly customer: string;

  @IsString()
  @IsNotEmpty()
  readonly provider: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
