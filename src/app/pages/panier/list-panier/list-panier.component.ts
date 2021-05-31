import { PanierService } from '../../../services/panier.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-panier',
  templateUrl: './list-panier.component.html',
  styleUrls: ['./list-panier.component.scss']
})
export class ListPanierComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pas: PanierService) { }
  plats: any[];
  // urlimg = 'data:image/png;base64,';
  // element;
  ngOnInit(): void {
    this.plats = JSON.parse(localStorage.getItem('cart'));
    console.log(this.plats);

  }


}
