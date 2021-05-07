import { Router, RouterModule } from '@angular/router';
import { MenuService } from './../../../services/menu/menu.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private ms: MenuService, private router: Router) { }
  get f() { return this.formMenu.controls; }
  formMenu: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.formMenu = this.formBuilder.group({
      categorie: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]]
    });
  }
  onSubmitForm() {
    this.submitted = true;
    if (this.formMenu.invalid) {
      return;
    }
    const menu = {
      categorie: this.formMenu.value.categorie,
    };
    this.ms.postMenu(menu).subscribe( data => {
      console.log(data);
      return this.router.navigate(['dashboard/menu/list']);
    }, error => {
      console.log(error);

    });
  }
}
