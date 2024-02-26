import { Component, OnInit } from '@angular/core';
import {TicketService} from "../@core/services/ticket.service";
import {tap} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {

  params: any = {};
  tickets: any[] = [];
  numberOfTickets: number | null = null;
  noTickets: boolean | null = null;
  constructor(private ticketService: TicketService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe((params) => this.params = params);
  }

  ngOnInit(): void {
    this.ticketService.getAllTickets()
      .pipe(
        tap((result: any) => {
          this.tickets = result.tickets;
          this.numberOfTickets = result.tickets.length;
          this.noTickets = result.tickets.length === 0;
        })
      )
      .subscribe();
  }

  onTicket(id: any): void {
    this.router.navigate([`/ticket/${id}`]);
  }
}
