export interface SignupModel {
    readonly email: string;
    readonly password: string;
    readonly name: {
        readonly first: string;
        readonly last: string;
    }
}
