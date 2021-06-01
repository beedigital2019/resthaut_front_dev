import { PanierService } from './../../../services/panier.service';
import { MenuService } from './../../../services/menu/menu.service';
import { PlatService } from './../../../services/plat/plat.service';
import { RestoService } from './../../../services/resto/resto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plat } from 'src/app/model/plat';

@Component({
  selector: 'app-details-resto',
  templateUrl: './details-resto.component.html',
  styleUrls: ['./details-resto.component.scss']
})
export class DetailsRestoComponent implements OnInit {
  id: number;
  resto: any;
  plats: any;
  itemInCart: number;
  urlimg = 'data:image/png;base64,';
  constructor( private rs: RestoService,
               private route: ActivatedRoute,
               private router: Router,
               private ps: PlatService,
               private pas: PanierService
              ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.rs.detailsResto(this.id).subscribe( data => {
      this.resto = data;
    });
    this.ps.getAllPlatByRestoId(this.id).subscribe( data => {
      this.plats = data;
    });
    this.pas.cartItem.subscribe( data => {
      this.itemInCart = data.length;
    });
  }

  addPanier(plat: Plat) {
    this.pas.addCart(plat);
  }
}
