import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    // $('.sidebar-toggle').on('click', function() {
    //   console.log('toggel clicked');
    //   $('.sidebar-mini').toggleClass('sidebar-collapse');
    // });
  }

}
