import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User = {
    fullName: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    isAdmin: true,
  };
  constructor(private authService: AuthService,private router:Router) {}

  onSubmit() {
    this.authService.signup(this.user).subscribe(
      (data) => {
        console.log('User added:', data);
        const isConfirmed = confirm('you have sign up with success go back to login page ?');
    if (isConfirmed) {
        this.router.navigate(['auth/login']);
    }
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

}
