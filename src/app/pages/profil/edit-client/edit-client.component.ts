import { ClientService } from './../../../services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  clientForm: FormGroup;
  users: any;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private cs: ClientService,
    private _location: Location
  ) { }
  get f() { return this.clientForm.controls; }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cs.getId(params.id).subscribe(data => {
        this.clientForm.patchValue(data);
      });
    });
    this.clientForm = this.formBuilder.group({
      nomComplet: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      adresse: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      telephone: ['',  [Validators.required,  Validators.pattern('^[77,78,76,70,75]{2}[0-9]{7}$')]],
    });
  }
  backClicked() {
    this._location.back();
  }
  onSubmitForm() {
    this.submitted = true;
    if (this.clientForm.invalid) {
      return;
    }
    const  users = {
      nomComplet: this.clientForm.value.nomComplet,
      username: this.clientForm.value.username,
      telephone: this.clientForm.value.telephone,
      adresse: this.clientForm.value.adresse,
    };
    this.cs.updateClient(users, this.route.snapshot.params.id).subscribe( data => {
      alert('Votre profil a été modifié avec succes');
      return this.router.navigate(['profil/client']);
    }, error => {
      alert(error);
    });
  }

}
