import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseURL = 'http://localhost:5000/reservations/reservations';

  constructor(private httpClient: HttpClient) {}
}