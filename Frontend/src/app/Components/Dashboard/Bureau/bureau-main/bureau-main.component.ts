import { Component } from '@angular/core';
import { BureauDashComponent } from '../bureau-dash/bureau-dash.component';

@Component({
  selector: 'app-bureau-main',
  standalone: true,
  imports: [BureauDashComponent],
  templateUrl: './bureau-main.component.html',
  styleUrl: './bureau-main.component.css'
})
export class BureauMainComponent {

}
