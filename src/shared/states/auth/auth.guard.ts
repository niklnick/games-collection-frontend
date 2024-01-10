import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from './auth.state';

export const AuthGuard: CanActivateFn = (): boolean => {
    return !!inject(Store).selectSnapshot(AuthState.token);
}
