import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoginModel } from 'src/shared/models/login.model';
import { Login } from 'src/shared/states/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly store: Store
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  login(login: LoginModel): void {
    this.isLoading = true;
    this.store.dispatch(new Login(login)).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['../user']);
    });
  }
}
