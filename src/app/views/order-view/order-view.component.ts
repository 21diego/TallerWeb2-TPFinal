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
  order:Order;

  constructor(private userService: UserService,private orderService:OrderService) {

   }

  ngOnInit(): void {
    this.order = JSON.parse(sessionStorage.getItem('orderOk'));
  }
  
}
