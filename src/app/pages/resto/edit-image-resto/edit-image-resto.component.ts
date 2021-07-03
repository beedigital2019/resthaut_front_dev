import { RestoService } from 'src/app/services/resto/resto.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';
@Component({
  selector: 'app-edit-image-resto',
  templateUrl: './edit-image-resto.component.html',
  styleUrls: ['./edit-image-resto.component.scss']
})
export class EditImageRestoComponent implements OnInit {
  formImage: FormGroup;
  submitted = false;
  selectedFile: any;
  uploadData: FormData;
  images: any;
  urlimg = 'data:image/png;base64,';
  constructor(
    private router: Router,
    private res: RestoService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.formImage = this.formBuilder.group({
      image: ['', Validators.required],
    });
    this.images = JSON.parse(localStorage.getItem('image'));
  }
  onFileSelected($event){
    if ($event.target.files.length > 0) {
      this.selectedFile = $event.target.files[0];
      this.formImage.get('image').setValue(this.selectedFile);
    }
  }
  get f() { return this.formImage.controls; }
  onSubmitForm(){
    // this.submitted = true;
    // if (this.formImage.invalid) {
      //   return;
      // }
      this.uploadData = new FormData();
      this.uploadData.append('image', this.selectedFile, this.selectedFile.name);
      console.log(this.selectedFile, this.uploadData);

      this.res.updateImageResto(this.uploadData).subscribe( data => {
        this.toastr.success('Votre image de profile a été mise à jour', '');
        this._location.back();
        // const currentUrl = this.router.url;
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        // this.router.onSameUrlNavigation = 'reload';
        // this.router.navigate([currentUrl]);
      }, error => {
        this.toastr.error('Oups, une erreur s\'est produite', '', {
          timeOut: 3000,
        });
      });
  }
}
