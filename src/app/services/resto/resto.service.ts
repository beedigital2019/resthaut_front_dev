
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  constructor(private http: HttpClient) { }
  getListResto(): Observable<any[]>  {
    return this.http.get<any[]>(`${environment.apiUrl}/api/resto/list`);
  }
  postResto(data): Observable<any[]>  {
    return this.http.post<any[]>(`${environment.apiUrl}/api/resto/add`, data,  );
  }
  detailsResto(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/resto/list/` + id);
  }

}
