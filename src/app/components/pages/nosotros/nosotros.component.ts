import { Component, OnInit } from '@angular/core';

declare function init_plugin_slick();

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    init_plugin_slick();
  }
}
