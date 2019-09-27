import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['../../../assets/styles/main-page.component.less']
})
export class MainPageComponent implements OnInit {

  public cafes = [];

  public images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.cafes[i] = {title: 'Cafe' + i, img: `https://picsum.photos/900/500?random&t=${Math.random()}`, text: 'Some text' + i};
    }
  }

}
