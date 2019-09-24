import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public goToSocialNetwork(nameOfNetwork: string) {
    switch (nameOfNetwork) {
      case 'vk':
        window.open('https://vk.com/sachok13');
        break;
      case 'telegram':
        window.open(' https://t.me/Daymovoy');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/profile.php?id=100028524320869');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/konstantinkhodnevich/');
        break;
      case 'youtube':
        window.open('https://vk.com/sachok13');
        break;
    }
  }

}
