import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { UserInfoComponent } from './auth/components/user-info/user-info.component';
import { MainComponent } from './pages/main/main.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CarListComponent,
    UserInfoComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
