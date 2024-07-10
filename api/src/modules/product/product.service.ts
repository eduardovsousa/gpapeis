import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository, IProductProps } from 'src/shared/database/repositories/product.repositories';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepo: ProductRepository) {}

  create(createProductDto: CreateProductDto): IProductProps {
    return this.productRepo.create(createProductDto);
  }

  findAll(): IProductProps[] {
    return this.productRepo.findMany();
  }

  findOne(id: number): IProductProps {
    const product = this.productRepo.findFirst(id);
    if (!product) {
      throw new NotFoundException(`Produto com o ID ${id} não encontrado`);
    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto): IProductProps {
    const updatedProduct = this.productRepo.update(id, updateProductDto);
    if (!updatedProduct) {
      throw new NotFoundException(`Produto com o ID ${id} não encontrado`);
    }
    return updatedProduct;
  }

  remove(id: number): void {
    const success = this.productRepo.delete(id);
    if (!success) {
      throw new NotFoundException(`Produto com o ID ${id} não encontrado`);
    }
  }
}
