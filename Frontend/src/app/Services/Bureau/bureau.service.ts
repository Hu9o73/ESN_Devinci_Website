import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environments';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class BureauService {
  
  private apiUrl = environment.apiUrl;  // Your backend API URL

  constructor(private http: HttpClient) { }

  // Modify Role of a User
  modifyRole(idToUpdate: number, roleToUpdate: string, token: string): Observable<any> {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const body = {idToUpdate, roleToUpdate};
    return this.http.put(`${this.apiUrl}/modifyRole`, body, {headers});
  }
  
}
