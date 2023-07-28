import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './auth/components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

// const routes: Routes = [
//   {path: '', component: LoginComponent},
//   {path: 'login', component: LoginComponent},
//   {path: 'register', component: RegisterComponent},
//   {path: 'home', component: HomeComponent,canActivate: [AuthGuardService]},
// ];
const routes: Routes = [
  {path: 'submodule', loadChildren: () => import('../app/auth/auth/auth.module').then(m => m.AuthModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
