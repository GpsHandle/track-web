import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Device } from '@app/@api/models/device';

export const deviceAdapter: EntityAdapter<Device> = createEntityAdapter<Device>({
  selectId: (model) => model.id,
  sortComparer: (a: Device, b: Device): number => b.name.localeCompare(a.name),
});

export class State {
  loading: boolean;
  error: string;
}

export const initialState: State = {
  error: null,
  loading: false,
};
