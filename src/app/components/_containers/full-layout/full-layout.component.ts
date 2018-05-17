import { Component, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { 

  }

  ngOnInit() {
    this.document.body.classList.remove('register-page');
  }

}
