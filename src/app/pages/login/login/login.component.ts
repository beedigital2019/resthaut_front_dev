import { LoginService } from './../../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formConnexion: FormGroup;
  errorMessage: string;
  submitted: boolean;
  constructor( private ls: LoginService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.formConnexion =  this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

  }
  get f() { return this.formConnexion.controls; }
  onSubmit() {

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
        return this.router.navigate(['dashboard']);
      },
      error => {
       /* this.errorMessage = 'username ou mot de passe incorrect';*/
        console.log(error);

    });
  }
}
