import { Order, ProductOrder } from './../../services/order.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Product } from './../../services/product.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  products = [];
  email = "";

  constructor(private userService: UserService,private orderService:OrderService) {

   }

  ngOnInit(): void {
  }
  generateOrder(){
  //contruir objecto
  let order:Order
  const currentUser = this.userService.getCurrentUser();
  currentUser.subscribe(
    data => {
      // Handle result
      this.email=data.email;

    }
  );
  JSON.parse(localStorage.getItem("kart")).forEach(element => {
    let product:ProductOrder;
    product.name=element.name;
    product.price=element.price;
    product.count=this.countProducts(element);
    this.products[element.id]=product;
  });
  order.email=this.email;
  order.products=this.products;
  this.orderService.createOrder();
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
