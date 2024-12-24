import { Component } from '@angular/core';
import { NavbarComponent } from '../../Utils/navbar/navbar.component';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css'
})
export class DashboardMainComponent {

}
