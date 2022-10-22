import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';

import {
  CreateSessionIdFailedAction,
  CreateSessionIdSuccessAction,
  EAuthActionsType, GetAccountIdFAiledAction, GetAccountIdSuccessAction,
  GetTokenFailedAction,
  GetTokenSuccessAction
} from './auth.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private auth: AuthService,
              private router: Router) {
  }

  getToken$ = createEffect( () => this.actions$.pipe(
    ofType(EAuthActionsType.createToken),
    switchMap(() => {
      return this.auth.createToken()
        .pipe(
          map((token) => {
          localStorage.setItem('token', token.request_token);
           return new GetTokenSuccessAction(token.request_token)
          }),
          catchError((error) => of(new GetTokenFailedAction({ error })))
        )
    })
  ))

  createSessionId$ = createEffect(() => this.actions$.pipe(
    ofType(EAuthActionsType.createSessionId),
    switchMap(() => {
      return this.auth.createSession()
        .pipe(
          map((res) => {
            this.router.navigate(['']);
            localStorage.setItem('sessionId', res.session_id);
            return new CreateSessionIdSuccessAction(res.session_id);
          }),
          catchError((error) => of(new CreateSessionIdFailedAction({error})))
        )
    })
  ))

  getAccountId$ = createEffect(() => this.actions$.pipe(
    ofType(EAuthActionsType.getAccountId),
    switchMap(() => {
      return this.auth.getAccountId()
        .pipe(
          map((sessionResponse) => {
            localStorage.setItem('accountId', sessionResponse.id.toString());
            return new GetAccountIdSuccessAction(sessionResponse.id)
          }),
          catchError((error) => of(new GetAccountIdFAiledAction({error})))
        )
    })
  ))
}
