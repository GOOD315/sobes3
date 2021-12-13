import { UserRoles } from "./userRoles";

export class User {
    login: string = '';
    password: string = ''
    role: UserRoles = UserRoles.default;
}