import { ProductService } from './../../product/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketView{
  constructor(private productService: ProductService) {}
 result1="no se cambio valor"
 result2="hola"
  probarGet(){
    this.productService.obtener()
    .subscribe(
      result => {
        // Handle result
      this.result2=result['name']
      console.log(this.result2)
      }

    )
    return this.result2;
  };

}

