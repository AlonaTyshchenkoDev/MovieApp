import { Action } from '@ngrx/store';
import { IExtendedMovie, IExtendedSerial, IMovie } from '../../shared/interfaces';

export enum ELibraryActionsType {
  addOrRemoveMovieToWatchlist = '[PLAYLIST] addOrRemoveMovieToWatchlist',
  addOrRemoveMovieToWatchlistSuccess = '[PLAYLIST] addOrRemoveMovieToWatchlistSuccess',
  addOrRemoveMovieToWatchlistFailed = '[PLAYLIST] addOrRemoveMovieToWatchlistFailed',
  addOrRemoveTvToWatchlist = '[PLAYLIST] addOrRemoveTvToWatchlist',
  addOrRemoveTvToWatchlistSuccess = '[PLAYLIST] addOrRemoveTvToWatchlistSuccess',
  addOrRemoveTvToWatchlistFailed = '[PLAYLIST] addOrRemoveTvToWatchlistFailed',
  markUnmarkMovieAsFavorite = '[PLAYLIST] markUnmarkMovieAsFavorite',
  markUnmarkMovieAsFavoriteSuccess = '[PLAYLIST] markUnmarkMovieAsFavoriteSuccess',
  markUnmarkMovieAsFavoriteFailed = '[PLAYLIST] markUnmarkMovieAsFavoriteFailed',
  markUnmarkTvAsFavorite = '[PLAYLIST] markUnmarkTvAsFavorite',
  markUnmarkTvAsFavoriteSuccess = '[PLAYLIST] markUnmarkTvAsFavoriteSuccess',
  markUnmarkTvAsFavoriteFailed = '[PLAYLIST] markUnmarkTvAsFavoriteFailed',
  addTvToWatchlist = '[PLAYLIST] addTvToWatchlist',
  addTvToWatchlistSuccess = '[PLAYLIST] addTvToWatchlistSuccess',
  addTvToWatchlistFailed = '[PLAYLIST] addTvToWatchlistFailed',
  loadSerialsWatchlist = '[PLAYLIST] loadSerialsWatchlist',
  loadSerialsWatchlistSuccess = '[PLAYLIST] loadSerialsWatchlistSuccess',
  loadSerialsWatchlistFailed = '[PLAYLIST] loadSerialsWatchlistFailed',
  loadMoviesWatchlist = '[PLAYLIST] loadMoviesWatchlist',
  loadMoviesWatchlistSuccess = '[PLAYLIST] loadMoviesWatchlistSuccess',
  loadMoviesWatchlistFailed = '[PLAYLIST] loadMoviesWatchlistFailed',
  addToPlaylist = '[PLAYLIST] addToPlaylist',
  removeFromPlaylist = '[PLAYLIST] removeFromPlaylist',
  addToCompleted = '[PLAYLIST] addToCompleted',
  removeFromCompleted = '[PLAYLIST] removeFromCompleted'
}

export class AddOrRemoveMovieToWatchListAction implements Action {
  readonly type = ELibraryActionsType.addOrRemoveMovieToWatchlist;

  constructor(public payload: {media_type: string, id: number, movie: IExtendedMovie, watchlist: boolean}) {
  }
}

export class AddOrRemoveMovieToWatchListSuccessAction implements Action {
  readonly type = ELibraryActionsType.addOrRemoveMovieToWatchlistSuccess;

  constructor(public payload: {media_type: string, movie: IExtendedMovie, watchlist: boolean}) {
  }
}

export class AddOrRemoveMovieToWatchListFailedAction implements Action {
  readonly type = ELibraryActionsType.addOrRemoveMovieToWatchlistFailed;
}

export class AddOrRemoveTvToWatchListAction implements Action {
  readonly type = ELibraryActionsType.addOrRemoveTvToWatchlist;

  constructor(public payload: {media_type: string, id: number, tv: IExtendedSerial, watchlist: boolean}) {
  }
}

export class AddOrRemoveTvToWatchListSuccessAction implements Action {
  readonly type = ELibraryActionsType.addOrRemoveTvToWatchlistSuccess;

