import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { RegisterView } from './views/register-view/register-view.component'
import { LoginView } from './views/login-view/login-view.component'
import { HomeView } from './views/home-view/home-view.component';
import { ProductComponent } from './views/product/product.component';
import { KartComponent } from './components/kart/kart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { OrderViewComponent } from './views/order-view/order-view.component';
import { OrderErrorViewComponent } from './views/order-error-view/order-error-view.component';

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    Header,
    RegisterView,
    LoginView,
    HomeView,
    ProductComponent,
    KartComponent,
    OrderViewComponent,
    OrderErrorViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
