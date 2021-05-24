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
  selectedFile: any;
  uploadData: FormData;
  constructor(private formBuilder: FormBuilder, private ms: MenuService, private router: Router) { }
  get f() { return this.formMenu.controls; }
  formMenu: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.formMenu = this.formBuilder.group({
      image: ['', [Validators.required]],
      categorie: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
    });
  }
  onFileSelected($event){
    if ($event.target.files.length > 0) {
      this.selectedFile = $event.target.files[0];
      this.formMenu.get('image').setValue(this.selectedFile);
    }
  }
  onSubmitForm() {
    this.submitted = true;
    if (this.formMenu.invalid) {
      return;
    }
    this.uploadData = new FormData();
    this.uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.uploadData.append('categorie', this.formMenu.value.categorie);
    this.ms.postMenu(this.uploadData).subscribe( data => {
      alert('Votre menu a été bien ajouté avec success');
      return this.router.navigate(['dashboard/menu/list']);
    }, error => {
      console.log(error);

    });
  }
}
