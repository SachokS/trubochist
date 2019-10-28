import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, EmailValidator} from '@angular/forms';
import ymaps from 'ymaps';
import {HttpClient} from '@angular/common/http';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['../../../assets/styles/about-us.component.less']
})
export class AboutUsComponent implements OnInit {

  public map: any;
  public storeLocation;
  public messageResult: string;

  public emailForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([
      Validators.required, Validators.email
    ])],
    phone: ['', Validators.compose([
      Validators.required, Validators.pattern(
        /^\+375(25|29|33|44)([0-9]{7})$/)
    ])],
    message: ['']
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private meta: Meta) {
    this.meta.updateTag({name: 'title', content: 'Наши контакты'});
    this.meta.updateTag({name: 'description', content: 'У нас Вы можете заказать услуги по чистке, установке и демонтажу дымоходов'});
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
    // this.emailForm.valueChanges.subscribe((result) => console.log(result));
  }

  sendMail() {
    const user = {
      name: this.emailForm.value.name,
      email: this.emailForm.value.email,
      phone: this.emailForm.value.phone,
      mes: this.emailForm.value.message
    };
    this.http.post('https://kominar.by/mail/', user).subscribe((result) => {
      this.emailForm.reset();
      this.messageResult = 'Ваше сообщение успешно отправлено';
    }, error => {
      this.emailForm.reset();
      this.messageResult = 'Упс, что-то пошло не так';
    });

  }

  public call() {
    window.open('tel:+375296030773');
  }
}
