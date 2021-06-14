import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }
  getCommandeByResto(): Observable<any[]>  {
    return this.http.get<any[]>(`${environment.apiUrl}/api/commande/list`
    );
  }
  getEtatCommande(id: number): Observable<any[]>  {
    return this.http.get<any[]>(`${environment.apiUrl}/api/commande/etat/` + id
    );
  }

}
