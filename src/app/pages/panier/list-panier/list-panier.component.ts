import { PanierService } from '../../../services/panier.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plat } from 'src/app/model/plat';
import { BehaviorSubject } from 'rxjs';
import { DialogComponent } from '../../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-panier',
  templateUrl: './list-panier.component.html',
  styleUrls: ['./list-panier.component.scss']
})
export class ListPanierComponent implements OnInit {
  roles: any;
  totalCart: any;

  constructor(private route: ActivatedRoute, private pas: PanierService, public dialog: MatDialog) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));

  }
  plats: any[];
  urlimg = 'data:image/png;base64,';
  totalUpdate = new BehaviorSubject([]);
  currentUserSubject: BehaviorSubject<any>;
  total = 0;
  // element;
  ngOnInit(): void {
    this.plats = JSON.parse(localStorage.getItem('cart'));
    this.roles = JSON.parse(localStorage.getItem('roles'));
    // console.log(this.plats);
    // tslint:disable-next-line: prefer-for-of
    this.plats.forEach((element) => {
      this.total += (element.quantite * element.prix);
    });
  }
  // tslint:disable-next-line: typedef
  removeCart(id){
    for (let i = 0; i < this.plats.length; i++) {
      if (this.plats[i].id === id) {
        this.plats.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(this.plats));
      }
    }
  }
  // tslint:disable-next-line: typedef
  addQuantity(id){
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.plats.length; i++) {
      if (this.plats[i].id === id) {
        this.plats[i].quantite++;
        localStorage.setItem('cart', JSON.stringify(this.plats));
      }
    }
  }
  // tslint:disable-next-line: typedef
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
  // tslint:disable-next-line: typedef
  openDialog() {
    if (this.currentUserSubject.value === null) {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '450px',
        height : '400px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  // tslint:disable-next-line: typedef
  isRoleClient() {
    if (this.roles) {
      if (this.roles['0'] === 'ROLE_CLIENT') {
        return true;
      }
    }
  }

}
