import { Product } from './product.service';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class KartService {

  constructor( public http: HttpClient ) { this.loadKart() }

  addProductToKart(product: Product){
    return this.http.post<Product>('/api/kart',product);
  }

  getKart(){

  }

  loadKart(){

  }

  clearKart(){

  }

  removeProduct(producto: Product){

  }

  createOrder(){

  }
}

export interface Kart {
  products: Product[],
  totalPrice: number
}
