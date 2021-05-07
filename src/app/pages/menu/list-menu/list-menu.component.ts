import { MenuService } from './../../../services/menu/menu.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent implements OnInit {

  constructor(private ms: MenuService) { }

  menus = [];
  dataMenus: any;
  roles: string;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'categorie', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.ms.getAllMenu()
      .subscribe( data => {
        this.menus.push(this.dataMenus);
        this.dataMenus = data['hydra:member'];
        this.listData = new MatTableDataSource(this.dataMenus);
        this.listData.paginator = this.paginator;
        console.log(data);

      });
  }

}
