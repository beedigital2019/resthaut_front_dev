import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.scss']
})
export class AddCommandeComponent implements OnInit {
  plats: any;
  roles: any;
  nomComplet: any;
  telephone: any;
  adresse: any;

  constructor() { }

  ngOnInit(): void {
    this.plats = JSON.parse(localStorage.getItem('cart'));
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.nomComplet = JSON.parse(localStorage.getItem('nomComplet'));
    this.telephone = JSON.parse(localStorage.getItem('telephone'));
    this.adresse = JSON.parse(localStorage.getItem('adresse'));

  }

}
