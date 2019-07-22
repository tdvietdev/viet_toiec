import { MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
} from '@angular/material';

import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule
  ]
})

export class MaterialModule {

}
