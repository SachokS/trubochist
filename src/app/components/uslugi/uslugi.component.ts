import {Component, OnInit} from '@angular/core';

interface Usluga {
  src: string;
  title: string;
  alt: string;
  text: string;
}

@Component({
  selector: 'app-uslugi',
  templateUrl: './uslugi.component.html',
  styleUrls: ['../../../assets/styles/uslugi.component.less']
})

export class UslugiComponent implements OnInit {

  public uslugi: Usluga[];

  constructor() {
  }

  ngOnInit() {
    this.uslugi = [
      {
        title: "Ремонт и очистка каминов",
        src: "",
        alt: "Ремонт и очистка каминов",
        text: ""
      },
      {
        title: "Ремонт и очистка печей",
        src: "",
        alt: "Ремонт и очистка печей",
        text: ""
      },
      {
        title: "Очистка вентиляции",
        src: "",
        alt: "Очистка вентиляции",
        text: ""
      },
      {
        title: "Монтаж печей и каминов",
        src: "",
        alt: "Монтаж печей и каминов",
        text: ""
      },
      {
        title: "Монтаж печей и каминов",
        src: "",
        alt: "Монтаж печей и каминов",
        text: ""
      }
    ]
  }

}
