import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    var sidebar = $('.sidebar');
    sidebar.find('li > a').on('click', function (e) {
      if ($(this).next().hasClass('treeview-menu') === true) {
        console.log('treeview true');
        $(this).next().slideDown(200);
        $(this).parent().parent().children('li.treeview.active').children('ul.treeview-menu').slideUp(200);
        $(this).parent().parent().children('li.treeview.active').removeClass('active');
        $(this).parent('li').addClass('active');

      } else {
        console.log('treeview false');
        $(this).next().slideUp(200);
        $(this).parent().parent().children('li.treeview.active').children('ul.treeview-menu').slideUp(200);
        $(this).parent('li').addClass('active');
        $(this).parent().parent().children('li.treeview.active').removeClass('active');
      }
      e.preventDefault();
    });


  }



  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
}

}
