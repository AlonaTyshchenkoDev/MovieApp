import { Action } from '@ngrx/store';
import { IUser } from '../../modules/auth/auth.interfaces';

export enum EAuthActionsType {
  createToken = '[AUTH] createToken',
  createTokenSuccess = '[AUTH] createTokenSuccess',
  createTokenFailed = '[AUTH] createTokenFailed',
  createSessionId = '[AUTH] createSessionId',
  createSessionIdSuccess = '[AUTH] createSessionIdSuccess',
  createSessionIdFailed = '[AUTH] createSessionIdFailed',
  getAccountId = '[AUTH] getAccountId',
  getAccountIdSuccess = '[AUTH] getAccountIdSuccess',
  getAccountIdFailed = '[AUTH] getAccountIdFailed'
}

export class CreateTokenAction implements Action {
  readonly type = EAuthActionsType.createToken;
}

export class GetTokenSuccessAction implements Action {
  readonly type = EAuthActionsType.createTokenSuccess;

  constructor(public payload: string) {
  }
}

export class GetTokenFailedAction implements Action {
  readonly type = EAuthActionsType.createTokenFailed;

  constructor(public payload: {error: string}) {
  }
}

export class CreateSessionIdAction implements Action {
  readonly type = EAuthActionsType.createSessionId;
}

export class CreateSessionIdSuccessAction implements Action {
  readonly type = EAuthActionsType.createSessionIdSuccess;

  constructor(public payload: string) {
  }
}

export class CreateSessionIdFailedAction implements Action {
  readonly type = EAuthActionsType.createSessionIdFailed;

  constructor(public payload: {error: string}) {
  }
}

export class GetAccountIdAction implements Action {
  readonly type = EAuthActionsType.getAccountId;
}

export class GetAccountIdSuccessAction implements Action {
  readonly type = EAuthActionsType.getAccountIdSuccess;

  constructor(public payload: number) {
  }
}

export class GetAccountIdFAiledAction implements Action {
  readonly type = EAuthActionsType.getAccountIdFailed;

  constructor(public payload: {error: string}) {
  }
}

export type AuthActions = CreateTokenAction
  | GetTokenSuccessAction
  | GetTokenFailedAction
  | CreateSessionIdAction
  | CreateSessionIdSuccessAction
  | CreateSessionIdFailedAction
  | GetAccountIdAction
  | GetAccountIdSuccessAction
  | GetAccountIdFAiledAction
