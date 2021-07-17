import { KartComponent } from './components/kart/kart.component';
import { ProductComponent } from './views/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginView } from './views/login-view/login-view.component';
import { RegisterView } from './views/register-view/register-view.component';
import { MarketView } from './views/market-view/market-view.component';
import { HomeView } from './views/home-view/home-view.component';
import { OrderViewComponent } from './views/order-view/order-view.component';

const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'login', component: LoginView },
  { path: 'registro', component: RegisterView },
  { path: 'market', component: MarketView },
  { path: 'logout', component: LoginView },
  { path: 'market/product/:id', component: ProductComponent },
  { path:'kart', component: KartComponent },
  { path:'order', component: OrderViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
