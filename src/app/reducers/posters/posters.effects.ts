import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { MovieService } from '../../services/movie.service';
import { EListType } from '../../shared/enums';
import {
  EPostersActionType,
  LoadMoviesPostersSuccessAction,
  LoadPostersFailedAction,
  LoadSerialsPostersSuccessAction
} from './posters.action';

@Injectable()
export class PostersEffects {

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {
  }

  loadMoviePosters$ = createEffect( () => this.actions$.pipe(
    ofType(EPostersActionType.loadPosters),
    switchMap(() => {
      return this.movieService.getPosterList(1, EListType.Movies)
        .pipe(
          map((list) => new LoadMoviesPostersSuccessAction(
            {movies: list.results})),
          catchError((error) => of(new LoadPostersFailedAction({ error })))
        )
    })
  ))

  loadSerialPosters$ = createEffect( () => this.actions$.pipe(
    ofType(EPostersActionType.loadPosters),
    switchMap(() => {
      return this.movieService.getPosterList(1, EListType.Serials)
        .pipe(
          map((list) => new LoadSerialsPostersSuccessAction(
            {serials: list.results})),
          catchError((error) => of(new LoadPostersFailedAction({ error })))
        )
    })
  ))
}
