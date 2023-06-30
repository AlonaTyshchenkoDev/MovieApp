import { Action } from '@ngrx/store';
import { IMovie } from '../../shared/interfaces';

export enum ESerialsActionsType {
  loadSerials = '[SERIALS] loadSerials',
  loadSerialsSuccess = '[SERIALS] loadSerialsSuccess',
  loadSerialsFailed = '[SERIALS] loadSerialsFailed',
  addToWatchList = '[SERIALS] addToWatchList',
  removeFromWatchList = '[SERIALS] removeFromWatchList',
}

export class LoadSerialsAction implements Action {
  readonly type = ESerialsActionsType.loadSerials;

  constructor(public payload: {page: number}) {
  }
}

export class LoadSerialsSuccessAction implements Action {
  readonly type = ESerialsActionsType.loadSerialsSuccess;

  constructor(public payload: {page: number, data: IMovie[], amount: number }) {
  }
}

export class LoadSerialsFailedAction implements Action {
  readonly type = ESerialsActionsType.loadSerialsFailed;

  constructor(public payload: {error: string}) {
  }
}

export type SerialsActions = LoadSerialsAction
  | LoadSerialsSuccessAction
  | LoadSerialsFailedAction


