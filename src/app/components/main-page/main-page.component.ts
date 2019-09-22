import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  public emailForm = this.fb.group({
    'name': [''],
    'email': ['', Validators.required],
    'message': ['', Validators.required]
  });

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

}
