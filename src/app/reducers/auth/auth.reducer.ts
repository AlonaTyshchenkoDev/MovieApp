import { AuthActions, EAuthActionsType } from './auth.actions';

export const authFeatureKey = 'auth';

export interface IAuthState {
  token: string,
  sessionId: string,
  accountId: number
  isError: boolean
}

export const initialState: IAuthState = {
  token: '',
  sessionId: '',
  accountId: 0,
  isError: false
}

export const authReducer = (state: IAuthState = initialState, action: AuthActions) => {
  switch (action.type) {
    case EAuthActionsType.createTokenSuccess:
      return {
        ...state,
        token: action.payload,
        isError: false
      };
    case EAuthActionsType.createTokenFailed:
      return {
        ...state,
        isError: true
      }
    case EAuthActionsType.createSessionIdSuccess:
      return {
        ...state,
        sessionId: action.payload,
        isError: false
      }
    case EAuthActionsType.createSessionIdFailed:
      return {
        ...state,
        isError: true
      }
    case EAuthActionsType.getAccountIdSuccess:
      return {
        ...state,
        accountId: action.payload,
        isError: false
      }
    case EAuthActionsType.getAccountIdFailed:
      return {
        ...state,
        isError: true
      }
    default:
      return state;
  }
}
