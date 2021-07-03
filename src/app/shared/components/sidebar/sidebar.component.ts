import { EditImageRestoComponent } from './../../../pages/resto/edit-image-resto/edit-image-resto.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { RestoService } from 'src/app/services/resto/resto.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  roles: any;
  image: any;
  nomResto: any;
  urlimg = 'data:image/png;base64,';
  currentUserSubject: any;
  constructor(
    private rs: RestoService,
    public dialog: MatDialog,
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
   }

  ngOnInit(): void {
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.image = JSON.parse(localStorage.getItem('image'));
    this.nomResto = JSON.parse(localStorage.getItem('nomResto'));
    
  }
  openDialog() {
    if (this.currentUserSubject.value) {
      const dialogRef = this.dialog.open(EditImageRestoComponent, {
        width: '450px',
        height : '400px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
  // onFileSelected($event){
  //   if ($event.target.files.length > 0) {
  //     this.selectedFile = $event.target.files[0];
  //     this.formImage.get('image').setValue(this.selectedFile);
  //   }
  // }
  // get f() { return this.formImage.controls; }
  // onSubmitForm(){
  //   this.submitted = true;
  //   if (this.formImage.invalid) {
  //     return;
  //   }
  //   this.uploadData = new FormData();
  //   this.uploadData.append('image', this.selectedFile, this.selectedFile.name);
  //   this.rs.postResto(this.uploadData).subscribe( data => {
  //     alert('Votre image a été bien ajouté ');

  //   }, error => {
  //    console.log(error);

  //   });
  // }
}
