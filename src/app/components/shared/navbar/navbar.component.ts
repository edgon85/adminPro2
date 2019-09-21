import { Component, OnInit } from '@angular/core';
declare function init_plugin_navbar();


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugin_navbar();
  }

}
