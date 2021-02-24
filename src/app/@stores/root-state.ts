import { AuthStoreModule } from './auth-store';
import {AuthState} from './auth-store'
export interface RootState {
  authenticate: AuthState;
}
