import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient) { }

  getAllPlat(): Observable<any[]>  {
    return this.http.get<any[]>(`${environment.apiUrl}/api/plats`
    );
  }
}
