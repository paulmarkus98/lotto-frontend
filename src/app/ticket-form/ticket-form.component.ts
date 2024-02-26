import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent implements OnInit {

  @Input() generatedArrays: any;
  @Input() superzahl: any;
  numbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeNumbers();
  }

  initializeNumbers(): void {
    for (let i = 1; i <= 49; i++) {
      this.numbers.push(i);
    }
  }

}
