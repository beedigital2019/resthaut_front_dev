import { RestoService } from './../../services/resto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  restos = [];
  dataResto: any;
  constructor(private rs: RestoService) { }

  ngOnInit(): void {
    this.rs.getListResto().subscribe( data => {
      this.restos.push(this.restos);
      this.dataResto = data['hydra:member'];
      console.log(this.dataResto);

    })
  }

}
