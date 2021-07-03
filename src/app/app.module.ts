import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { RegisterView } from './views/register-view/register-view.component'
import { LoginView } from './views/login-view/login-view.component'

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    Header,
    RegisterView,
    LoginView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
