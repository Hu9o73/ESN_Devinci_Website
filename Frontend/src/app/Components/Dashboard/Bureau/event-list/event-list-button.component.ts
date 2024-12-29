import { Component } from '@angular/core';

import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environments';

import { BureauService } from '../../../../Services/Bureau/bureau.service';

@Component({
  selector: 'app-event-list-button',
  standalone: true,
  imports: [],
  template: `<button class="btn btn-danger" (click)="buttonClicked()">
    DELETE
  </button>`,
})
export class EventListButtonComponent implements ICellRendererAngularComp {
  eventId: number = -1;

  constructor(private http: HttpClient, private bureauService: BureauService) {}

  agInit(params: ICellRendererParams): void {
    this.eventId = params.data.id;
  }
  refresh(params: ICellRendererParams) {
    return true;
  }
  buttonClicked() {
    const confirmed = confirm(
      'Are you sure you want to deactivate this event?'
    );
    if (!confirmed) return;

    const token = localStorage.getItem('token');

    if (!token) {
      alert('No token provided ! Try relogging in.');
      return;
    }

    this.bureauService.inactivateEvent(this.eventId, token).subscribe(
      (response) => {
        console.log('Event set to inactive:', response);
        alert('Successfully deactivated the event with id: ' + this.eventId);
        window.location.reload();
      },
      (error) => {
        console.error('Error deactivating event:', error);
        alert('Failed to deactivate event. Please try again later.');
      }
    );
  }
}
