import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginView } from './views/login-view/login-view.component';
import { RegisterView } from './views/register-view/register-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent},
  { path: 'login', component: LoginView },
  { path: 'registro', component: RegisterView },
  { path: 'logout', component: LoginView}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
