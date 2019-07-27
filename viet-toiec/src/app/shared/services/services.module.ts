import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {BootstrapModule} from '../modules/bootstrap.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BootstrapModule

  ],
  exports: [
  ],
  providers: [
    ModalService
  ]
})
export class ServicesModule { }
