import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient) { }

  getAllPlat(): Observable<any[]>  {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any[]>(`${environment.apiUrl}/api/plats`, {headers}
    );
  }
  getAllPlatByRestoId(id): Observable<any[]>  {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any[]>(`${environment.apiUrl}/api/plat/list/` + id, {headers}
    );
  }
  // tslint:disable-next-line: typedef
  postPlat(data: any){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<any[]>(`${environment.apiUrl}/api/plat/add`, data, {headers}
    );
  }
}
