import { PlatService } from './../../../services/plat/plat.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.scss']
})
export class ListPlatComponent implements OnInit {

  constructor(private ps: PlatService) { }

  plats = [];
  dataPlats: any;
  roles: string;
  listData: MatTableDataSource<any>;
  urlimg = 'data:image/png;base64,';
  displayedColumns: string[] = ['id', 'nomPlat', 'description', 'prix', 'image', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.ps.getAllPlat()
      .subscribe( data => {
        this.plats.push(this.plats);
        this.dataPlats = data['hydra:member'];
        this.listData = new MatTableDataSource(this.dataPlats);
        this.listData.paginator = this.paginator;
        console.log(data);
      }, error => {
        console.log(error);

      });
  }

}
