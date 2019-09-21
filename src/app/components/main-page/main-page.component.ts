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

  public ourJobs = [];
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    for (let i = 0; i < 10; i++) {
      this.ourJobs.push('Lorem ipsum dolor sit amet.');
    }
  }

}
