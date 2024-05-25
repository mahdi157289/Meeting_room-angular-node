import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { Router, RouterLink } from '@angular/router';
import { Reservation } from '../../models/reservation';
import { User } from '../../models/user';
import { MeetingRoomService } from '../../services/meeting-room.service';
import { ReservationService } from '../../services/reservation.service';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule,RouterLink ,  MatIconModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  userReservations: Reservation[] = [];
  hideDetails = false;
  hideDetails1 = false;
  user: User = {
    _id: '',
    fullName: '',
    email: '',
    password: '',
    phone: '',
    username: '',
    isAdmin: false,
  };
 

  constructor(private reservationService: ReservationService,private meetingroomService:MeetingRoomService,private router:Router) {}

  ngOnInit(): void {
    this.reservationService.getReservationList().subscribe((data) => {
      let reservationList = data;
      for (let reservation of reservationList) {
        if (reservation.user == this.getUserIdFromToken()) {
          this.userReservations.push(reservation);
        }
      }
      console.log(this.userReservations);
    });
    this.getUserFromLocalStorage()
  }

  getUserIdFromToken(): string | null {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      try {
        const userObject = JSON.parse(currentUser);
        if (userObject && userObject._id) {
          return userObject._id;
        } else {
          console.error('User object does not contain _id field.');
          return null;
        }
      } catch (error) {
        console.error('Error parsing currentUser JSON:', error);
        return null;
      }
    } else {
      console.error('No currentUser found in localStorage.');
      return null;
    }
  }
  getMeetingRoomName(id: string) {
   
  }
  deleteReservation(reservation: Reservation): void {
    try {
      this.reservationService.deleteReservation(reservation).subscribe(
        () => {
          console.log('Reservation deleted successfully.');
          window.location.reload();
        },
        (error) => {
          console.error('Error deleting reservation:', error);
        }
      );
    } catch (err) {
      console.log('error :', err);
    }
  }
  getUserFromLocalStorage(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      try {
        const userObject: User = JSON.parse(currentUser);
        this.user = userObject;
        this.user._id = userObject._id;
        console.log(this.user);
        
      } catch (error) {
        console.error('Error parsing currentUser JSON:', error);
      }
    } else {
      console.error('No currentUser found in localStorage.');
    }
  }
  openReservationPage(Id:string|undefined,meetingRoomId:string) {
    if (Id ) {
      console.log("resrvation id :",Id);
      console.log("meetingroom id :",meetingRoomId);
      
      this.router.navigate(['/booking/modify', Id,meetingRoomId]);
      
    } else {
      
      console.error('Meeting room ID is undefined');
    } console.log(Id);
    
    
  }
  toggleDetails() {
    this.hideDetails = !this.hideDetails;
  }
  toggleDetails1() {
    this.hideDetails1 = !this.hideDetails1;
  }
}
