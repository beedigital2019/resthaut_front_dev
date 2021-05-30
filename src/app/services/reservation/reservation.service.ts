import { AddReservationComponent } from './../../pages/reservation/add-reservation/add-reservation.component';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  AddReservationByGerant(data: any){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<any[]>(`${environment.apiUrl}/api/add/reservation/gerant`, data, {headers}
    );
  }
  AddReservationByClient(data: any){
    return this.http.post<any[]>(`${environment.apiUrl}/api/add/reservation/client`, data,
    );
  }
  getReservationByGerant(){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any[]>(`${environment.apiUrl}/api/list/reservation`, {headers}
    );
  }
}
