import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['../../../assets/styles/main-page.component.less']
})
export class MainPageComponent implements OnInit {

  public cafes = [];

  ngOnInit() {
    this.cafes = [
      {
        title: "«Ривьера Кантри Клаб»",
        img: '/assets/images/riviera-country.jpeg'
      },
      {
        title: "APS Logistic",
        img: '/assets/images/aps-logistic.png'
      }
      ,
      {
        title: "Эко-ресторан Раздолле",
        img: '/assets/images/razdolle.jpg'

      }];
  }

}
