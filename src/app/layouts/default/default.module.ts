import { AddCommandeComponent } from './../../pages/commande/add-commande/add-commande.component';
import { AddPlatComponent } from './../../pages/plat/add-plat/add-plat.component';
import { AddMenuComponent } from './../../pages/menu/add-menu/add-menu.component';
import { AddReservationComponent } from './../../pages/reservation/add-reservation/add-reservation.component';
import { ListMenuComponent } from './../../pages/menu/list-menu/list-menu.component';
import { ListPlatComponent } from './../../pages/plat/list-plat/list-plat.component';
import { ListReservationComponent } from './../../pages/reservation/list-reservation/list-reservation.component';
import {MatSidenavModule} from '@angular/material/sidenav'; import { SharedModule } from './../../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../module/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommandeComponent } from 'src/app/pages/commande/list-commande/list-commande.component';




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

  ]
})
export class DefaultModule { }
