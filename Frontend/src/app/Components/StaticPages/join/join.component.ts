import { Component } from '@angular/core';
import { NavbarComponent } from '../../Utils/navbar/navbar.component';
import { HomeFooterComponent } from '../../HomePage/home-footer/home-footer.component';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [NavbarComponent, HomeFooterComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {

}
