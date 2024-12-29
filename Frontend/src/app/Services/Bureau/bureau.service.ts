import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class BureauService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Modify Role of a User
  modifyRole(
    idToUpdate: number,
    roleToUpdate: string,
    token: string
  ): Observable<any> {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const body = { idToUpdate, roleToUpdate };
    return this.http.put(`${this.apiUrl}/modifyRole`, body, { headers });
  }

  createEvent(
    eventData: any,
    token: string
  ): Observable<any> {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(`${this.apiUrl}/addEvent`, eventData, { headers });
  }

  inactivateEvent(
    eventId: number,
    token: string
  ): Observable<any> {
    const headers = { 
      Authorization: `Bearer ${token}`,
    };
    return this.http.put(`${environment.apiUrl}/events/${eventId}/inactivate`, {}, { headers });
  }

}
