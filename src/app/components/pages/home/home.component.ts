import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare function init_plugin_slick();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videoUrl = 'https://player.vimeo.com/video/333941974';
  altText = 'Casa e Imagen';

  constructor(public sanitizer: DomSanitizer, private router: Router) {}

  ngOnInit() {
    init_plugin_slick();
  }

  urlProyecto(name: string) {
    let url = `proyectos/${name}`;
    this.router.navigate([url]);
  }
}
