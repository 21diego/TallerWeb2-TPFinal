import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public http: HttpClient) { }
  obtener() {
    return this.http.get<[]>(`/api/market`);
  }

}
export interface Product {
  name: string,
  description: string,
  price: number,
  clasification: string
}
