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
  urlimg = 'data:image/png;base64,';
  displayedColumns: string[] = ['id', 'categorie', 'image', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.ms.getAllMenu()
      .subscribe( data => {
      this.menus.push(this.dataMenus);
      this.dataMenus = data;
      console.log(data);

      this.listData = new MatTableDataSource(this.dataMenus);
      this.listData.paginator = this.paginator;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listData.filter = filterValue.trim().toLowerCase();
  }
}
