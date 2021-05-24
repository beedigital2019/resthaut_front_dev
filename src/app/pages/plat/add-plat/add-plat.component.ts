import { Router } from '@angular/router';
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

  constructor( private ps: PlatService, private ms: MenuService , private router: Router, private formBuilder: FormBuilder ) { }
  get f() { return this.formPlat.controls; }
  formPlat: FormGroup;
  menus: any;
  submitted = false;
  urlimg = 'data:image/png;base64,';
  ngOnInit(): void {
    this.formPlat = this.formBuilder.group({
      nomPlat: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      prix: ['', [Validators.required]],
      menu: ['', Validators.required],
    });
    this.ms.getAllMenu().subscribe( data => {
      this.menus = data;
      console.log(data);
    });

  }

  onSubmitForm(){
    this.submitted = true;
    // if (this.formPlat.invalid) {
    //   return;
    // }
    const  plats = {
      nomPlat: this.formPlat.value.nomPlat,
      description: this.formPlat.value.description,
      prix: this.formPlat.value.prix,
      menu: this.formPlat.value.menu
    };
    console.log(plats);

    this.ps.postPlat(plats).subscribe( data => {
      alert('Votre plat a été bien ajouté ');
      return this.router.navigate(['dashboard/plat/list']);
    });
  }

}
