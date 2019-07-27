import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { ModalService } from '../../../shared/services/modal.service';
import { AuthModalComponent } from '../../user-auth/auth-modal/auth-modal.component';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  constructor(public authService: Angular2TokenService,
              private modalService: ModalService
              ) { }

  ngOnInit() {
  }

  openAuthModal() {
    this.modalService.openModalWithComponent(AuthModalComponent);
  }

}
