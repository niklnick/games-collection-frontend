import { UserModel } from "./user.model";

export interface AuthModel {
    readonly user: UserModel;
    readonly token: string;
}
