import { LoginModel } from "src/shared/models/login.model";
import { SignupModel } from "src/shared/models/signup.model";

export class Signup {
    static readonly type: string = '[Auth] Signup';

    constructor(public signup: SignupModel) { }
}

export class Login {
    static readonly type: string = '[Auth] Login';

    constructor(public login: LoginModel) { }
}

export class Logout {
    static readonly type: string = '[Auth] Logout';
}
