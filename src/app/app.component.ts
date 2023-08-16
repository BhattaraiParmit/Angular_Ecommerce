import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationEnd,
  NavigationCancel,
} from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ShoppingMart';

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationCancel && event.url === '/logout') {
        this.authService.logout();
      }
    });
  }
}
