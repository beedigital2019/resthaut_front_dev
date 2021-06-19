import { UpdatePasswordComponent } from './../../update-password/update-password.component';
import { ClientService } from './../../../services/client/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.scss']
})
export class ProfilClientComponent implements OnInit {
  profil: any;
  constructor(  private cs: ClientService,
                private router: Router,
                public dialog: MatDialog,
              )
              { }

  ngOnInit(): void {

    this.cs.getProfilClient().subscribe( data => {
      this.profil = data;
      console.log(data);
    }, error => {
      alert(error);
    });
  }
  openDialog() {
      const dialogRef = this.dialog.open(UpdatePasswordComponent, {
        width: '450px',
        height : '400px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