  constructor(public payload: {media_type: string, tv: IExtendedSerial, watchlist: boolean}) {
  }
}

export class AddOrRemoveTvToWatchListFailedAction implements Action {
  readonly type = ELibraryActionsType.addOrRemoveTvToWatchlistFailed;
}

export class MarkUnmarkMovieAsFavoriteAction implements Action {
  readonly type = ELibraryActionsType.markUnmarkMovieAsFavorite;

  constructor(public payload: {media_type: string, id: number, movie: IExtendedMovie, favorite: boolean}) {
  }
}

export class MarkUnmarkMovieAsFavoriteSuccessAction implements Action {
  readonly type = ELibraryActionsType.markUnmarkMovieAsFavoriteSuccess;

  constructor(public payload: {media_type: string, movie: IExtendedMovie, favorite: boolean}) {
  }
}

export class MarkUnmarkMovieAsFavoriteFailedAction implements Action {
  readonly type = ELibraryActionsType.markUnmarkMovieAsFavoriteFailed;
}

export class MarkUnmarkTvAsFavoriteAction implements Action {
  readonly type = ELibraryActionsType.markUnmarkTvAsFavorite;

  constructor(public payload: {media_type: string, id: number, tv: IExtendedSerial, favorite: boolean}) {
  }
}

export class MarkUnmarkTvAsFavoriteSuccessAction implements Action {
  readonly type = ELibraryActionsType.markUnmarkTvAsFavoriteSuccess;

  constructor(public payload: {media_type: string, tv: IExtendedSerial, favorite: boolean}) {
  }
}

export class MarkUnmarkTvAsFavoriteFailedAction implements Action {
  readonly type = ELibraryActionsType.markUnmarkTvAsFavoriteFailed;
}

export class LoadMoviesWatchlistAction implements Action {
  readonly type = ELibraryActionsType.loadMoviesWatchlist;

  constructor(public payload: {page: number}) {
  }
}

export class LoadMoviesWatchlistSuccessAction implements Action {
  readonly type = ELibraryActionsType.loadMoviesWatchlistSuccess;

  constructor(public payload: {page: number, watchlist: IMovie[]}) {
  }
}

export class LoadMoviesWatchlistFailedAction implements Action {
  readonly type = ELibraryActionsType.loadMoviesWatchlistFailed;
}

export class LoadSerialsWatchlistAction implements Action {
  readonly type = ELibraryActionsType.loadSerialsWatchlist;

  constructor(public payload: {page: number}) {
  }
}

export class LoadSerialsWatchlistSuccessAction implements Action {
  readonly type = ELibraryActionsType.loadSerialsWatchlistSuccess;

  constructor(public payload: {page: number, watchlist: IMovie[]}) {
  }
}

export class LoadSerialsWatchlistFailedAction implements Action {
  readonly type = ELibraryActionsType.loadSerialsWatchlistFailed;
}

export class AddToPlaylistAction implements Action {
  readonly type = ELibraryActionsType.addToPlaylist;

  constructor(public payload: {data: IMovie}) {
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

export type LibraryActions = AddOrRemoveMovieToWatchListAction
  | AddOrRemoveMovieToWatchListSuccessAction
  | AddOrRemoveMovieToWatchListFailedAction
  | AddOrRemoveTvToWatchListAction
  | AddOrRemoveTvToWatchListSuccessAction
  | AddOrRemoveTvToWatchListFailedAction
  | MarkUnmarkMovieAsFavoriteAction
  | MarkUnmarkMovieAsFavoriteSuccessAction
  | MarkUnmarkMovieAsFavoriteFailedAction
  | MarkUnmarkTvAsFavoriteAction
  | MarkUnmarkTvAsFavoriteSuccessAction
  | MarkUnmarkTvAsFavoriteFailedAction
  | LoadMoviesWatchlistAction
  | LoadMoviesWatchlistSuccessAction
  | LoadMoviesWatchlistFailedAction
  | LoadSerialsWatchlistAction
  | LoadSerialsWatchlistSuccessAction
  | LoadSerialsWatchlistFailedAction
  | AddToPlaylistAction
  | AddToCompletedAction
  | RemoveFromCompletedAction



