export class CreateProductDto {
  //This variable won't be manipulated, only will be used for reading
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly stock: number;
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
