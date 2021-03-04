import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(_reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['auth', 'credit-score'],
    rehydrate: true,
    checkStorageAvailability: true,
  })(_reducer);
}

export function debug(_reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('[debug] Action', action);
    return _reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];
