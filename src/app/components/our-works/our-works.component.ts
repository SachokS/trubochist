import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['../../../assets/styles/catalog.component.less']
})
export class OurWorksComponent implements OnInit {
  public ourWork = [];
  public rivieraWorks = [];
  public apsLogisticWorks = [];
  public razdolleWorks = [
    '/assets/images/razdolle-work-1.jpg',
    '/assets/images/razdolle-work-2.jpg',
    '/assets/images/razdolle-work-3.jpg',
    '/assets/images/razdolle-work-4.jpg'
  ];

  constructor() {
  }

  ngOnInit() {
    for (let i = 1; i < 9; i++) {
      this.ourWork.push('/assets/images/work-' + i + '.jpg');
    }
  }

}
