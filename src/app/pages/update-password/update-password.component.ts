import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdateService } from 'src/app/services/password/update.service';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/services/helpers/must-match.service';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  formClient: FormGroup;
  submitted = false;
  errorMessage: string;
  get f() { return this.formClient.controls; }
  constructor(private formBuilder: FormBuilder, private ups: UpdateService, private _location: Location, private route: Router) { }

  ngOnInit(): void {
    this.formClient = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
    },
    {  validator: MustMatch('newPassword', 'confirmPassword') }
    );
  }
  // tslint:disable-next-line: typedef
  onSubmitPassword() {

    this.submitted = true;
    if (this.formClient.invalid) {
      return;
    }
    const  user = {
        oldPassword: this.formClient.value.oldPassword,
        newPassword: this.formClient.value.newPassword,
    };
    // console.log(user);

    this.ups.updatePassword(user).subscribe( data => {
      alert('Votre mot de passe a été mise à jour avec succés');
      return this.route.navigate(['profil/client']);
    }, error => {
      this.errorMessage = error;
      // console.log(error);

    });
  }
  backClicked() {
    this._location.back();
  }

}
