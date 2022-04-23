import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string) {
    //We parse the value to number
    const val = parseInt(value, 10);

    //If the value is Not a Number (NaN) we return an error
    if (isNaN(val)) {
      throw new BadRequestException(`${value} is not an number`);
    }

    return val;
  }
}
