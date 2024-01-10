import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SignupModel } from 'src/shared/models/signup.model';
import { Signup } from 'src/shared/states/auth/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  readonly signupForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly store: Store
  ) {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    });
  }

  signup(signup: SignupModel): void {
    this.isLoading = true;
    this.store.dispatch(new Signup(signup)).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['../user']);
    });
  }
}
