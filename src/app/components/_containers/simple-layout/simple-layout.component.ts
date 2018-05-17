import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.css']
})
export class SimpleLayoutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { 

  }

  ngOnInit() {
    this.document.body.classList.add('register-page');
  }

}
