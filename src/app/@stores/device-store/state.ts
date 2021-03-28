import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Device } from '@app/@api/models/device';
import { EntityState } from '@ngrx/entity/src/models';

export const __adapter__: EntityAdapter<Device> = createEntityAdapter<Device>({
  selectId: (model) => model.id,
  sortComparer: (a: Device, b: Device): number => b.name.localeCompare(a.name),
});

export interface State extends EntityState<Device> {
  selDeviceId: number | undefined;
  positionIds: number[] | null;
}

export const initialState = __adapter__.getInitialState({
  selDeviceId: null,
  positionIds: null,
});
