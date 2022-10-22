import { IAuthState } from './auth.reducer';

export const selectToken = (state: IAuthState): string => (state.token);

export const selectSessionId = (state: IAuthState): string => (state.sessionId);

export const selectAccountId = (state: IAuthState): number => (state.accountId);
