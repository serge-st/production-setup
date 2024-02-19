import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/LoginModal';

export interface StateSchema {
    userData: UserSchema;
    login?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;
