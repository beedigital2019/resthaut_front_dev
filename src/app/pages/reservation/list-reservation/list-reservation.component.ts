import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.scss']
})
export class ListReservationComponent implements OnInit {

  constructor(private res: ReservationService) { }
  searchValue: string;
  listData: MatTableDataSource<any>;
  reservations = [];
  dataPlats: any;
  displayedColumns: string[] = ['id', 'nomComplet', 'telephone', 'nbPersonne', 'createdAt', 'heure', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.res.getReservationByGerant()
      .subscribe( data => {
        this.reservations.push(this.reservations);
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
}
