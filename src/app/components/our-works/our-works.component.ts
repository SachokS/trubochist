import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['../../../assets/styles/catalog.component.less']
})
export class OurWorksComponent implements OnInit {
  public ourWork = [
    '/assets/images/our-work-riviera-1.jpg',
    '/assets/images/our-work-riviera-2.jpg',
    '/assets/images/aps-solver-work-1.jpg',
    '/assets/images/aps-solver-work-2.jpg',
    '/assets/images/aps-solver-work-3.jpg',
    '/assets/images/razdolle-work-1.jpg',
    '/assets/images/razdolle-work-2.jpg',
    '/assets/images/razdolle-work-3.jpg',
    '/assets/images/razdolle-work-4.jpg'
  ];

  constructor(private meta: Meta) {
    this.meta.updateTag({name: 'title', content: 'Примеры наших работ'});
  }

  ngOnInit() {
    for (let i = 1; i < 6; i++) {
      this.ourWork.push('/assets/images/work-' + i + '.jpg');
    }
  }

}
