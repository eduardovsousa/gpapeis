import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from 'src/shared/database/repositories/product.repositories';

@Module({
  providers: [ProductRepository, ProductService],
  exports: [ProductRepository, ProductService],
  controllers: [ProductController],
})
export class ProductModule { }
