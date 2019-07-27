import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { PageHeaderComponent } from './components/layout/page-header/page-header.component';
import { PageContentComponent } from './components/layout/page-content/page-content.component';
import { PageFooterComponent } from './components/layout/page-footer/page-footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserAuthModule } from './components/user-auth/user-auth.module';
import { Angular2TokenService } from 'angular2-token';
import { HttpModule } from '@angular/http';
import { ServicesModule } from './shared/services/services.module';
import { ModalService } from './shared/services/modal.service';
import {BootstrapModule} from './shared/modules/bootstrap.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageContentComponent,
    PageFooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    BootstrapModule,
    UserAuthModule,
    ServicesModule
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
