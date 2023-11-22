import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  findAll() {
    return [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }
}
