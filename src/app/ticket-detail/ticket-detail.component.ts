import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TicketService} from '../@core/services/ticket.service';
import {tap} from 'rxjs';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrl: './ticket-detail.component.css'
})
export class TicketDetailComponent implements OnInit{

  boxes: (null | number)[] = [];
  numbers: number[][] = [];
  superzahl: number | null = null;
  id: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ticketService: TicketService,) {
    this.route.params.subscribe((params: any) => this.id = params['id']);
  }

  ngOnInit() {
    this.ticketService.getTicketById(this.id)
      .pipe(
        tap((result: any): void => {
          this.boxes = Array(result.boxes);
          this.numbers = result.numbers;
          this.superzahl = result.superzahl;
        })
      )
      .subscribe();
  }

  goToTicketsPage(): void {
    this.router.navigateByUrl('/tickets');
  }

}
