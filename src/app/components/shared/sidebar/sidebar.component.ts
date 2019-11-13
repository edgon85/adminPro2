import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar/sidebar.service';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
declare function init_plugin();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isCollapsed: boolean = false;
  expandir: string = 'show';
  noExpandor: string = '';
  urlPath = '';

  constructor(
    public _sidebarService: SidebarService,
    public route: Router) {

      this.route.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.routeConfig)
      ).subscribe(
        (resp) => {
          console.log(resp.path);
          this.urlPath = resp.path;
          // for (const i of this._sidebarService.menuPages) {
          //   for (const j of i.submenu) {
          //     let url = j.url.slice(1);
          //     if ( resp.path !== url ) {
          //       this.expandir = '';
          //     } else {
          //       console.log('Sip...');
          //       this.expandir = 'show';
          //     }
          //   }
          // }
        }
      );
    }

  ngOnInit() {
    init_plugin();
  }

}
