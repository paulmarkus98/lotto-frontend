import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TicketGeneratorComponent } from './ticket-generator/ticket-generator.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { InvalidFormatComponent } from './@core/modals/invalid-format/invalid-format.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralErrorMessageModalComponent } from './@core/modals/general-error-message-modal/general-error-message-modal.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent,
    TicketGeneratorComponent,
    FrequencyComponent,
    InvalidFormatComponent,
    GeneralErrorMessageModalComponent,
    TicketDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
