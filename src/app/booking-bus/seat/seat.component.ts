import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  @Input() seat: any;
  @Output() emitStatus = new EventEmitter();
  status: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  datGhe() {
    this.status = !this.status;
    this.emitStatus.emit(this.status);
  }
}
