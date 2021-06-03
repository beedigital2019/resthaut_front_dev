import { MenuService } from 'src/app/services/menu/menu.service';
import { PanierService } from './../../../services/panier.service';
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
  menus: any;
  itemInCart: number;
  urlimg = 'data:image/png;base64,';
  constructor( private rs: RestoService,
               private route: ActivatedRoute,
               private router: Router,
               private ms: MenuService,
               private pas: PanierService
              ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.rs.detailsResto(this.id).subscribe( data => {
      this.resto = data;
    });
    this.ms.getAllMenuByrestoId(this.id).subscribe( data => {
      this.menus = data;
      console.log(this.menus);

    });
    this.pas.cartItem.subscribe( data => {
      this.itemInCart = data.length;
    });
  }

  addPanier(plat: Plat) {
    this.pas.addCart(plat);
  }
}
