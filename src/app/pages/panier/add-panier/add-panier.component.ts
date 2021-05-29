import { PanierService } from './../../../services/panier.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-panier',
  templateUrl: './add-panier.component.html',
  styleUrls: ['./add-panier.component.scss']
})
export class AddPanierComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pas: PanierService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pas.addPanier(params.id).subscribe(data => {
        console.log(data);
      });
    });
    this.pas.getPanier().subscribe(data => {
      console.log(data);
    });
  }

}
