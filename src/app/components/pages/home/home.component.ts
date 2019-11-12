import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare function init_plugin_slick();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videoUrl = 'https://player.vimeo.com/video/333941974';
  altText = 'Casa e Imagen';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    init_plugin_slick();
  }

}
