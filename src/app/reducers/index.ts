import {
  ActionReducerMap, createSelector,
  MetaReducer
} from '@ngrx/store';

import { ISerialsState, serialsFeatureKey, serialsReducer } from './serials/serials.reducer';
import { IMoviesState, moviesFeatureKey, moviesReducer } from './movies/movies.reducer';
import { IPostersState, postersFeatureKey, postersReducer } from './posters/posters.reducer';
import { ILibraryState, libraryFeatureKey, libraryReducer } from './library/library.reducer';

import { environment } from '../../environments/environment';
import * as moviesSelectors from './movies/movies.selector';
import * as serialsSelectors from './serials/serials.selector';
import * as postersSelectors from './posters/posters.selector';
import * as librarySelectors from './library/library.selector';


export interface IState {
  [moviesFeatureKey]: IMoviesState,
  [serialsFeatureKey]: ISerialsState,
  [postersFeatureKey]: IPostersState,
  [libraryFeatureKey]: ILibraryState
}

export const reducers: ActionReducerMap<IState, any> = {
  [moviesFeatureKey]: moviesReducer,
  [serialsFeatureKey]: serialsReducer,
  [postersFeatureKey]: postersReducer,
  [libraryFeatureKey]: libraryReducer
};

export const getMoviesState = (state: IState): IMoviesState => state[moviesFeatureKey];
export const getSerialsState = (state: IState): ISerialsState => state[serialsFeatureKey];
export const getPostersState = (state: IState): IPostersState => state[postersFeatureKey];
export const getLibraryState = (state: IState): ILibraryState => state[libraryFeatureKey];

export const getMoviesList = createSelector(getMoviesState, moviesSelectors.selectMoviesList);
export const getFetchingMoviesState = createSelector(getMoviesState, moviesSelectors.selectFetchingMoviesState);

export const getSerialsList = createSelector(getSerialsState, serialsSelectors.selectSerialsList);
export const getFetchingSerialsState = createSelector(getSerialsState, serialsSelectors.selectFetchingSerialsState);

export const getMoviesPosters = createSelector(getPostersState, postersSelectors.selectMoviePosters);
export const getSerialsPosters = createSelector(getPostersState, postersSelectors.selectSerialPosters);
export const getFetchingPostersState = createSelector(getPostersState, postersSelectors.selectFetchingPostersState);

export const getWatchlist = createSelector(getLibraryState, librarySelectors.selectWatchlist);
export const getPlaylist = createSelector(getLibraryState, librarySelectors.selectPlaylist);
export const getCompleted = createSelector(getLibraryState, librarySelectors.selectCompleted);
export const getFetchingLibraryState = createSelector(getLibraryState, librarySelectors.selectFetchingLibraryState);

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
