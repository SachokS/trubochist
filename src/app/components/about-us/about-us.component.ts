import {Component, OnInit} from '@angular/core';
import ymaps from 'ymaps';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['../../../assets/styles/about-us.component.less']
})
export class AboutUsComponent implements OnInit {

  public map: any;
  public storeLocation;

  ngOnInit() {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru')
      .then(maps => {
        this.map = new maps.Map('yandex-map', {
          center: [53.935632, 27.583230],
          zoom: 14
        });
        this.storeLocation = new maps.GeoObject({
          geometry: {
            type: 'Point',
            coordinates: [53.935632, 27.583230]
          }
        });
        this.map.geoObjects.add(this.storeLocation);
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  }

  public call() {
    window.open('tel:+375296030773');
  }
}
