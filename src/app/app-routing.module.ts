import { LoginComponent } from './pages/login/login/login.component';
import { AddCommandeComponent } from './pages/commande/add-commande/add-commande.component';
import { AddMenuComponent } from './pages/menu/add-menu/add-menu.component';
import { AddPlatComponent } from './pages/plat/add-plat/add-plat.component';
import { AddReservationComponent } from './pages/reservation/add-reservation/add-reservation.component';
import { ListReservationComponent } from './pages/reservation/list-reservation/list-reservation.component';
import { ListPlatComponent } from './pages/plat/list-plat/list-plat.component';
import { ListMenuComponent } from './pages/menu/list-menu/list-menu.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './pages/accueil/accueil.component';
import { ListCommandeComponent } from './pages/commande/list-commande/list-commande.component';
import { LoginGuardService } from './services/helpers/login-guard.service';

const routes: Routes = [
  { path: '' , component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: DefaultComponent, canActivate: [LoginGuardService], children:
    [
      {path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuardService]},
      {path: 'dashboard/commande/list', component: ListCommandeComponent, canActivate: [LoginGuardService]},
      {path: 'dashboard/menu/list', component: ListMenuComponent},
      {path: 'dashboard/plat/list', component: ListPlatComponent, canActivate: [LoginGuardService]},
      {path: 'dashboard/reservation/list', component: ListReservationComponent, canActivate: [LoginGuardService]},
      {path: 'dashboard/reservation/add', component: AddReservationComponent, canActivate: [LoginGuardService]},
      {path: 'dashboard/plat/add', component: AddPlatComponent, canActivate: [LoginGuardService]},
      {path: 'dashboard/menu/add', component: AddMenuComponent, canActivate: [LoginGuardService]},
      {path: 'dashboard/commande/add', component: AddCommandeComponent, canActivate: [LoginGuardService]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
