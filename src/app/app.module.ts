import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptorService } from './services/helpers/error-interceptor.service';
import { JwtInterceptorService } from './services/helpers/jwt-interceptor.service';
import { DefaultComponent } from './layouts/default/default.component';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AddRestoComponent } from './pages/resto/add-resto/add-resto.component';
import { ListRestoComponent } from './pages/resto/list-resto/list-resto.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    AddRestoComponent,
    ListRestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DefaultModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MaterialFileInputModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [
  DefaultComponent, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptorService,
    multi: true
  },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
