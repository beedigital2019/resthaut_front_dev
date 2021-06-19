import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.service';
import { UpdateService } from 'src/app/services/password/update.service';

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
  constructor(private formBuilder: FormBuilder, private ups: UpdateService) { }

  ngOnInit(): void {
    this.formClient = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
    },
    {  validator: MustMatch('newPassword', 'confirmPassword') }
    );
  }
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
      location.reload();
    }, error => {
      this.errorMessage = error;
      // console.log(error);

    });
  }

}
