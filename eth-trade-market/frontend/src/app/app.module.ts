import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRouterModule} from './app.router.module';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component'; 





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
