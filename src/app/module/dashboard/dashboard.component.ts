import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/count/count.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private cs: CountService) { }
  data: any;
  ngOnInit(): void {
    this.cs.getCount().subscribe( data => {
      this.data = data;
    });
  }

}
