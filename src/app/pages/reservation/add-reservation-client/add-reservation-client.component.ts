import { TablesService } from './../../../services/tables/tables.service';
import { RestoService } from './../../../services/resto/resto.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-add-reservation-client',
  templateUrl: './add-reservation-client.component.html',
  styleUrls: ['./add-reservation-client.component.scss']
})
export class AddReservationClientComponent implements OnInit {
  resto: any;
  dataTables: any [];
  selectedTable: any = [];
  errors: any;
  // tslint:disable-next-line: variable-name
  _id: any;
  constructor( private res: ReservationService,
               private router: Router,
               private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private rs: RestoService,
               private ts: TablesService
               ) { }
  reservationForm: FormGroup;
  get f() { return this.reservationForm.controls; }
  submitted = false;
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      createdAt: ['', [Validators.required, ]],
      heure: ['', [Validators.required ]],
      tables: this.formBuilder.array([]),
    });
    this.route.params.subscribe(params => {
      this.rs.detailsResto(params.id).subscribe(data => {
        this.resto = data.id;

      });
    });
    this.route.params.subscribe(params => {
      this.ts.getAllTablesByRestoId(params.id).subscribe(data => {
        this.dataTables  = data;
        console.log(this.dataTables);

      });
    });
  }
  onChange(event){
    let index = this.selectedTable.indexOf(event.target.value);
    if ( index == -1){
      this.selectedTable.push(event.target.value);
    } else {
      this.selectedTable.splice( index, 1);
    }
    console.log(this.selectedTable);
  }
  onSubmitForm() {
    this.submitted = true;
    if (this.reservationForm.invalid) {
      return;
    }

    const  reservations = {
      createdAt: this.reservationForm.value.createdAt,
      heure: this.reservationForm.value.heure,
      tables: this.selectedTable
    };
    console.log(reservations);

    this.res.AddReservationByClient(reservations).subscribe( data => {
      alert('Votre reservation a été bien ajouté avec success');
      return this.router.navigate(['list/resto/', this.resto]);
    }, error => {
      this.errors = error;
      // alert(error);

    });

  }

}
