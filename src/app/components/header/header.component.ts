import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/styles/header.component.less']
})
export class HeaderComponent implements OnInit {

  public menuOpened: boolean = false;

  constructor() {
  }

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

  public openMenu() {
    this.menuOpened = !this.menuOpened;
    this.menuOpened ? document.querySelector('body').style.overflow = 'hidden'
      : document.querySelector('body').style.overflow = 'unset';
  }

  public call() {
    window.open('tel:+375296030773');
  }

}
