import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { BookingComponent } from './components/booking/booking.component';
import { HomeComponent } from './components/home/home.component';
import { ModifyBookingComponent } from './components/modify-booking/modify-booking.component';
import { ReservationComponent } from './components/reservation/reservation.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "reservation", component: ReservationComponent },
    { path: "Account", component: AccountComponent },
    { path: "auth/login", component: LoginComponent },
    { path: "auth/register", component: RegisterComponent },
    { path: "booking/:id", component: BookingComponent },
    { path: "booking/modify/:id/:meetingRoomId", component: ModifyBookingComponent },
   
];
