import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from './../../../core/services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this._createForm();
  }

  ngOnInit() {}

  private _createForm() {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.authService.getUsers(this.loginForm.value, 'login');
    this.loading = this.authService.getLoadingStatus();
  }

  goToRegistration() {
    this.router.navigate(['register']);
  }
}
