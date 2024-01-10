import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserModel } from 'src/shared/models/user.model';
import { AuthState } from 'src/shared/states/auth/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly user$: Observable<UserModel | null>;

  constructor(private readonly store: Store) {
    this.user$ = this.store.select<UserModel | null>(AuthState.user);
  }
}
