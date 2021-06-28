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
  reservations: any[];
  searchText;
  ngOnInit(): void {
    this.res.getReservationByGerant()
      .subscribe( data => {
        this.reservations = data;
        console.log(this.reservations);
    });

  }
  onStatus(id: number) {
    this.res.getEtatReservation(id).subscribe(data => {
      alert(JSON.stringify(data));
      location.reload();
    });
  }
}
