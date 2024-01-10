import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { AuthModel } from "src/shared/models/auth.model";
import { UserModel } from "../../models/user.model";
import { Login, Logout, Signup } from "./auth.actions";

export interface AuthStateModel {
    user: UserModel | null;
    token: string | null;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        user: null,
        token: null
    }
})
@Injectable()
export class AuthState {
    constructor(private readonly authService: AuthService) { }

    @Selector()
    static user(authState: AuthStateModel): UserModel | null {
        return authState.user;
    }

    @Selector()
    static token(authState: AuthStateModel): string | null {
        return authState.token;
    }

    @Action(Signup)
    signup(ctx: StateContext<AuthStateModel>, action: Signup): Observable<AuthModel> {
        return this.authService.signup(action.signup).pipe(
            tap((auth: AuthModel) => {
                ctx.setState({
                    user: auth.user,
                    token: auth.token
                });
            })
        );
    }

    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login): Observable<AuthModel> {
        return this.authService.login(action.login).pipe(
            tap((auth: AuthModel) => {
                ctx.setState({
                    user: auth.user,
                    token: auth.token
                })
            })
        );
    }

    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>): void {
        ctx.setState({
            user: null,
            token: null
        })
    }
}
