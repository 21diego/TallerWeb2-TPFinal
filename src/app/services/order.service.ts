import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order): Observable<Order>{
    console.log('entro al createOrder')
    return this.http.post<Order>("/api/order",order);
  }


}
export interface Order {
  email: string,
  total:number,
  products: ProductOrder[],
  codigo: string,
  date: string
}
export interface ProductOrder {
  name:string,
  price:number,
  count:number
}
