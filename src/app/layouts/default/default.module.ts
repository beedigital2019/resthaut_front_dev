import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddCommandeComponent } from './../../pages/commande/add-commande/add-commande.component';
import { AddPlatComponent } from './../../pages/plat/add-plat/add-plat.component';
import { AddMenuComponent } from './../../pages/menu/add-menu/add-menu.component';
import { AddReservationComponent } from './../../pages/reservation/add-reservation/add-reservation.component';
import { ListMenuComponent } from './../../pages/menu/list-menu/list-menu.component';
import { ListPlatComponent } from './../../pages/plat/list-plat/list-plat.component';
import { ListReservationComponent } from './../../pages/reservation/list-reservation/list-reservation.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from './../../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../module/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommandeComponent } from 'src/app/pages/commande/list-commande/list-commande.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ListCommandeComponent,
    ListMenuComponent,
    ListPlatComponent,
    ListReservationComponent,
    AddReservationComponent,
    AddMenuComponent,
    AddPlatComponent,
    AddCommandeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MaterialFileInputModule,
    MatToolbarModule,
    MatRadioModule
  ]
})
export class DefaultModule { }
