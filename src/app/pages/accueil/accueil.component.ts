import { RestoService } from './../../services/resto/resto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  restos = [];
  dataResto: any;
  urlimg = 'data:image/png;base64,';
  constructor(private rs: RestoService) { }

  ngOnInit(): void {
    this.rs.getListResto().subscribe( data => {
      this.dataResto = data;
    });
  }
}
