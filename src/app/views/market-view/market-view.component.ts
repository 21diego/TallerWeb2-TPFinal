import { Product } from './../../services/product.service';
import { ProductService } from '../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketView{
    products: Product[]
  constructor(private productService: ProductService) {}
  getProducts(){
    console.log("llama a getProducts")
    this.productService.obtener()
    .subscribe(
      data => {
        // Handle result
        console.log(data)
        this.setProducts(data)
      }
    )
  };
  protected map(entity: Product): Product {
    return {
        name: entity.name,
        description: entity.description,
        clasification: entity.clasification,
        price:entity.price
    };
}

  setProducts(products: []){
    this.products=products.map((item: Product) => this.map(item))

    console.log(this.products)
}

}

