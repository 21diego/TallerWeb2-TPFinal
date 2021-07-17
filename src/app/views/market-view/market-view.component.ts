import { Product } from './../../services/product.service';
import { ProductService } from '../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketView{
  products = new Array<Product>();
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getProducts();
   }
  getProducts(){
    let products = {};
    console.log("llama a getProducts")
    this.productService.getProducts()
    .subscribe(
      data => {
        // Handle result
        this.setProducts(data);
        //products=data;
        console.log("la data es\n" + data);
      }
    )
    console.log("products"+this.products);
  };

setProducts(products: Product[]){
  let claves=Object.keys(products)
  for(let i=0; i< claves.length; i++){
    let clave = claves[i];
    products[clave].id=clave;
    this.products.push(products[clave]);
  }
}

getProduct(){
  console.log("hola")
}

}

