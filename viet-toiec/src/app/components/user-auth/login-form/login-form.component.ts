import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from 'angular2-token';
import {ModalService} from '../../../shared/services/modal.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  signInUser = {
    email: '',
    password: ''
  };

  constructor(private tokenAuthSerivce: Angular2TokenService,
              private modalService: ModalService) { }

  ngOnInit() {
  }

  onSignIn() {
    this.tokenAuthSerivce.signIn(this.signInUser).subscribe(

      res => {
        if (res.status === 200) {
          console.log('ss');
          this.modalService.closeModal();
        }
      },

      err => {
        console.log('ss1');
      }
    );
  }

}
