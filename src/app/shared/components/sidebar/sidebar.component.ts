import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  roles: any;
  image: any;
  nomResto: any;
  urlimg = 'data:image/png;base64,';
  constructor() { }

  ngOnInit(): void {
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.image = JSON.parse(localStorage.getItem('image'));
    this.nomResto = JSON.parse(localStorage.getItem('nomResto'));
  }

}
