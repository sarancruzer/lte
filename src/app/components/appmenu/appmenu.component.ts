import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';


@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    // $('ul li').click(function() {
    //   console.log('clicked');
    //   console.log($(this).parent('ul'));
    //   console.log($(this).parent('ul').children('li'));

      // if ($(this).parent('ul').children('li').hasClass('active')) {
      //   console.log('HAS CLASS');
      // }else{
      //   console.log('HAS NOT CLASS');
      // }


      // $(this).parent('ul li').hasClass('active').slideUp(200);

     // $(this).addClass('active').siblings().removeClass('active');
    //});


    var sidebar = $('.sidebar');
    sidebar.find('li > a').on('click', function (e) {
        //  $(this).parent('li').addClass('active').siblings().removeClass('active');
        //$(this).parent().parent().children('li.treeview.active').children('.treeview-menu').slideUp(500);


      //var parent = $(this).parent().parent();
      //  parent.children('li.active').children('a').removeClass('open');
      //  parent.children('li.active').children('a').removeClass('active');
      // parent.children('li.active').children('.treeview-menu').slideUp(200);
      //  parent.children('li').removeClass('active');


      // var sub = $(this).next();
      // if (sub.is(':visible')) {
      //   console.log('visible');
      //     sub.slideUp(200);
      // } else {
      //   console.log('not visible');
      //     $(this).parent().parent().addClass('active');
      //     sub.slideDown(200);
      // }


      if ($(this).next().hasClass('treeview-menu') === true) {
        console.log('treeview true');
        $(this).next().slideDown(200);
        $(this).parent().parent().children('li.treeview.active').children('ul.treeview-menu').slideUp(200);
        $(this).parent().parent().children('li.treeview.active').removeClass('active');
        $(this).parent('li').addClass('active');
        // $(this).parent().parent().children('li.treeview.active').css('display', 'none');
        // $(this).parent().parent().children('li.treeview.active').children('ul.treeview-menu').slideup(200);

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
