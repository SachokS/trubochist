import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['../../../assets/styles/main-page.component.less']
})
export class MainPageComponent implements OnInit {

  public cafes = [];

  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle("Чистка, монтаж, установка дымоходов, " +
      "каминов в Минске от трубочиста" +
      " | обслуживание вентиляционных систем " +
      "| диагностика по низким ценам\n");
    this.meta.addTag({
      name: 'description',
      content: 'Очистка, монтаж и установка дымоходов, каминов и котлов в Минске, ' +
        'а также профессиональное обслуживание вентиляционных систем по доустпным ценам.' +
        ' Звоните по телефону ☎ +375 (29) 603-07-73.\n'
    });
  }

  ngOnInit() {
    this.cafes = [
      {
        title: '«Ривьера Кантри Клаб»',
        img: '/assets/images/riviera.png'
      },
      {
        title: 'APS Logistic',
        img: '/assets/images/aps-logistic.png'
      }
      ,
      {
        title: 'Эко-ресторан Раздолле',
        img: '/assets/images/razdolle-restaurant.png'

      }];
  }

}
