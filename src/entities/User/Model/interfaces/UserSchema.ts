import { User } from './User';

export interface UserSchema {
    access_token?: string;
    refresh_token?: string;
    user?: User
}
