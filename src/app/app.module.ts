import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TroubleMaker } from 'src/webjobs/client/TroubleMaker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TroubleMaker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
