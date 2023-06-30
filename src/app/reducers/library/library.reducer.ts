import { IExtendedMovie, IExtendedSerial, IMovie } from '../../shared/interfaces';
import { ELibraryActionsType, LibraryActions } from './library.action';

export const libraryFeatureKey = 'library';

export interface ILibraryState {
  moviesWatchlist: IMovie[],
  serialsWatchlist: IMovie[],
  favoriteMovies: IExtendedMovie[],
  favoriteSerials: IExtendedSerial[],
  playlist: IMovie[],
  completed: IMovie[],
  isFetching: boolean,
  isError: boolean
}

export const initialState: ILibraryState = {
  moviesWatchlist: [],
  serialsWatchlist: [],
  favoriteMovies: [],
  favoriteSerials: [],
  playlist: [],
  completed: [],
  isFetching: true,
  isError: false
}

export const libraryReducer = (state = initialState, action: LibraryActions) => {
  switch (action.type) {
    case ELibraryActionsType.addOrRemoveMovieToWatchlistSuccess:
      switch (action.payload.watchlist) {
        case true:
          return {
            ...state,
            moviesWatchlist: [...state.moviesWatchlist, action.payload.movie],
            isError: false
          };
        case false:
          let newMoviesState = [...state.moviesWatchlist].filter(movie => movie.id != action.payload.movie.id);
          return {
            ...state,
            moviesWatchlist: newMoviesState,
            isError: false
          };
        default: return state;
      }
    case ELibraryActionsType.addOrRemoveMovieToWatchlistFailed:
      return {
        ...state,
        isError: true
      }
    case ELibraryActionsType.addOrRemoveTvToWatchlistSuccess:
    switch (action.payload.watchlist) {
      case true:
        return {
          ...state,
          serialsWatchlist: [...state.serialsWatchlist, action.payload.tv],
          isError: false
        };
      case false:
        let newTvState = [...state.serialsWatchlist].filter(tv => tv.id != action.payload.tv.id);
        return {
          ...state,
          serialsWatchlist: newTvState,
          isError: false
        };
      default: return state;
    }
    case ELibraryActionsType.addOrRemoveTvToWatchlistFailed:
      return {
        ...state,
        isError: true
      }
    case ELibraryActionsType.markUnmarkMovieAsFavoriteSuccess:
      switch (action.payload.favorite) {
        case true:
          return {
            ...state,
            favoriteMovies: [...state.favoriteMovies, action.payload.movie],
            isError: false
          };
        case false:
          let newFavoriteState = [...state.favoriteMovies].filter(movie => movie.id != action.payload.movie.id);
          return {
            ...state,
            favoriteMovies: newFavoriteState,
            isError: false
          };
        default: return state;
      }
    case ELibraryActionsType.markUnmarkMovieAsFavoriteFailed:
      return {
        ...state,
        isError: true
      }
    case ELibraryActionsType.markUnmarkTvAsFavoriteSuccess:
      switch (action.payload.favorite) {
        case true:
          return {
            ...state,
            favoriteSerials: [...state.favoriteSerials, action.payload.tv],
            isError: false
          };
        case false:
          let newFavoriteState = [...state.favoriteSerials].filter(tv => tv.id != action.payload.tv.id);
          return {
            ...state,
            favoriteSerials: newFavoriteState,
            isError: false
          };
        default: return state;
      }
    case ELibraryActionsType.markUnmarkTvAsFavoriteFailed:
      return {
        ...state,
        isError: true
      }
    case ELibraryActionsType.loadMoviesWatchlistSuccess:
      return {
        ...state,
        moviesWatchlist: action.payload.watchlist,
        isError: false,
        isFetching: false
      }
    case ELibraryActionsType.loadSerialsWatchlistSuccess:
      return {
        ...state,
        serialsWatchlist: action.payload.watchlist,
        isError: false,
        isFetching: false
      }
    case ELibraryActionsType.loadMoviesWatchlistFailed:
      return {
        ...state,
        isError: true
      }
    case ELibraryActionsType.loadSerialsWatchlistFailed:
      return {
        ...state,
        isError: true
      }
    case ELibraryActionsType.addToPlaylist:
      const moviePlaylist = action.payload.data;
      return {
        ...state,
      playlist: [...state.moviesWatchlist, moviePlaylist],
      isFetching: false
      };
    case ELibraryActionsType.addToCompleted:
      const movieCompleted = action.payload.data;
      return {
        ...state,
      watchlist: [...state.moviesWatchlist, movieCompleted],
      isFetching: false
      };
    case ELibraryActionsType.removeFromCompleted:
      delete state.moviesWatchlist[action.payload.id];
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}
