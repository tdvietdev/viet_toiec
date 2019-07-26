import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    AuthModalComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],

  exports: [
    AuthModalComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  providers: [],
})
export class UserAuthModule { }
