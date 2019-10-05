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
      case 'telegram':
        window.open(' https://t.me/Daymovoy');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/profile.php?id=100028524320869');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/konstantinkhodnevich/');
        break;
    }
  }

  public openMenu() {
    this.menuOpened = !this.menuOpened;
    if (this.menuOpened) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'unset';
    }
  }

  public call() {
    window.open('tel:+375296030773');
  }

}
