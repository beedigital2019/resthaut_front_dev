import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http: HttpClient) { }
  getPanier(): Observable<any[]>  {
    return this.http.get<any[]>(`${environment.apiUrl}/api/paniers`
    );
  }
  addPanier(id: number): Observable<any[]>  {
    return this.http.get<any[]>(`${environment.apiUrl}/api/panier/` + id
    );
  }
}
