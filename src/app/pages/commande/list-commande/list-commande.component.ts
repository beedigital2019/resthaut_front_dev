import { CommandeService } from './../../../services/commande/commande.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.scss']
})
export class ListCommandeComponent implements OnInit {
  commande: any;
  constructor( private cs: CommandeService) { }

  ngOnInit(): void {
    this.cs.getCommandeByResto().subscribe( data => {
      console.log(data);
      this.commande = data;
      // if (data) {
      //   for (let i = 0; i < data.length; i++) {
      //     const element = data[i].commande;
      //     this.commande = element;
      //   }
      // }
    });
  }
  onStatus(id: number) {
    this.cs.getEtatCommande(id).subscribe(data => {
      alert(JSON.stringify(data));
      location.reload();
    });
  }

}
