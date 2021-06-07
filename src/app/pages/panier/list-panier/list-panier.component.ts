import { PanierService } from '../../../services/panier.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plat } from 'src/app/model/plat';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-panier',
  templateUrl: './list-panier.component.html',
  styleUrls: ['./list-panier.component.scss']
})
export class ListPanierComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pas: PanierService) { }
  plats: any[];
  urlimg = 'data:image/png;base64,';
  totalUpdate = new BehaviorSubject([]);
  total = 0;
  // element;
  ngOnInit(): void {
    this.plats = JSON.parse(localStorage.getItem('cart'));
    console.log(this.plats);

    // tslint:disable-next-line: prefer-for-of
    this.plats.forEach((element) => {
      this.total += (element.quantite * element.prix);
    });
  }
  removeCart(id){
    for (let i = 0; i < this.plats.length; i++) {
      if (this.plats[i].id === id) {
        this.plats.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(this.plats));
      }
    }
  }
  addQuantity(id){
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.plats.length; i++) {
      if (this.plats[i].id === id) {
        this.plats[i].quantite++;
        localStorage.setItem('cart', JSON.stringify(this.plats));
      }
    }
  }
  delQuantity(id){
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.plats.length; i++) {
      const element = this.plats[i];
      if (this.plats[i].id === id) {
        this.plats[i].quantite--;
        localStorage.setItem('cart', JSON.stringify(this.plats));
      }
    }
  }
}
