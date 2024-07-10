import { Injectable } from '@nestjs/common';

export interface IProductProps {
  id: number;
  image: any;
  name: string;
  description: string;
  price: number;
  quantity: number;
  registrationDate: string;
}

@Injectable()
export class ProductRepository {
  private products: IProductProps[] = [];

  private generateId(): number {
    return this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
  }

  count(): number {
    return this.products.length;
  }

  findMany(): IProductProps[] {
    return this.products;
  }

  findFirst(id: number): IProductProps | undefined {
    return this.products.find(product => product.id === id);
  }

  create(product: Omit<IProductProps, 'id'>): IProductProps {
    const newProduct: IProductProps = {
      id: this.generateId(),
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, updateProduct: Partial<IProductProps>): IProductProps | undefined {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      return undefined;
    }

    const updatedProduct = { ...this.products[productIndex], ...updateProduct };
    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  delete(id: number): boolean {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      return false;
    }

    this.products.splice(productIndex, 1);
    return true;
  }
}
