import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-usluga',
  templateUrl: './usluga.component.html',
  styleUrls: ['../../../assets/styles/usluga.component.less']
})
export class UslugaComponent implements OnInit {

  constructor(private commonService: CommonService) {
  }

  public usluga;

  ngOnInit() {
    this.usluga = this.commonService.usluga;
  }

}
