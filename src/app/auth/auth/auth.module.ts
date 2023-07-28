import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component'
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductAddComponent } from '../components/products/product-add/product-add.component';
import { ProductEditComponent } from '../components/products/product-edit/product-edit.component';
import { ProductViewComponent } from '../components/products/product-view/product-view.component';

import {subRoutingModule} from './submodule-routing.module';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductViewComponent, 
  ],
  imports: [
    CommonModule,
    subRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule

  ],
  exports : [
    LoginComponent, 
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductViewComponent,  
  ] , 
  providers: [],
  bootstrap: [HomeComponent]
})
export class AuthModule { }
