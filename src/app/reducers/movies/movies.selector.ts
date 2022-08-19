import { IMovie } from '../../shared/interfaces';
import { IMoviesState } from './movies.reducer';

export const selectMoviesList = (state: IMoviesState): { page: number, data: IMovie[], amount: number } => ({
  page: state.page,
  data: state.data,
  amount: state.amount
});

export const selectFetchingMoviesState = (state: IMoviesState): boolean => state.isFetching;



