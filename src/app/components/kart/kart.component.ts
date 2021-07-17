import { Product } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Order, ProductOrder, OrderService } from '../../services/order.service';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html'
})
export class KartComponent implements OnInit {

  products = [];

  constructor(public router: Router, private orderService:OrderService) { }

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

  validarCompra(){
      let user = JSON.parse(sessionStorage.getItem('usuario'));
      if(user.emailVerified){
        console.log("entra en mail verificado")
        this.generateOrder();
      }
      else{
        this.router.navigate(['/orderError']).then(()=>{
          window.location.reload();
      });
      }
  }

  generateOrder(){
    //contruir objecto
    console.log("entra en generateOrder")
    const currentUser = JSON.parse(sessionStorage.getItem('usuario'));
    JSON.parse(localStorage.getItem("kart")).forEach(element => {
      let productOrder:ProductOrder = {
        name: element.name,
        price: element.price,
        count: this.countProducts(element)
      };
      this.products[element.id]=productOrder;
    });
    let order:Order = {
      email: currentUser.email,
      products: this.products,
      total: this.products.length,
      codigo: null,
      date: null
    }
    
    this.orderService.createOrder(order).subscribe( data => {
      console.log(data);
      if(data.codigo){
        localStorage.setItem('kart',JSON.stringify([]));
        sessionStorage.setItem('orderOk',JSON.stringify(data));
        this.router.navigate(['/order']).then(()=>{
          window.location.reload();
      });
      }
    });
    }


    countProducts(product:Product){
      let count=0;
      JSON.parse(localStorage.getItem("kart")).forEach(element => {
          if (product.name==element.name){
            count++;
          }
        });
        return count;
    }


}
