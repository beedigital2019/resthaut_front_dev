import { Router } from '@angular/router';
import { LoginService } from './../../../services/login/login.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private ls: LoginService, private route: Router) { }
  idGerant: number;
  ngOnInit(): void {
    this.idGerant = JSON.parse(localStorage.getItem('idGerant'));
    // console.log(this.idGerant);
  }
  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.ls.logout();
    return this.route.navigate(['/']);
  }
  onHome() {
    return this.route.navigate(['/']);
  }
  onUpdate() {
    return this.route.navigate(['dashboard/update-password']);
  }
  getId(id: number){
    this.route.navigate(['dashboard/edit/gerant/', id]);
  }
}
