import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetingRoom } from '../../models/meetingRoom';
import { MeetingRoomService } from '../../services/meeting-room.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  room: MeetingRoom | undefined;
  roomId: string = '';
  constructor(private route: ActivatedRoute, private meetingRoomService: MeetingRoomService) { }
  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.roomId) {


      this.meetingRoomService.getMeetingRoomById(this.roomId).subscribe(room => {
        this.room = room;
      });
    }
  }
}