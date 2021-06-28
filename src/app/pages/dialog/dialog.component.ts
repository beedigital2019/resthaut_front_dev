import { ClientService } from './../../services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { MustMatch } from 'src/app/services/helpers/must-match.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  formConnexion: FormGroup;
  inscriptionForm: FormGroup;
  errorMessage: string;
  submitted: boolean;
  roles: any;
  constructor(private ls: LoginService,
              private router: Router,
              private formBuilder: FormBuilder ,
              private cs: ClientService
              ) { }

  ngOnInit(): void {
    this.formConnexion =  this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
    this.inscriptionForm =  this.formBuilder.group({
      nomComplet: ['', [Validators.required]],
      telephone: ['',  [Validators.required,  Validators.pattern('^[77,78,76,70,75]{2}[0-9]{7}$')]],
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      adresse: ['', [Validators.required]],
    },
      {  validator: MustMatch('password', 'confirmPassword') }
    );
  }
  get f() { return this.formConnexion.controls; }
  get g() { return this.inscriptionForm.controls; }
  // tslint:disable-next-line: typedef
  onSubmitLogin() {

    this.submitted = true;
    if (this.formConnexion.invalid) {
      return;
    }
    const  user = {
        username: this.formConnexion.value.username,
        password: this.formConnexion.value.password,
    };
    this.ls.login(user).subscribe(
      data => {
        this.roles = JSON.parse(localStorage.getItem('roles'));
        alert(JSON.stringify('Authentification réussi avec success'));
        location.reload();
      },
      error => {
      this.errorMessage = 'username ou mot de passe incorrect';
      // console.log('username ou mot de passe incorrect');
    });

  }
  onSubmitRegister(){
    this.submitted = true;
    if (this.inscriptionForm.invalid) {
      return;
    }
    const  users = {
        nomComplet: this.inscriptionForm.value.nomComplet,
        telephone: this.inscriptionForm.value.telephone,
        username: this.inscriptionForm.value.username,
        password: this.inscriptionForm.value.password,
        adresse: this.inscriptionForm.value.adresse,
    };
    this.cs.postClient(users).subscribe( data => {
      alert(JSON.stringify('Création de compte réussi avec success'));
      //this.inscriptionForm.reset();
    }, errors => {
      alert(JSON.stringify(errors));
    });
  }
}
