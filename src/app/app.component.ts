import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import { Metrika } from 'ng-yandex-metrika';
import {filter} from "rxjs/operators";
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/app.component.less']
})
export class AppComponent implements OnInit {

  constructor(
    private metrika: Metrika,
    private router: Router,
    private location: Location,
  ) {
    let prevPath = this.location.path();
    this.router
      .events.pipe(filter(event => (event instanceof NavigationEnd)))
      .subscribe(() => {
        const newPath = this.location.path();
        this.metrika.hit(newPath, {
          referer: prevPath,
        });
        prevPath = newPath;
      });
  }

  ngOnInit(): void {
  }
}
