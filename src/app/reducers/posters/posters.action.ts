import { Action } from '@ngrx/store';
import { IMovie } from '../../shared/interfaces';

export enum EPostersActionType {
  loadPosters = '[POSTERS] loadPosters',
  loadMoviesPostersSuccess = '[POSTERS] loadMoviesPostersSuccess',
  loadSerialsPostersSuccess = '[POSTERS] loadSerialsPostersSuccess',
  loadPostersFailed = '[POSTERS] loadSerialsPostersFailed',
}

export class LoadPostersAction implements Action {
  readonly type = EPostersActionType.loadPosters;
}

export class LoadMoviesPostersSuccessAction implements Action {
  readonly type = EPostersActionType.loadMoviesPostersSuccess;

  constructor(public payload: {movies: IMovie[] }) {
  }
}
export class LoadSerialsPostersSuccessAction implements Action {
  readonly type = EPostersActionType.loadSerialsPostersSuccess;

  constructor(public payload: {serials: IMovie[] }) {
  }
}

export class LoadPostersFailedAction implements Action {
  readonly type = EPostersActionType.loadPostersFailed;

  constructor(public payload: {error: string}) {
  }
}

export type PostersActions = LoadPostersAction
  | LoadSerialsPostersSuccessAction
  | LoadMoviesPostersSuccessAction
  | LoadPostersFailedAction
