import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { PageHeaderComponent } from './components/layout/page-header/page-header.component';
import { PageContentComponent } from './components/layout/page-content/page-content.component';
import { PageFooterComponent } from './components/layout/page-footer/page-footer.component';
import { LayoutComponent } from './components/layout/layout.component';

import { Angular2TokenService } from 'angular2-token';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageContentComponent,
    PageFooterComponent,
    LayoutComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
