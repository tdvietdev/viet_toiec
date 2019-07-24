import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from 'angular2-token';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(authService: Angular2TokenService) { }

  ngOnInit() {
  }

}
