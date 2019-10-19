import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import ymaps from 'ymaps';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['../../../assets/styles/about-us.component.less']
})
export class AboutUsComponent implements OnInit {

  public map: any;
  public storeLocation;

  public emailForm = this.fb.group({
    name: [''],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

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
  sendMail() {
    let user = {
      name: this.emailForm.value.name,
      email: this.emailForm.value.email,
      mes: this.emailForm.value.message
    }
    this.http.post('http://localhost:3000/sendMessage', user).subscribe();
    alert('Успешно отправлено');
    window.location.reload();
  }
  public call() {
    window.open('tel:+375296030773');
  }
}
