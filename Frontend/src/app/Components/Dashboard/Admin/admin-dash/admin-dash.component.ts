import { Component } from '@angular/core';
import { BureauService } from '../../../../Services/Bureau/bureau.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef, GridReadyEvent } from 'ag-grid-community';
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environments';

interface IRow {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

@Component({
  selector: 'app-admin-dash',
  standalone: true,
  imports: [FormsModule, CommonModule, AgGridAngular],
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css',
})
export class AdminDashComponent {
  targetId: string = '';
  targetRole: string = '';
  errorMessage: string = '';
  successMesssage: string = '';

  public theme = themeQuartz;
  private apiUrl = environment.apiUrl;

  constructor(private bureauService: BureauService, private http: HttpClient) {}

  rowData: IRow[] = [];

  colDefs: ColDef[] = [
    { field: 'id', filter: true },
    { field: 'firstName', filter: true },
    { field: 'lastName', filter: true },
    { field: 'role', filter: true}
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };


  onGridReady(params: GridReadyEvent) {
    this.http.get<any[]>(`${this.apiUrl}/users`).subscribe(
      (data) => {
        this.rowData = data; // Assign fetched data to rowData
      },
      (error) => {
        this.errorMessage = 'Failed to load data';
        console.error(error);
      }
    );
  }


  modifyUserRole() {
    this.successMesssage = '';
    this.errorMessage = '';
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found !');
      this.errorMessage = 'No token found !';
      return;
    }

    const targetIdInt = parseInt(this.targetId, 10);
    if (isNaN(targetIdInt)) {
      console.error('Not a valid number !');
      this.errorMessage = "The number you entered isn't valid !";
      return;
    }

    if (this.targetRole == '') {
      console.error('Not a valid Role !');
      this.errorMessage = "The role you entered isn't valid !";
      return;
    }

    if (targetIdInt && this.targetRole != '') {
      this.bureauService
        .modifyRole(targetIdInt, this.targetRole, token)
        .subscribe(
          (response) => {
            console.log('Role updated successfully: ', response);
            this.errorMessage = '';
            this.successMesssage = 'Role updated successfully ! Page will reload';

            setTimeout(() => {
              window.location.reload();
            }, 3000); // We wait 3 seconds for the user to see the message
          },
          (error) => {
            this.successMesssage = '';
            this.errorMessage = "Couldn't update role !";
            console.error("Couldn't update role !");
          }
        );
    }
  }
}
