import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  host: { '(document:click)': 'onClick($event)' },
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  @Input() userInfo: {
    city: string;
    country: string;
    email: string;
    login: string;
    name: string;
    password: string;
    surname: string;
  };
  isUserInfoPartOpen: boolean = false;

  constructor(private _eref: ElementRef) {}

  ngOnInit() {
    console.log(this.userInfo);
  }

  openUserInfo() {
    this.isUserInfoPartOpen = true;
  }
  closeUserInfo() {
    this.isUserInfoPartOpen = false;
  }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.closeUserInfo();
    }
  }
}
