import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['../../../assets/styles/catalog.component.less']
})
export class CatalogComponent implements OnInit {
  public ourWork = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 9; i++) {
      this.ourWork.push('/assets/images/work-' + i + '.jpg');
    }
  }

}
