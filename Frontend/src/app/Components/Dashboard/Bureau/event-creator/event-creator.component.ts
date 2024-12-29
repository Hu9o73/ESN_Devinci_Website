import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BureauService } from '../../../../Services/Bureau/bureau.service';
import { AuthService } from '../../../../Services/Authentication/auth.service';


@Component({
  selector: 'app-event-creator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-creator.component.html',
  styleUrl: './event-creator.component.css'
})
export class EventCreatorComponent {
  successMessage = '';
  errorMessage = '';

  event = {
    author: -1,
    title: '',
    category: '',
    description: '',
    imageLink: '',
  };

  constructor(
    private bureauService: BureauService,
    private authService: AuthService
  ) {}

  createEvent() {
    this.successMessage = '';
    this.errorMessage = '';

    const token = localStorage.getItem('token');
    const userId = this.authService.currentUserFromToken();
    if (userId < 0 || !token) {
      this.errorMessage =
        'Token error. Are you really connected ? If you have the required authorization, try relogging in.';
      console.error('Token error when creating forms');
      return;
    }

    if (this.event.title == '') {
      this.errorMessage = 'Please add a title to your event !';
      console.error(this.errorMessage);
      return;
    }
    if (this.event.category == '') {
      this.errorMessage = 'Please add a category to your event !';
      console.error(this.errorMessage);
      return;
    }

    this.event.author = userId;

    this.bureauService.createEvent(this.event, token).subscribe(
      (response) => {
        // Handle success
        console.log('Successful event creation', response);
        this.errorMessage = '';
        this.successMessage = 'Event created succesfully !';
      },
      (error) => {
        // Handle error
        this.successMessage = '';
        this.errorMessage = 'Server error when creating event.';
        console.error(this.errorMessage);
      }
    );
  }
}
