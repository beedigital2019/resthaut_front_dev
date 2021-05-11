import { RestoService } from './../../../services/resto/resto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.scss']
})
export class AddRestoComponent implements OnInit {
  formResto: FormGroup;
  submitted = false;
  selectedFile: any;
  uploadData: FormData;
  constructor(private router: Router, private rs: RestoService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formResto = this.formBuilder.group({
      image: ['', Validators.required],
      nomComplet: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      telephone: ['', Validators.required],
      nomResto: ['', Validators.required],
      description: ['', Validators.required],
      adresse: ['', Validators.required],
    });
  }
  // tslint:disable-next-line: typedef
  onFileSelected($event){
    if ($event.target.files.length > 0) {
      this.selectedFile = $event.target.files[0];
      this.formResto.get('image').setValue(this.selectedFile);
    }
  }
  get f() { return this.formResto.controls; }
  onSubmitForm(){
    this.submitted = true;
    if (this.formResto.invalid) {
      return;
    }
    this.uploadData = new FormData();
    this.uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.uploadData.append('nomComplet', this.formResto.value.nomComplet);
    this.uploadData.append('description', this.formResto.value.description);
    this.uploadData.append('username', this.formResto.value.username);
    this.uploadData.append('password', this.formResto.value.password);
    this.uploadData.append('nomResto', this.formResto.value.nomResto);
    this.uploadData.append('adresse', this.formResto.value.adresse);
    this.uploadData.append('telephone', this.formResto.value.telephone);

    console.log(this.uploadData);
    this.rs.postResto(this.uploadData).subscribe( data => {
      alert('Votre resto a été bien ajouté ');
      return this.router.navigate(['/']);
    });
  }
}
