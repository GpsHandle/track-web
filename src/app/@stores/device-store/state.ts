import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Device } from '@app/@api/models/device';
import { EntityState } from '@ngrx/entity/src/models';

export const deviceAdapter: EntityAdapter<Device> = createEntityAdapter<Device>({
  selectId: (model) => model.id,
  sortComparer: (a: Device, b: Device): number => b.name.localeCompare(a.name),
});

export interface State extends EntityState<Device>{
  loading?: boolean;
  error?: string;
}

export const initialState: State = deviceAdapter.getInitialState(
  {
    error: null,
    loading: false,
  }
);
