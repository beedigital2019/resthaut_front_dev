import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  private url = `${environment.apiUrl}/api/restos`;
  constructor(private http: HttpClient) { }

  getListResto(): Observable<any[]>  {
    return this.http.get<any[]>(this.url);
  }
}
