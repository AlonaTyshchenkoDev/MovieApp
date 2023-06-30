import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  getFetchingMoviesState, getFetchingSerialsState,
  getMoviesList, getMoviesPosters,
  getMoviesWatchlist, getSerialsList, getSerialsPosters,
  getSerialsWatchlist, getTokenState,
  IState
} from '../reducers';
import { CreateSessionIdAction, GetAccountIdAction } from '../reducers/auth/auth.actions';
import {
  AddOrRemoveMovieToWatchListAction,
  AddOrRemoveTvToWatchListAction,
  LoadMoviesWatchlistAction,
  LoadSerialsWatchlistAction,
  MarkUnmarkMovieAsFavoriteAction,
  MarkUnmarkTvAsFavoriteAction,
} from '../reducers/library/library.action';
import { EListType, EMediaType } from '../shared/enums';
import { EMPTY, Observable } from 'rxjs';
import { IExtendedMovie, IExtendedSerial, IMovie } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<IState>) { }

  getToken(): Observable<string> {
    return this.store.select(getTokenState);
  }

  createSessionId(): void {
    this.store.dispatch(new CreateSessionIdAction());
  }

  getAccountId(): void {
    this.store.dispatch(new GetAccountIdAction());
  }

  getList(type: string): Observable<{list: IMovie[]}> {
    switch (type) {
      case EListType.Movies:
        return this.store.select(getMoviesList);
      case EListType.Serials:
        return this.store.select(getSerialsList);
      default:
        return EMPTY;
    }
  }

  getFetchingState(type: string): Observable<boolean> {
    switch (type) {
      case EListType.Movies:
        return this.store.select(getFetchingMoviesState);
      case EListType.Serials:
        return this.store.select(getFetchingSerialsState);
      default:
        return EMPTY;
    }
  }

  getPostersList(type: string): Observable<{ posters: IMovie[] }> {
    switch (type) {
      case EListType.Movies:
        return this.store.select(getMoviesPosters);
      case EListType.Serials:
        return this.store.select(getSerialsPosters);
      default:
        return EMPTY;
    }
  }

  addOrRemoveMovieToWatchlist(movie: IExtendedMovie, id: number, watchlist: boolean): void {
    this.store.dispatch(new AddOrRemoveMovieToWatchListAction({media_type: EMediaType.Movie, id, movie, watchlist}));
  }

  addOrRemoveSerialToWatchlist(tv: IExtendedSerial, id: number, watchlist: boolean): void {
    this.store.dispatch(new AddOrRemoveTvToWatchListAction({media_type: EMediaType.Tv, id, tv, watchlist}));
  }

  loadWatchlist(page: number): void {
    this.store.dispatch(new LoadMoviesWatchlistAction({page}));
    this.store.dispatch(new LoadSerialsWatchlistAction({page}));
  }

  markUnmarkMovieAsFavorite(id: number, movie: IExtendedMovie, favorite: boolean): void {
    this.store.dispatch(new MarkUnmarkMovieAsFavoriteAction({media_type: EMediaType.Movie, id, movie, favorite}));
  }

  markUnmarkTvAsFavorite(id: number, tv: IExtendedSerial, favorite: boolean): void {
    this.store.dispatch(new MarkUnmarkTvAsFavoriteAction({media_type: EMediaType.Tv, id, tv, favorite}));
  }

  getWatchlist(type: string): Observable<{list: IMovie[]}> {
    switch (type) {
      case EListType.Movies:
        return this.store.select(getMoviesWatchlist);
      case EListType.Serials:
        return this.store.select(getSerialsWatchlist);
      default:
        return EMPTY
    }
  }
}
