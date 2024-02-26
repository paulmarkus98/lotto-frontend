import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component'
import {TicketGeneratorComponent} from './ticket-generator/ticket-generator.component';
import {FrequencyComponent} from './frequency/frequency.component';
import {TicketDetailComponent} from './ticket-detail/ticket-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/generate-ticket', pathMatch: 'full' },
  { path: 'generate-ticket', component: TicketGeneratorComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'ticket/:id', component: TicketDetailComponent },
  { path: 'frequency', component: FrequencyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
