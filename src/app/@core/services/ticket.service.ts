import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../schemas/ticket/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  create(boxes: number, numbers: any, superzahl: any): Observable<any> {
    const requestObject: Ticket = { boxes,numbers };
    if (superzahl) {
      requestObject.superzahl = superzahl;
    }
    return this.httpClient.post(`http://localhost:3000/ticket`, requestObject, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    });
  }

  getAllTickets(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/tickets`);
  }

  getTicketById(id: any): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/ticket/${id}`);
  }

  getFrequency(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/frequency');
  }
}
