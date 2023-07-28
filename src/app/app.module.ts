import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AuthModule} from './auth/auth/auth.module';

// import { LoginComponent } from './auth/components/login/login.component';
// import { RegisterComponent } from './auth/components/register/register.component'
// import { HomeComponent } from './auth/components/home/home.component';
// import { HeaderComponent } from './auth/components/header/header.component';
// import { SidebarComponent } from './auth/components/sidebar/sidebar.component';
// import { FooterComponent } from './auth/components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent, 
    // RegisterComponent,
    // HomeComponent,
    // HeaderComponent,
    // SidebarComponent,
    // FooterComponent 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
