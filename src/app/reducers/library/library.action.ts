import { Action } from '@ngrx/store';
import { IExtendedMovie, IExtendedSerial, IMovie } from '../../shared/interfaces';

export enum ELibraryActionsType {
  addToWatchlist = '[PLAYLIST] addToWatchlist',
  removeFromWatchlist = '[PLAYLIST] removeFromWatchlist',
  addToPlaylist = '[PLAYLIST] addToPlaylist',
  removeFromPlaylist = '[PLAYLIST] removeFromPlaylist',
  addToCompleted = '[PLAYLIST] addToCompleted',
  removeFromCompleted = '[PLAYLIST] removeFromCompleted'
}

export class AddToWatchListAction implements Action {
  readonly type = ELibraryActionsType.addToWatchlist;

  constructor(public payload: IExtendedMovie | IExtendedSerial) {
  }
}

export class RemoveFromWatchlistAction implements Action {
  readonly type = ELibraryActionsType.removeFromWatchlist;

  constructor(public payload: {id: number}) {
  }
}

export class AddToPlaylistAction implements Action {
  readonly type = ELibraryActionsType.addToPlaylist;

  constructor(public payload: {data: IMovie}) {
  }
}

export class RemoveFromPlaylistAction implements Action {
  readonly type = ELibraryActionsType.removeFromPlaylist;

  constructor(public payload: {id: number}) {
  }
}

export class AddToCompletedAction implements Action {
  readonly type = ELibraryActionsType.addToCompleted;

  constructor(public payload: {data: IMovie}) {
  }
}

export class RemoveFromCompletedAction implements Action {
  readonly type = ELibraryActionsType.removeFromCompleted;

  constructor(public payload: {id: number}) {
  }
}

export type LibraryActions = AddToWatchListAction
  | RemoveFromWatchlistAction
  | AddToPlaylistAction
  | RemoveFromPlaylistAction
  | AddToCompletedAction
  | RemoveFromCompletedAction



