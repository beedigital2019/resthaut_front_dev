import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from './../../../services/plat/plat.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.scss']
})
export class AddPlatComponent implements OnInit {

  constructor( private ps: PlatService,
               private ms: MenuService ,
               private router: Router,
               private formBuilder: FormBuilder ) { }
  get f() { return this.formPlat.controls; }
  formPlat: FormGroup;
  menus: any;
  submitted = false;
  selected: string;
  urlimg = 'data:image/png;base64,';
  selectedFile: any;
  uploadData: FormData;
  ngOnInit(): void {
    this.formPlat = this.formBuilder.group({
      nomPlat: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      prix: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      menu: ['', Validators.required],
      image: ['', Validators.required],
    });
    this.ms.getAllMenu().subscribe( data => {
      this.menus = data['hydra:member'];
    });
  }
  onFileSelected($event){
    if ($event.target.files.length > 0) {
      this.selectedFile = $event.target.files[0];
      this.formPlat.get('image').setValue(this.selectedFile);
    }
  }
  onSubmitForm(){
    this.submitted = true;
    if (this.formPlat.invalid) {
      return;
    }
    this.uploadData = new FormData();
    this.uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.uploadData.append('nomPlat', this.formPlat.value.nomPlat);
    this.uploadData.append('description', this.formPlat.value.description);
    this.uploadData.append('prix', this.formPlat.value.prix);
    this.uploadData.append('menu', this.formPlat.value.menu);
    this.ps.postPlat(this.uploadData).subscribe( data => {
      alert('Votre plat a été bien ajouté ');
      return this.router.navigate(['dashboard/plat/list']);
    });
  }

}
