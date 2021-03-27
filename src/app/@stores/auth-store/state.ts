import { User } from '../../@api/models';
import { LoginModel } from '@app/auth/login.model';

export class State {
  error?: string;
  loading?: boolean;
  userModel?: LoginModel;
  user?: User;
}

export const initialState: State = {
  error: null,
  loading: false,
  user: null,
};
