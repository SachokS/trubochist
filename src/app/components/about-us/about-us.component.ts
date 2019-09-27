import {Component, OnInit} from '@angular/core';
import ymaps from 'ymaps';
import {FormBuilder, Validators} from '@angular/forms';
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
      .load()
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
    /*console.log(this.emailForm.value);
    this.subscription = this.sendmailservice.sendEmail(this.infoForm.value).
    subscribe(data => {
      let msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, "error");
    } );*/
    this.http.post('http://localhost:3000/sendMessage', this.emailForm.value).subscribe(result => console.log(result));
  }

}
