import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }


  AddReservationByClient(data: any){
    return this.http.post<any[]>(`${environment.apiUrl}/api/add/reservation`, data,
    );
  }
  getReservationByGerant(){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any[]>(`${environment.apiUrl}/api/list/reservation`, {headers}
    );
  }
}
