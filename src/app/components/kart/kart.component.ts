import { Product } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html'
})
export class KartComponent implements OnInit {

  products = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem("kart"));
    //this.filterProducts();
  }

  filterProducts(){
    this.products.filter((item, index) => {
      return this.products.indexOf(item) === index
    });
  }

  removeProductToKart(product:Product){

    var i = this.products.indexOf( product );

    if ( i !== -1 ) {
        this.products.splice( i, 1 );
    }

    localStorage.setItem("kart", JSON.stringify(this.products));
  }



}
