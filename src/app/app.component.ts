import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Logout } from 'src/shared/states/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Games Collection';

  constructor(
    private readonly router: Router,
    private readonly store: Store
  ) { }

  logout(): void {
    this.store.dispatch(new Logout()).subscribe(() => this.router.navigate(['auth']));
  }
}
