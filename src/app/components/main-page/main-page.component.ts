import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['../../../assets/styles/main-page.component.less']
})
export class MainPageComponent implements OnInit {

  public cafes = [];

  constructor(private meta: Meta) {
    this.meta.addTag({name: 'title', content: 'Профессиональные услуги трубочиста'});
    this.meta.addTag({name: 'description', content: 'У нас Вы можете заказать услуги по чистке, установке и демонтажу дымоходов'});
  }

  ngOnInit() {
    this.cafes = [
      {
        title: '«Ривьера Кантри Клаб»',
        img: '/assets/images/riviera-country.jpeg'
      },
      {
        title: 'APS Logistic',
        img: '/assets/images/aps-logistic.png'
      }
      ,
      {
        title: 'Эко-ресторан Раздолле',
        img: '/assets/images/razdolle.jpg'

      }];
  }

}
