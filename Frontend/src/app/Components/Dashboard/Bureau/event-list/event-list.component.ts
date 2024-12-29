import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef, GridReadyEvent } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry, themeAlpine } from 'ag-grid-community';
import { themeQuartz } from 'ag-grid-community';

import { environment } from '../../../../../environments/environments';
import { HttpClient } from '@angular/common/http';

import { EventListButtonComponent } from './event-list-button.component';

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
  id: number,
  title: string,
  category: string,
  description: string,
  author: string,
}

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css',
})
export class EventListComponent {

  public theme = themeQuartz;
  private apiUrl = environment.apiUrl;
  authorNames: { [authorId: number]: string } = {};

  // Row Data: The data to be displayed.
  rowData: IRow[] = [];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: "id" },
    { field: "title" },
    { field: "category", filter: true },
    { field: "description" },
    { field: "author", filter: true },
    {
      field: "actions",
      headerName: "Actions",
      cellRenderer: EventListButtonComponent,
    }
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  constructor(private http: HttpClient) { }

  onGridReady(params: GridReadyEvent) {
    this.http.get<any[]>(`${this.apiUrl}/getEvents`).subscribe((data) => {
      // Collect unique author IDs
      const authorIds = [...new Set(data.map((event) => event.author))];

      // Fetch author names for each unique author ID
      const authorRequests = authorIds.map((authorId) =>
        this.http
          .get<{ firstName?: string }>(`${this.apiUrl}/user/${authorId}/firstName`)
          .toPromise()
          .then((response) => {
            this.authorNames[authorId] = response?.firstName ?? 'Unknown';
          })
          .catch((error) => {
            console.error('Error fetching author first name:', error);
            this.authorNames[authorId] = 'Unknown';
          })
      );

      // Wait for all author requests to resolve before mapping data
      Promise.all(authorRequests).then(() => {
        // Map `author` field in rowData to the corresponding name
        this.rowData = data.map((row) => ({
          ...row,
          author: this.authorNames[row.author] || 'Unknown', // Map ID to name
        }));
      });
    });
  }
}
