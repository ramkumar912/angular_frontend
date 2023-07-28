import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { ProductsComponent } from '../components/products/products.component';
import { ProductAddComponent } from '../components/products/product-add/product-add.component';
import { ProductEditComponent } from '../components/products/product-edit/product-edit.component';
import { ProductViewComponent } from '../components/products/product-view/product-view.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: HomeComponent,canActivate: [AuthGuardService]},
  {path: 'products', component: ProductsComponent,canActivate: [AuthGuardService]},
  {path: 'add-product', component: ProductAddComponent,canActivate: [AuthGuardService]},
  {path: 'edit-product', component: ProductEditComponent,canActivate: [AuthGuardService]},
  {path: 'view-product', component: ProductViewComponent,canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class subRoutingModule { }
