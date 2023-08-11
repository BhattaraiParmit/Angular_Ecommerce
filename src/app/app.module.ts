import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as component from './components';
import * as common from './common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    component.LoginComponent,
    component.LayoutMainComponent,

    common.HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
