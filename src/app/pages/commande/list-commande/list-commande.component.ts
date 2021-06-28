import { CommandeService } from './../../../services/commande/commande.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.scss']
})
export class ListCommandeComponent implements OnInit {
  commande: any;
  plat: any;
  searchText;
  constructor( private cs: CommandeService) { }

  ngOnInit(): void {
    this.cs.getCommandeByResto().subscribe( data => {
      console.log(data);
      this.commande = data;
    });
  }
  onStatus(id: number) {
    this.cs.getEtatCommande(id).subscribe(data => {
      alert(JSON.stringify(data));
      location.reload();
    });
  }

}
