import { ReservationService } from './../../../services/reservation/reservation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {

  constructor( private res: ReservationService, private router: Router, private formBuilder: FormBuilder) { }
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
    };
    console.log(reservations);


    this.res.AddReservationByGerant(reservations).subscribe( data => {
      alert('Votre reservation a été bien ajouté avec success');
      return this.router.navigate(['dashboard/reservation/list']);
    }, error => {
      console.log(error);

    });
  }

}
