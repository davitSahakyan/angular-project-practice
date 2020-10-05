import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  loginedUser: any;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  getUsers(user, type) {
    return this.http
      .get('https://login-34417.firebaseio.com/users.json')
      .subscribe((res) => {
        switch (type) {
          case 'register':
            if (!this.registeredUser(user, Object.values(res), type)) {
              this.registerUser(user);
            } else {
              alert('user with this email or login exists');
            }
            break;
          case 'login':
            if (this.registeredUser(user, Object.values(res), type)) {
              alert('success');
              this.loginedUser = this.registeredUser(
                user,
                Object.values(res),
                type
              );
              this.router.navigate(['main']);
            }
            break;
        }
      });
  }

  getLoginedUser() {
    return this.loginedUser;
  }

  registeredUser(user, users, type) {
    let foundUser;
    switch (type) {
      case 'register':
        foundUser = users.find(
          (elem) => elem.login === user.login || elem.email === user.email
        );
        break;
      case 'login':
        foundUser = users.find(
          (elem) => elem.login === user.login && elem.password === user.password
        );
        break;
    }
    return foundUser;
  }

  registerUser(user) {
    return this.http
      .post('https://login-34417.firebaseio.com/users.json', user)
      .subscribe();
  }

  consoleSomething() {
    console.log('something');
  }
}
