import { Component } from '@angular/core';
import { BureauDashComponent } from '../bureau-dash/bureau-dash.component';
import { HomeFooterComponent } from '../../../HomePage/home-footer/home-footer.component';

@Component({
  selector: 'app-bureau-main',
  standalone: true,
  imports: [BureauDashComponent, HomeFooterComponent],
  templateUrl: './bureau-main.component.html',
  styleUrl: './bureau-main.component.css',
})
export class BureauMainComponent {}
