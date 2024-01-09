export interface UserModel {
    readonly id: string;
    readonly email: string;
    readonly name: {
        readonly first: string;
        readonly last: string;
    }
}
