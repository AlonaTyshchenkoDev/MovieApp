import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { MovieService } from '../../services/movie.service';
import {
  ESerialsActionsType,
  LoadSerialsFailedAction,
  LoadSerialsSuccessAction
} from './serials.actions';
import { EListType } from '../../shared/enums';

@Injectable()
export class SerialsEffects {

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {
  }

  loadSerials$ = createEffect( () => this.actions$.pipe(
    ofType(ESerialsActionsType.loadSerials),
    switchMap(({ payload }: { payload: { page: number} }) => {
      return this.movieService.getList(payload.page, EListType.Serials)
        .pipe(
          map((list) => new LoadSerialsSuccessAction({
            page: payload.page, data: list.results, amount: list.total_results })),
          catchError((error) => of(new LoadSerialsFailedAction({ error })))
        )
    })
  ))
}
