import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as component from './components';
import * as common from './common';
import * as model from './model';
import * as services from './services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    component.LoginComponent,
    component.LayoutMainComponent,
    component.LayoutMainComponent,
    component.LandingComponent,

    common.HeaderComponent,
    // common.ToastrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    services.HttpClientService,
    // services.AuthenticationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
