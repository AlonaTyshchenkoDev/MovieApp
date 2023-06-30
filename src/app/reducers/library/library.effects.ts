import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { LibraryService } from '../../services/library.service';
import { EListType } from '../../shared/enums';
import { IExtendedMovie, IExtendedSerial } from '../../shared/interfaces';
import {
  AddOrRemoveMovieToWatchListFailedAction,
  AddOrRemoveMovieToWatchListSuccessAction,
  AddOrRemoveTvToWatchListFailedAction,
  AddOrRemoveTvToWatchListSuccessAction,
  ELibraryActionsType,
  LoadMoviesWatchlistFailedAction,
  LoadMoviesWatchlistSuccessAction,
  LoadSerialsWatchlistFailedAction,
  LoadSerialsWatchlistSuccessAction,
  MarkUnmarkMovieAsFavoriteFailedAction,
  MarkUnmarkMovieAsFavoriteSuccessAction, MarkUnmarkTvAsFavoriteFailedAction, MarkUnmarkTvAsFavoriteSuccessAction,
} from './library.action';

@Injectable()
export class LibraryEffects{
  constructor(private actions$: Actions,
              private library: LibraryService,
              ) {
  }

  addOrRemoveMovieToWatchlist$ = createEffect(() => this.actions$.pipe(
      ofType(ELibraryActionsType.addOrRemoveMovieToWatchlist),
      switchMap(({ payload }: { payload: { media_type: string, movie: IExtendedMovie, id: number,  watchlist: boolean } }) => {
        return this.library.addOrRemoveFromWatchlist(payload.media_type, payload.id, payload.watchlist)
          .pipe(
            map(() => new AddOrRemoveMovieToWatchListSuccessAction({movie: payload.movie, media_type: payload.media_type, watchlist: payload.watchlist})),
            catchError((error) => of(new AddOrRemoveMovieToWatchListFailedAction()))
          )
      })
    ));

  addOrRemoveTvToWatchlist$ = createEffect(() => this.actions$.pipe(
      ofType(ELibraryActionsType.addOrRemoveTvToWatchlist),
      switchMap(({ payload }: { payload: { media_type: string, tv: IExtendedSerial, id: number,  watchlist: boolean } }) => {
        return this.library.addOrRemoveFromWatchlist(payload.media_type, payload.id, payload.watchlist)
          .pipe(
            map(() => new AddOrRemoveTvToWatchListSuccessAction({tv: payload.tv, media_type: payload.media_type, watchlist: payload.watchlist})),
            catchError((error) => of(new AddOrRemoveTvToWatchListFailedAction()))
          )
      })
    ));

  markUnmarkMovieAsFavorite$ = createEffect(() => this.actions$.pipe(
    ofType(ELibraryActionsType.markUnmarkMovieAsFavorite),
    switchMap(({ payload }: { payload: {media_type: string, id: number, movie: IExtendedMovie, favorite: boolean} }) => {
      return this.library.markItem(payload.media_type, payload.id, payload.favorite)
        .pipe(
          map(() => new MarkUnmarkMovieAsFavoriteSuccessAction({movie: payload.movie, media_type: payload.media_type, favorite: payload.favorite})),
          catchError((error) => of(new MarkUnmarkMovieAsFavoriteFailedAction()))
        )
    })
  ));

  markUnmarkTvAsFavorite$ = createEffect(() => this.actions$.pipe(
    ofType(ELibraryActionsType.markUnmarkTvAsFavorite),
    switchMap(({ payload }: { payload: {media_type: string, id: number, tv: IExtendedSerial, favorite: boolean} }) => {
      return this.library.markItem(payload.media_type, payload.id, payload.favorite)
        .pipe(
          map(() => new MarkUnmarkTvAsFavoriteSuccessAction({tv: payload.tv, media_type: payload.media_type, favorite: payload.favorite})),
          catchError((error) => of(new MarkUnmarkTvAsFavoriteFailedAction()))
        )
    })
  ));

  loadMoviesWatchlist$ = createEffect(() => this.actions$.pipe(
    ofType(ELibraryActionsType.loadMoviesWatchlist),
    switchMap(({payload}: {payload: {page: number}}) => {
      return this.library.getWatchlist(payload.page, EListType.Movies)
        .pipe(
          map((list) => new LoadMoviesWatchlistSuccessAction({page: payload.page, watchlist: list.results})),
          catchError((error) => of(new LoadMoviesWatchlistFailedAction()))
        )
    })
  ));

  loadSerialsWatchlist$ = createEffect(() => this.actions$.pipe(
    ofType(ELibraryActionsType.loadSerialsWatchlist),
    switchMap(({payload}: {payload: {page: number, type: string}}) => {
      return this.library.getWatchlist(payload.page, EListType.Serials)
        .pipe(
          map((list) => new LoadSerialsWatchlistSuccessAction({page: payload.page, watchlist: list.results})),
          catchError((error) => of(new LoadSerialsWatchlistFailedAction()))
        )
    })
  ));
}
