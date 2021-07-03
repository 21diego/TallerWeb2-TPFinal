import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public http: HttpClient) { }
  obtener() {
    return this.http.get(`http://localhost:3000/market`);
  }

}
