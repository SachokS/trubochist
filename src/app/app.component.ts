import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/app.component.less']
})
export class AppComponent implements OnInit {

  public info: { name: string, email: string } = {name: 'qweqw', email: 'stasikostrich98@gmail.com'};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    /*this.http.post('http://localhost:3000/sendFormData', this.info).subscribe((result) => {
      console.log(result);
    }, error => {
      console.log(error);
    });*/
  }
}
