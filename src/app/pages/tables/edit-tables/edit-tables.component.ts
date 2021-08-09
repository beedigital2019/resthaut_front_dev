import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TablesService } from 'src/app/services/tables/tables.service';

@Component({
  selector: 'app-edit-tables',
  templateUrl: './edit-tables.component.html',
  styleUrls: ['./edit-tables.component.scss']
})
export class EditTablesComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private ts: TablesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }
  get f() { return this.tableForm.controls; }
  ngOnInit(): void {
    this.tableForm = this.formBuilder.group({
      numero: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      nbPersonne: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
    this.route.params.subscribe(params => {
      this.ts.getId(params.id).subscribe(data => {
        this.tableForm.patchValue(data);
        this.id = this.route.snapshot.params.id;
        console.log(this.id);

      });
    });
  }
  onSubmitForm(){
    this.submitted = true;
    if (this.tableForm.invalid) {
      return;
    }
    const tables = {
      numero: parseInt(this.tableForm.value.numero),
      nbPersonne: parseInt(this.tableForm.value.nbPersonne),
    };
    console.log(tables);

    this.ts.putTable(this.id, tables).subscribe( data => {
      // alert('Votre tables a été bien ajouté ');
      this.toastr.success('Votre table a été bien modifié ', '');
      return this.router.navigate(['dashboard/tables/list']);
    }, errors => {
      this.toastr.error('Oups, une erreur s\'est produite', '', {
        timeOut: 3000,
      });
      console.log(errors);

    });
  }
}
