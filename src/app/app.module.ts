import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingBusModule } from './booking-bus/booking-bus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BookingBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
