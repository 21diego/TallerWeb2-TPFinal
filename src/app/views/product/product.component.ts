import {ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { Product } from '../../services/product.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent  {
  product:Product;
  kart = JSON.parse(localStorage.getItem("kart"));
  constructor(private productService: ProductService,private activatedRoute: ActivatedRoute) { }
  id:string
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id= params['id'];
      console.log( "el id es"+ this.id);
    });
    this.getProduct(this.id);
   }
   getProduct(id:string) {
    console.log("llama a getProduct");
    this.productService.getProductById(id)
    .subscribe(
      data => {
        // Handle result
        this.setProduct(data);
        console.log(this.product);
      }
    )
  }
  setProduct(product:Product){
    this.product=product;
  }
  addProductToKart(product:Product){
    console.log(product);
    this.kart.push(product);
    localStorage.setItem("kart", JSON.stringify(this.kart));
    console.log(this.kart);
  }
}
