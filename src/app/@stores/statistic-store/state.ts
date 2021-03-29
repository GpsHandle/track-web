import { Statistics } from '@app/@api/models/statistics';

export class State {
  statistics: Statistics;
  loading: boolean;
  error: string;
}

export const initialState: State = {
  statistics: null,
  error: null,
  loading: false,
};
