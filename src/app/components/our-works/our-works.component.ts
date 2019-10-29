import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

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

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle("Примеры работ чистки дымоходов, каминов, котлов в Минске | Трубочист\n");
    this.meta.addTag({
      name: 'description',
      content: 'Ознакомьтесь с примерами работ по очистке,' +
        ' монтажу и установке дымоходов, котлов и каминов в Минске.' +
        ' ✓ Доступные цены! ✓ Гарантия качества!' +
        ' ✓ Профессиональное обслуживание! Наш номер ☎ +375 (29) 603-07-73.'
    });
  }

  ngOnInit() {
    for (let i = 1; i < 20; i++) {
      this.ourWork.push('/assets/images/work-' + i + '.jpg');
    }
  }

}
