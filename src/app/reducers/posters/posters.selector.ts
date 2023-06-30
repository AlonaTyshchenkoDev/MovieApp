import { IPostersState } from './posters.reducer';
import { IMovie } from '../../shared/interfaces';

export const selectMoviePosters = (state: IPostersState): { posters: IMovie[] } => ({
  posters: state.movies,
});

export const selectSerialPosters = (state: IPostersState): { posters: IMovie[] } => ({
  posters: state.serials,
});

export const selectFetchingPostersState = (state: IPostersState): boolean => state.isFetching;
