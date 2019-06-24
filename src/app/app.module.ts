import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { APP_ROUTING } from './app.routes';

import { PagesModule } from './components/pages/pages.module';
import { LoginComponent } from './components/accounts/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    PagesModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
