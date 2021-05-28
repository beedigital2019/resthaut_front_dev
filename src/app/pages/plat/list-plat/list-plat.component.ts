import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from './../../../services/plat/plat.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { Plat } from 'src/app/model/plat';

@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.scss']
})
export class ListPlatComponent implements OnInit {

  constructor(private ps: PlatService,
              private router: Router ,
              private sanitizer: DomSanitizer) { }

  plats = [];
  dataPlats: any;
  roles: string;
  plat: Plat[];
  searchValue: string;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'nomPlat', 'description', 'prix', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.ps.getAllPlat()
      .subscribe( data => {
        this.plats.push(this.plats);
        this.dataPlats = data;
        this.listData = new MatTableDataSource(this.dataPlats);
        this.listData.paginator = this.paginator;
        console.log(data);
      }, error => {
      console.log(error);
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listData.filter = filterValue.trim().toLowerCase();
  }
  deleteMenu(id: number) {
    if ( confirm('Etes vous  sur de vouloir supprimer cet plat')) {
      this.ps.deletePlat(id).subscribe(data => {
        console.log(data);
        location.reload();
      });
    }
  }
  getId(id: number) {
    this.router.navigate(['/dashboard/menu/edit', id]);
  }
}
