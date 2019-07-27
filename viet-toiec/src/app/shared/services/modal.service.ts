import {Injectable, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AuthModalComponent} from '../../components/user-auth/auth-modal/auth-modal.component';

@Injectable()
export class ModalService {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithComponent(component: TemplateRef<any> | any) {
    const initialState = {
      isLoginForm: true
    };
    this.bsModalRef = this.modalService.show(component,
      {
        class: 'modal-dialog-centered',
        initialState
      });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  closeModal() {
    if (!this.bsModalRef) {
      return;
    }

    this.bsModalRef.hide();
    this.bsModalRef = null;
  }
}
