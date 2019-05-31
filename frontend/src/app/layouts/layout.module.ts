import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent} from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
  ]
})

export class LayoutModule { }
