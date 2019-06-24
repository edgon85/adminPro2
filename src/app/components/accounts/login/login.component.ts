import { Component, OnInit } from '@angular/core';

declare function init_plugin_login();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugin_login();
  }

}
