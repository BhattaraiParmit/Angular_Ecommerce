import { Component, OnInit } from '@angular/core';
import { CurrentUser } from 'src/app/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userInfo: any = {};
  ngOnInit(): void {
    this.userInfo = CurrentUser.getCurrentUser();
  }
}
