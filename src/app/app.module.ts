import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routes';

import { LoginComponent } from './components/accounts/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AdminComponent } from './components/admin/admin/admin.component';
import { SharedModule } from './components/shared/shared.module';
import { AdminModule } from './components/admin/admin.module';
import { PagesComponent } from './components/pages/pages.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminComponent, PagesComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    // PagesModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AdminModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
