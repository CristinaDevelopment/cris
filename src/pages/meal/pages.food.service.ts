import { Injectable } from '@nestjs/common';
import { CreatePageInput } from './dto/create-page.input';
import { UpdatePageInput } from './dto/update-page.input';

@Injectable()
export class PagesFoodService {
  create(createPageInput: CreatePageInput) {
    return 'This action adds a new page';
  }

  findAll() {
    return `This action returns all pages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} page`;
  }

  update(id: number, updatePageInput: UpdatePageInput) {
    return `This action updates a #${id} page`;
  }

  remove(id: number) {
    return `This action removes a #${id} page`;
  }
}
