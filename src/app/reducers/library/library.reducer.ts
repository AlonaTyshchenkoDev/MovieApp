import { IMovie } from '../../shared/interfaces';
import { ELibraryActionsType, LibraryActions } from './library.action';
import { EMoviesActionsType } from '../movies/movies.action';

export const libraryFeatureKey = 'library';

export interface ILibraryState {
  watchlist: IMovie[],
  playlist: IMovie[],
  completed: IMovie[],
  isFetching: boolean,
}

export const initialState: ILibraryState = {
  watchlist: [],
  playlist: [],
  completed: [],
  isFetching: true
}

export const libraryReducer = (state = initialState, action: LibraryActions) => {
  switch (action.type) {
    case ELibraryActionsType.addToWatchlist:
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
        isFetching: false
      };
    case ELibraryActionsType.removeFromWatchlist:
      delete state.watchlist[action.payload.id];
      return {
        ...state,
        isFetching: false
      };
    case ELibraryActionsType.addToPlaylist:
      const moviePlaylist = action.payload.data;
      return {
        ...state,
      playlist: [...state.watchlist, moviePlaylist],
      isFetching: false
      };
    case ELibraryActionsType.removeFromPlaylist:
      delete state.watchlist[action.payload.id];
      return {
        ...state,
        isFetching: false
      };
    case ELibraryActionsType.addToCompleted:
      const movieCompleted = action.payload.data;
      return {
        ...state,
      watchlist: [...state.watchlist, movieCompleted],
      isFetching: false
      };
    case ELibraryActionsType.removeFromCompleted:
      delete state.watchlist[action.payload.id];
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}
