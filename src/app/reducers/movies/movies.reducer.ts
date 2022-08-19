import { EMoviesActionsType, MoviesActions } from './movies.action';
import { IMovie } from '../../shared/interfaces';

export const moviesFeatureKey = 'movies';

export interface IMoviesState {
  page: number,
  data: IMovie[],
  isError: string,
  isFetching: boolean,
  amount: number
}
export const initialState: IMoviesState = {
  page: 1,
  data: [],
  isError: '',
  isFetching: true,
  amount: 0
}

export const moviesReducer = (state = initialState, action: MoviesActions) => {
  switch (action.type) {
    case EMoviesActionsType.loadMovies:
      return {
        ...state,
        isFetching: true
      };
    case EMoviesActionsType.loadMoviesSuccess:
      return {
        ...state,
        page: action.payload.page,
        data: action.payload.data,
        amount: action.payload.amount,
        isFetching: false
      };
      case EMoviesActionsType.loadMoviesFailed:
      return {
        ...state,
        isError: action.payload.error,
        isFetching: false
      };
    default:
      return state;
  }
}
