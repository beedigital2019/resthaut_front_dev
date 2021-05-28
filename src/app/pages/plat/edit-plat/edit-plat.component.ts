import { MenuService } from './../../../services/menu/menu.service';
import { PlatService } from './../../../services/plat/plat.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.scss']
})
export class EditPlatComponent implements OnInit {
  formPlat: FormGroup;
  menus: any;
  submitted = false;
  selected: string;
  constructor(private ps: PlatService,
              private route: ActivatedRoute,
              private ms: MenuService,
              private router: Router,
              private formBuilder: FormBuilder
  ) { }
  get f() { return this.formPlat.controls; }
  ngOnInit(): void {
    this.formPlat = this.formBuilder.group({
      nomPlat: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      prix: ['', [Validators.required]],
      menu: ['', Validators.required],
    });
    this.ms.getAllMenu().subscribe(data => {
      this.menus = data;
    });
    this.route.params.subscribe(params => {
      this.ps.getId(params.id).subscribe(data => {
        this.formPlat.patchValue(data);
        this.selected = this.formPlat.value.menu.categorie;
        console.log(this.formPlat);
      });
    });
  }
  // onSubmitForm(){
  //   this.submitted = true;
  //   if (this.formPlat.invalid) {
  //     return;
  //   }
  //   const  plats = {
  //     nomPlat: this.formPlat.value.nomPlat,
  //     description: this.formPlat.value.description,
  //     prix: this.formPlat.value.prix,
  //     menu: this.formPlat.value.menu
  //   };

  //   this.ps.putPlat(this.route.snapshot.params.id, plats).subscribe( data => {
  //     alert('Votre plat a été bien ajouté ');
  //     return this.router.navigate(['dashboard/plat/list']);
  //   });
  // }
}
