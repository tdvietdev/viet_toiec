import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Angular2TokenService } from 'angular2-token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'viet-toiec';

  constructor(private authToken: Angular2TokenService) {
    this.authToken.init(environment.token_auth_config);
    this.authToken.signIn({email: "user1@user.com", password: "123456"}).subscribe(

      res => {

        console.log('auth response:', res);
        console.log('auth response headers: ', res.headers.toJSON()); // log the response header to show the auth token
        console.log('auth response body:', res.json()); // log the response body to show the user
      },

      err => {
        console.error('auth error:', err);
      }
    )
  }
}
