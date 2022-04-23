import { IsString, IsNumber, IsUrl, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly img: string;
}

export class UpdateProductDto {
  //"?" it's responsible for declaring the variable as optional
  readonly name?: string;
  readonly price?: number;
  readonly description?: string;
  readonly stock?: number;
  readonly img?: string;
}
