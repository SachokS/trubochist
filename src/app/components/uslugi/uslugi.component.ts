import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommonService} from "../../services/common.service";

interface Usluga {
  src: string;
  title: string;
  alt: string;
  text: string;
  link: string;
  key: number;
}

@Component({
  selector: 'app-uslugi',
  templateUrl: './uslugi.component.html',
  styleUrls: ['../../../assets/styles/uslugi.component.less']
})

export class UslugiComponent implements OnInit {

  public uslugi: Usluga[];

  constructor(private router: Router, private commonService: CommonService) {
  }

  ngOnInit() {
    this.uslugi = [
      {
        title: "Ремонт и очистка каминов",
        src: '/assets/images/kamin.jpg',
        alt: "Ремонт и очистка каминов",
        text: "",
        link: "remont-ochistka-kaminov",
        key: 1
      },
      {
        title: "Ремонт и очистка печей",
        src: '/assets/images/pech.jpg',
        alt: "Ремонт и очистка печей",
        text: "",
        link: "remont-ochistka-pechei",
        key: 2
      },
      {
        title: "Очистка вентиляции",
        src: '/assets/images/ventilatia.jpg',
        alt: "Очистка вентиляции",
        text: "",
        link: "ochistka-ventilatii",
        key: 3
      },
      {
        title: "Монтаж печей и каминов",
        src: '/assets/images/kamin-1.jpg',
        alt: "Монтаж печей и каминов",
        text: "",
        link: "montazh-ochistka-kaminov",
        key: 4
      },
      {
        title: "Обследование и очистка дымоходов",
        src: '/assets/images/dymohod.jpg',
        alt: "Обследование и очистка дымоходов",
        text: "",
        link: "obsledovanie-ochistka-dymohodov",
        key: 5
      }
    ]
  }

  public goToUslugaPage(usluga: Usluga) {
    this.commonService.usluga = usluga;
  }
}
