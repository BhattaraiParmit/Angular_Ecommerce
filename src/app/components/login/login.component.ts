import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, pipe } from 'rxjs';
import { LoginModel } from 'src/app/model';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginModel: LoginModel = new LoginModel();
  component: string = 'login';

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  switchComponent(component: string) {
    this.component = component;
  }

  login(type: any) {
    switch (type) {
      case 'login':
        console.log(type);
        if (this.loginModel.email != '' && this.loginModel.password != '') {
          let params = {
            email: this.loginModel.email,
            password: this.loginModel.password,
          };
          this.authenticationService
            .login(params)
            .pipe(finalize(() => {}))
            .subscribe((response: any) => {
              if (response && response.success) {
                localStorage.setItem('refresh_token', response.data.token);
                this.getAccessToken(response.data.token);
              }
            });
        }
        break;

      case 'register':
        break;
    }
  }

  getAccessToken(token: string) {
    this.authenticationService
      .getAccessToken(token)
      .pipe(finalize(() => {}))
      .subscribe((response: any) => {
        if (response && response.access) {
          localStorage.setItem('access_token', response.access);
          this.router.navigate(['dashboard'])
        }
      });
  }
}
