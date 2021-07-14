import { OnInit } from '@angular/core';
import { Product } from './../../services/product.service';
import { ProductService } from '../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketView{
    products=new Array<Product>()
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getProducts();
   }
  getProducts(){
    console.log("llama a getProducts")
    this.productService.obtener()
    .subscribe(
      data => {
        // Handle result
        this.setProducts(data)
      }
    )
  };
  setProducts(products: Product[]){
    let claves=Object.keys(products)
    for(let i=0; i< claves.length; i++){
      let clave = claves[i];
      this.products.push(products[clave]);
    }
}

}

