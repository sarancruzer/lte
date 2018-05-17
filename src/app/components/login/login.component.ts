import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  icheck: JQuery;

  constructor(private _router: Router) { }

  ngOnInit() {
    
  }

  navigate(url) {
    this._router.navigate([url]);
  }

}
