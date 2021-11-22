import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { page404Component } from './Page404.component';
import { PokemonsModule } from './Pokemons/pokemon.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Pokemons/in-memory-data.service';
import { LoginComponent } from './login/login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthguardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    page404Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonsModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [AuthService ,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
