import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { KartService } from '../../services/kart.service';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html'
})
export class KartComponent implements OnInit {

  products = [];

  constructor(public kartService: KartService, public router: Router) { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem("kart"));
    this.filterProducts();
  }

  filterProducts(){
    this.products.filter((item, index) => {
      return this.products.indexOf(item) === index
    });
  }





}
