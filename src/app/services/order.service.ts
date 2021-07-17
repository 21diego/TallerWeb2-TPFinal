import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }
  createOrder() {
    return this.http.get<Order>(`/api/order`);
  }


}
export interface Order {
  email: string,
  total:number,
  products: ProductOrder[]
}
export interface ProductOrder {
  name:string,
  price:number,
  count:number
}
