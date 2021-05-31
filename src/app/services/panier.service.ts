import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plat } from '../model/plat';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  plats: Plat[];
  placehorlder = [];
  cartItem = new BehaviorSubject([]);

  constructor() {
    const ls = JSON.parse(localStorage.getItem('cart'));
    this.plats = [];
    if (ls) {
      this.cartItem.next(ls);
    }
  }
  addCart( plat: Plat){
    const ls = JSON.parse(localStorage.getItem('cart'));
    let exist: Plat;

    if (ls) {
       exist = ls.find((item) => {
        return item.id === plat.id;
      });
    }

    if (exist) {
      exist.quantite++;
      localStorage.setItem('cart', JSON.stringify(ls));
    } else {
      if (ls) {
        const newData  = [...ls, plat];
        localStorage.setItem('cart', JSON.stringify(newData));
        this.cartItem.next(JSON.parse(localStorage.getItem('cart')));
      } else {
        this.placehorlder.push(plat);
        localStorage.setItem('cart', JSON.stringify(this.placehorlder));
        this.cartItem.next(this.placehorlder);
      }
    }
    //console.log(this.placehorlder);

  }
}
