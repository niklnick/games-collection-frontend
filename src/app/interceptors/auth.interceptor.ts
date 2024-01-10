import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/shared/states/auth/auth.state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly store: Store) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = this.store.selectSnapshot(AuthState.token);

    return next.handle(token ? req.clone({ setHeaders: { Authorization: 'Bearer ' + token } }) : req);
  }
}
