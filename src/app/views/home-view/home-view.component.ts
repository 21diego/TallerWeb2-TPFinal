import { Component } from "@angular/core";
import { Product } from './../../services/product.service';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'home-view',
    templateUrl: './home-view.component.html'
})


export class HomeView{
  kart = [];
  products = new Array<Product>();
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getProducts();
   }
  getProducts(){
    console.log("llama a getProducts")
    this.productService.getProducts()
    .subscribe(
      data => {
        // Handle result
        this.setProducts(data);
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

