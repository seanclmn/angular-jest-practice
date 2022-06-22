import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogDirective } from './log.directive';
import { NewcomponentComponent } from './components/newcomponent/newcomponent.component';
// test
@NgModule({
  declarations: [
    AppComponent,
    LogDirective,
    NewcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
