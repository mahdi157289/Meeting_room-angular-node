import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingRoom } from '../models/meetingRoom';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {
    submitApplication(arg0: string, arg1: string, arg2: string) {
      throw new Error('Method not implemented.');
    }

  
    private baseURL = 'http://localhost:5000/meeting-Rooms/meeting-rooms';
  
    constructor(private httpClient: HttpClient) {}
    createMeetingRoom(meetingRoom:MeetingRoom): Observable<Object> {
      let currentToken = localStorage.getItem('userToken') || "";
      const headers= new HttpHeaders().set('Authorization',currentToken);
      return this.httpClient.post(this.baseURL, meetingRoom, { headers: headers });
    }
  
    deleteMeetingRoom(id: string): Observable<Object> {
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
  
    getMeetingRoomById(id: string): Observable<MeetingRoom> {
      return this.httpClient.get<MeetingRoom>(`${this.baseURL}/${id}`);
    }
    getMeetingRoomList(): Observable<MeetingRoom[]> {
      return this.httpClient.get<MeetingRoom[]>(`${this.baseURL}`);
    }
    getAvailableHours(day:string,id:string): Observable<string[]> {
      return this.httpClient.get<string[]>(`${this.baseURL}/getAvailebleHours/${id}/${day}`);
    }
  
    updateMeetingRoom(id: number, meetingRoom: MeetingRoom): Observable<Object> {
      return this.httpClient.put(`${this.baseURL}/${id}`, meetingRoom);
    }
}
