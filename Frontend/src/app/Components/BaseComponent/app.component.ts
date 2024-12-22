import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeMainComponent } from '../HomePage/home-main/home-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
