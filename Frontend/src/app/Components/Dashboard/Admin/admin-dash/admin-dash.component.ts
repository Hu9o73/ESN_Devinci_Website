import { Component } from '@angular/core';
import { BureauService } from '../../../../Services/Bureau/bureau.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dash',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css',
})
export class AdminDashComponent {
  targetId: string = '';
  targetRole: string = '';
  errorMessage: string = '';
  successMesssage: string = '';

  constructor(private bureauService: BureauService) {}

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
            this.successMesssage = 'Role updated successfully !';
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
