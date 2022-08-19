import { IMovie } from '../../shared/interfaces';
import { ILibraryState } from './library.reducer';

export const selectWatchlist = (state: ILibraryState): { watchlist: IMovie[]} => ({
  watchlist: state.watchlist
});

export const selectPlaylist = (state: ILibraryState): { playlist: IMovie[]} => ({
  playlist: state.playlist
});

export const selectCompleted = (state: ILibraryState): { completed: IMovie[]} => ({
  completed: state.completed
});

export const selectFetchingLibraryState = (state: ILibraryState): boolean => state.isFetching;
