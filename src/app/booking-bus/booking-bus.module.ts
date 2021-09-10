import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookingBusComponent } from './booking-bus.component';
import { ListSeatComponent } from './list-seat/list-seat.component';
import { SeatComponent } from './seat/seat.component';

@NgModule({
  declarations: [BookingBusComponent, ListSeatComponent, SeatComponent],
  exports: [BookingBusComponent],
  imports: [CommonModule],
})
export class BookingBusModule {}
