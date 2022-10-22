import {
  ActionReducerMap, createSelector,
  MetaReducer
} from '@ngrx/store';

import { ISerialsState, serialsFeatureKey, serialsReducer } from './serials/serials.reducer';
import { IMoviesState, moviesFeatureKey, moviesReducer } from './movies/movies.reducer';
import { IPostersState, postersFeatureKey, postersReducer } from './posters/posters.reducer';
import { ILibraryState, libraryFeatureKey, libraryReducer } from './library/library.reducer';
import { IAuthState, authFeatureKey, authReducer } from './auth/auth.reducer';

import { environment } from '../../environments/environment';
import * as moviesSelectors from './movies/movies.selector';
import * as serialsSelectors from './serials/serials.selector';
import * as postersSelectors from './posters/posters.selector';
import * as librarySelectors from './library/library.selector';
import * as authSelectors from './auth/auth.selector';


export interface IState {
  [moviesFeatureKey]: IMoviesState,
  [serialsFeatureKey]: ISerialsState,
  [postersFeatureKey]: IPostersState,
  [libraryFeatureKey]: ILibraryState,
  [authFeatureKey]: IAuthState
}

export const reducers: ActionReducerMap<IState, any> = {
  [moviesFeatureKey]: moviesReducer,
  [serialsFeatureKey]: serialsReducer,
  [postersFeatureKey]: postersReducer,
  [libraryFeatureKey]: libraryReducer,
  [authFeatureKey]: authReducer
};

export const getMoviesState = (state: IState): IMoviesState => state[moviesFeatureKey];
export const getSerialsState = (state: IState): ISerialsState => state[serialsFeatureKey];
export const getPostersState = (state: IState): IPostersState => state[postersFeatureKey];
export const getLibraryState = (state: IState): ILibraryState => state[libraryFeatureKey];
export const getAuthState = (state: IState): IAuthState => state[authFeatureKey];

export const getMoviesList = createSelector(getMoviesState, moviesSelectors.selectMoviesList);
export const getFetchingMoviesState = createSelector(getMoviesState, moviesSelectors.selectFetchingMoviesState);

export const getSerialsList = createSelector(getSerialsState, serialsSelectors.selectSerialsList);
export const getFetchingSerialsState = createSelector(getSerialsState, serialsSelectors.selectFetchingSerialsState);

export const getMoviesPosters = createSelector(getPostersState, postersSelectors.selectMoviePosters);
export const getSerialsPosters = createSelector(getPostersState, postersSelectors.selectSerialPosters);
export const getFetchingPostersState = createSelector(getPostersState, postersSelectors.selectFetchingPostersState);

export const getMoviesWatchlist = createSelector(getLibraryState, librarySelectors.selectMoviesWatchlist);
export const getSerialsWatchlist = createSelector(getLibraryState, librarySelectors.selectSerialsWatchlist);
export const getPlaylist = createSelector(getLibraryState, librarySelectors.selectPlaylist);
export const getCompleted = createSelector(getLibraryState, librarySelectors.selectCompleted);
export const getFetchingLibraryState = createSelector(getLibraryState, librarySelectors.selectFetchingLibraryState);

export const getTokenState = createSelector(getAuthState, authSelectors.selectToken);
export const getSessionIdState = createSelector(getAuthState, authSelectors.selectSessionId);
export const getAccountIdState = createSelector(getAuthState, authSelectors.selectAccountId);

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
