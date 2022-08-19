import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, of, switchMap } from 'rxjs';

import { MovieService } from '../../services/movie.service';
import {
  EMoviesActionsType,
  LoadMoviesFailedAction,
  LoadMoviesSuccessAction,

} from './movies.action';
import { EListType } from '../../shared/enums';

@Injectable()
export class MoviesEffects {

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {
  }

  loadMovies$ = createEffect( () => this.actions$.pipe(
    ofType(EMoviesActionsType.loadMovies),
    switchMap(({ payload }: { payload: { page: number} }) => {
      return this.movieService.getList(payload.page, EListType.Movies)
        .pipe(
          delay(2000),
          map((movieList) => new LoadMoviesSuccessAction(
            {page: payload.page, data: movieList.results, amount: movieList.total_results })),
          catchError((error) => of(new LoadMoviesFailedAction({ error })))
        )
    })
  ))
}
