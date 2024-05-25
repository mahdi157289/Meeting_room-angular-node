import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MeetingRoom } from '../../models/meetingRoom';
@Component({
  selector: 'app-room-location',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './room-location.component.html',
  styleUrl: './room-location.component.css'
})
export class RoomLocationComponent {
  @Input() meetingRoom!: MeetingRoom;
  constructor(
   
    private router: Router
  ) {}
  openReservationPage(meetingroom: MeetingRoom) {
    console.log(meetingroom._id);

    this.router.navigate(['/booking', meetingroom._id]);
  }
  }

