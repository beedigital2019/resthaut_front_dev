import { RestoService } from './../../../services/resto/resto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-add-reservation-client',
  templateUrl: './add-reservation-client.component.html',
  styleUrls: ['./add-reservation-client.component.scss']
})
export class AddReservationClientComponent implements OnInit {
  resto: any;

  constructor( private res: ReservationService,
               private router: Router,
               private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private rs: RestoService
               ) { }
  reservationForm: FormGroup;
  get f() { return this.reservationForm.controls; }
  submitted = false;
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      nomComplet: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      nbPersonne: ['', [Validators.required, ]],
      telephone: ['', [Validators.required, ]],
      createdAt: ['', [Validators.required, ]],
      heure: ['', [Validators.required, ]],
    });
    this.route.params.subscribe(params => {
      this.rs.detailsResto(params.id).subscribe(data => {
        this.resto = data.id;
        console.log(this.resto);
      });
    });
  }
  onSubmitForm() {
    this.submitted = true;
    if (this.reservationForm.invalid) {
      return;
    }
    const  reservations = {
      nomComplet: this.reservationForm.value.nomComplet,
      nbPersonne: this.reservationForm.value.nbPersonne,
      telephone: this.reservationForm.value.telephone,
      createdAt: this.reservationForm.value.createdAt,
      heure: this.reservationForm.value.heure,
      resto: this.resto
    };
    console.log(reservations);


    this.res.AddReservationByClient(reservations).subscribe( data => {
      alert('Votre reservation a été bien ajouté avec success');
      return this.router.navigate(['list/resto/', this.resto]);
    }, error => {
      console.log(error);

    });
  }

}
