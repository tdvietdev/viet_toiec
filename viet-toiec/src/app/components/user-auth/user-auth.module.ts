import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthModalComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents: [AuthModalComponent],

  exports: [
    FormsModule,
    AuthModalComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  providers: [
    // BsModalService,
    // BsModalRef,
  ],
})
export class UserAuthModule { }
