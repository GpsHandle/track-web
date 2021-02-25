import { User } from '../../@api/models';

export class State {
  error?: string;
  loading?: boolean;
  user?: User;
}

export const initialState: State = {
  error: null,
  loading: false,
  user: null
};
