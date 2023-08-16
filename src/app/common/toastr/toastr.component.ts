import { Component, OnInit } from '@angular/core';
// import { MdbNotificationService, MdbNotificationRef } from 'mdb-angular-ui-kit/notification';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit  {
  severity: string = '';
  summary: string = '';
  detail: string = '';
  // notificationRef: MdbNotificationRef<ToastrComponent> | null = null;
  text:string = '';
  icon:any = '';

  constructor() {}

  ngOnInit(): void {
  }
}
