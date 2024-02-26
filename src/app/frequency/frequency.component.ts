import {Component, OnInit} from '@angular/core';
import {TicketService} from '../@core/services/ticket.service';
import {tap} from 'rxjs';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrl: './frequency.component.css'
})
export class FrequencyComponent implements OnInit {

  counter: any = {};

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.ticketService.getFrequency()
      .pipe(
        tap((result: any): void => {
          this.counter = result;
          console.log('result: ', result);
        })
      ).subscribe();
  }

  formatMessage(number: string, frequency: number): string {
    return `Numarul ${number} a aparut de ${frequency === 1 ? 'o data' : frequency + ' ori'}`;
  }

  protected readonly Object = Object;
}
