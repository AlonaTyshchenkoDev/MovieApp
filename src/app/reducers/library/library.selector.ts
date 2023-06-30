import { IMovie } from '../../shared/interfaces';
import { ILibraryState } from './library.reducer';

export const selectMoviesWatchlist = (state: ILibraryState): { list: IMovie[]} => ({
  list: state.moviesWatchlist
});

export const selectSerialsWatchlist = (state: ILibraryState): { list: IMovie[]} => ({
  list: state.serialsWatchlist
});

export const selectPlaylist = (state: ILibraryState): { playlist: IMovie[]} => ({
  playlist: state.playlist
});

export const selectCompleted = (state: ILibraryState): { completed: IMovie[]} => ({
  completed: state.completed
});

export const selectFetchingLibraryState = (state: ILibraryState): boolean => state.isFetching;
