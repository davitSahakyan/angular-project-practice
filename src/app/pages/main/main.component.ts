import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/services/auth-service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  loginedUser: {
    city: string;
    country: string;
    email: string;
    login: string;
    name: string;
    password: string;
    surname: string;
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginedUser = this.authService.getLoginedUser();
  }
}
