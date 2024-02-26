import {Component} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {InvalidFormatComponent} from '../@core/modals/invalid-format/invalid-format.component';
import {Observable} from 'rxjs';
import {TicketService} from '../@core/services/ticket.service';
import {
  GeneralErrorMessageModalComponent
} from "../@core/modals/general-error-message-modal/general-error-message-modal.component";

@Component({
  selector: 'app-ticket-generator',
  templateUrl: './ticket-generator.component.html',
  styleUrl: './ticket-generator.component.css'
})
export class TicketGeneratorComponent {

  generatedArrays: number[][] = [];
  numberOfBoxesSelected = false;
  numberOfBoxes: number | null = null;
  boxes: (null | number)[] = [];
  superazhlEnabled: boolean = false;
  superzahl: number | null = null;

  constructor(private ngbModal: NgbModal,
              private ticketService: TicketService) {
  }

  drawTicket(): void {
    if (this.checkForValidNumbers()) {
      this.generateBoxesNumbers().subscribe(() => {
        this.ticketService.create(this.boxes.length, this.generatedArrays, this.superzahl).subscribe();
      });
    }
  }

  checkForValidNumbers(): boolean {
    if (this.numberOfBoxes === null) {
      const modalRef: NgbModalRef = this.ngbModal.open(GeneralErrorMessageModalComponent, {
        centered: true,
        size: 'md'
      });
      modalRef.componentInstance.message = 'Please select a number!';
      return false;
    }
    if (this.numberOfBoxes < 1 || this.numberOfBoxes > 15) {
      const modalRef: NgbModalRef =  this.ngbModal.open(InvalidFormatComponent, {
        centered: true,
        size: 'md'
      });
      modalRef.componentInstance.message = 'Please select a number between';
      modalRef.componentInstance.limits = '1 and 15';
      this.numberOfBoxes = null;
      return false;
    }
    if (this.superazhlEnabled && (this.superzahl === undefined || this.superzahl === null)){
      const modalRef: NgbModalRef = this.ngbModal.open(GeneralErrorMessageModalComponent, {
        centered: true,
        size: 'md'
      });
      modalRef.componentInstance.message = 'Please select a superzahl number!';
      return false;
    }
    if (this.superzahl && (this.superzahl < 1 || this.superzahl > 10)){
      const modalRef: NgbModalRef = this.ngbModal.open(InvalidFormatComponent, {
        centered: true,
        size: 'md'
      });
      modalRef.componentInstance.message = 'Superzahl should be between';
      modalRef.componentInstance.limits = '1 and 10';
      this.superzahl = null;
      return false;
    }
    return true;
  }

  generateBoxesNumbers(): Observable<void> {
    const min: number = 1;
    const max: number = 49;
    const arrayLength: number = 6;

    if (this.numberOfBoxes !== null) {
      for (let i: number = 0; i < this.numberOfBoxes; i++) {
        const randomArray: number[] = [];
        let numbersSet: Set<number> = new Set<number>();
        for (let j: number = 0; j < arrayLength; j++) {
          let randomNumber;
          do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          } while (numbersSet.has(randomNumber));

          numbersSet.add(randomNumber);
          randomArray.push(randomNumber);
        }
        randomArray.sort((a, b) => a - b);
        this.generatedArrays.push(randomArray);
      }
    }
    this.numberOfBoxesSelected = true;
    this.boxes = Array(this.numberOfBoxes);

    return new Observable<void>((observer) => {
      observer.next();
      observer.complete();
    });
  }

  redrawTicket(): void {
    this.numberOfBoxesSelected = false;
    this.superzahl = null;
    this.generatedArrays = [];
  }
}
