import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, delay, Observable, ObservedValueOf, switchMap } from 'rxjs';

import { environment } from '../../environments/environment';
import { ApiParams, CApiKey } from '../shared/constants';
import { CRequestToken, ISessionResponse } from '../modules/auth/auth.interfaces';
import { Store } from '@ngrx/store';
import { getAccountIdState, getSessionIdState, getTokenState, IState } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private store: Store<IState>) { }

  createToken(): Observable<CRequestToken> {
    return this.http.get<CRequestToken>(`${environment.apiUrl}/authentication/token/new`, {params: ApiParams});
  }

  createSession(): Observable<{success: boolean, session_id: string}>{
    const token = localStorage.getItem('token');
    return this.http.post<{success: boolean, session_id: string}>
    (`${environment.apiUrl}/authentication/session/new`, {"request_token": token}, {params: ApiParams});
  }

  deleteSession():Observable<{ success: boolean }> {
    const sessionId = localStorage.getItem('sessionId');
    return this.http.request<{success: boolean}>('delete', `${environment.apiUrl}/authentication/session`, {
      body: {session_id: sessionId},
      params: ApiParams
    });
  }

  getAccountId(): Observable<ISessionResponse> {
    const sessionId = localStorage.getItem('sessionId');
    const params = new HttpParams()
      .set('api_key', CApiKey)
      .set('session_id', (sessionId) as string)
    return this.http.get<ISessionResponse>(`${environment.apiUrl}/account`, {params});
  }
}
