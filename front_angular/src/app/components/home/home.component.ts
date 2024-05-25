import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MeetingRoom } from '../../models/meetingRoom';
import { MeetingRoomService } from '../../services/meeting-room.service';
import { RoomLocationComponent } from '../room-location/room-location.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RoomLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private meetingRoomService: MeetingRoomService,

  ) { }
  ngOnInit() {
    this.meetingRoomService.getMeetingRoomList().subscribe((data) => {
      this.meetingRooms = data;
    });

  }
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  meetingRooms: MeetingRoom[] = []
  meetingRoomss: MeetingRoom[] = [
    {
      _id: "0",
      name: 'Conference Room',
      location: 'tunis',

      photos: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      capacity: 40,
      equipment: "projecteur",

    },
    {
      _id: "1",
      name: 'Boardroom',
      location: 'Touzeur',

      photos: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      capacity: 30,

      equipment: "projecteur",
    },
    {
      _id: "2",
      name: 'Training Room',
      location: 'Beja',

      photos: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      capacity: 10,

      equipment: "projecteur",
    },
    {
      _id: "3",
      name: 'Breakout Room',
      location: 'Bizert',

      photos: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
capacity: 100,
      equipment: "projecteur"
    },
    {
      _id: "4",
      name: 'Huddle Room',
      location: 'Nabeul',
     
      photos: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      capacity: 60,
       equipment: "projecteur",
    },
    {
      _id: "5",
      name: 'Video Conference Room',
      location: 'sousse',
     
      photos: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      capacity: 50,
      
      equipment:  "projecteur",
    },
    {
      _id: "6",
      name: 'Interview Room',
      
      location: 'Baghded',
      photos: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      capacity: 55,
      
      equipment: "projecteur",
    },
    {
      _id:"7",
      name: 'Focus Room',
      location: 'Oakland',
      
      photos: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      capacity: 90,
     
      equipment: "projecteur",
    },
    {
      _id: "8",
      name: 'Collaboration Lounge',
      location: 'Oakland',
      
      photos: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      capacity: 150,
     
     equipment: "projecteur",
    },
    {
      _id: "9",
      name: 'Capital Safe Towns',
      location: 'Portland',
      
      photos: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      capacity: 6,
      equipment: "projecteur",
    }
  ];
}