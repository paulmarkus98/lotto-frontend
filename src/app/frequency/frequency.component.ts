import {Component, OnInit} from '@angular/core';
import {TicketService} from '../@core/services/ticket.service';
import {catchError, of, tap} from 'rxjs';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrl: './frequency.component.css'
})
export class FrequencyComponent implements OnInit {

  counter: any = {};
  noTickets: boolean | null = null;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
    this.ticketService.getFrequency()
      .pipe(
        tap((result: any): void => {
          this.noTickets = false;
          this.counter = result;
        }),
        catchError(error => {
          if (error.status === 404) {
            this.noTickets = true;
          } else {
            console.error('An error occurred:', error);
          }
          return of(null);
        })
      ).subscribe();
  }

  protected readonly Object = Object;
}
