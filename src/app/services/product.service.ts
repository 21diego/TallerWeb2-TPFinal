import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public http: HttpClient) { }
  getProducts() {
    return this.http.get<Product []>(`/api/market`);
  }
  getProductById(id:string){
    return this.http.get<Product>(`/api/market/product/`+id);
  }

}

export interface Product {
    id: string,
    name: string,
    description: string,
    url:string,
    price: number,
    clasification: string
}
