import { Action } from '@ngrx/store';
import { IMovie } from '../../shared/interfaces';

export enum EMoviesActionsType {
  loadMovies = '[MOVIES] loadMovies',
  loadMoviesSuccess = '[MOVIES] loadMoviesSuccess',
  loadMoviesFailed = '[MOVIES] loadMoviesFailed',
  addToWatchList = '[MOVIES] addToWatchList',
  removeFromWatchList = '[MOVIES] removeFromWatchList',
}

export class LoadMoviesAction implements Action {
  readonly type = EMoviesActionsType.loadMovies;

  constructor(public payload: {page: number}) {
  }
}

export class LoadMoviesSuccessAction implements Action {
  readonly type = EMoviesActionsType.loadMoviesSuccess;

  constructor(public payload: {page: number, data: IMovie[], amount: number }) {
  }
}

export class LoadMoviesFailedAction implements Action {
  readonly type = EMoviesActionsType.loadMoviesFailed;

  constructor(public payload: {error: string}) {
  }
}

export type MoviesActions = LoadMoviesAction
  | LoadMoviesSuccessAction
  | LoadMoviesFailedAction

