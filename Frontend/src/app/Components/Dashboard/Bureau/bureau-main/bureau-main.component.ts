import { Component } from '@angular/core';
import { HomeFooterComponent } from '../../../HomePage/home-footer/home-footer.component';
import { EventListComponent } from '../event-list/event-list.component';
import { EventCreatorComponent } from '../event-creator/event-creator.component';

@Component({
  selector: 'app-bureau-main',
  standalone: true,
  imports: [EventCreatorComponent, HomeFooterComponent, EventListComponent],
  templateUrl: './bureau-main.component.html',
  styleUrl: './bureau-main.component.css',
})
export class BureauMainComponent {}
