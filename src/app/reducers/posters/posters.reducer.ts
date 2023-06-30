import { IMovie } from '../../shared/interfaces';
import { EPostersActionType, PostersActions } from './posters.action';

export const postersFeatureKey = 'posters';

export interface IPostersState {
  serials: IMovie[],
  movies: IMovie[],
  error: string,
  isFetching: boolean
}

export const initialState: IPostersState = {
  serials: [],
  movies: [],
  error: '',
  isFetching: true
}

export const postersReducer = (state = initialState, action: PostersActions) => {
  switch (action.type) {
    case EPostersActionType.loadPosters:
      return {
        ...state,
        isFetching: true
      };
    case EPostersActionType.loadMoviesPostersSuccess:
      return {
        ...state,
        movies: action.payload.movies,
        isFetching: false
      };
      case EPostersActionType.loadSerialsPostersSuccess:
      return {
        ...state,
        serials: action.payload.serials,
        isFetching: false
      };
    case EPostersActionType.loadPostersFailed:
      return {
        ...state,
        isError: action.payload.error,
        isFetching: false
      };
    default:
      return state;
  }
}
