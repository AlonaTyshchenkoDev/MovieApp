import { Injectable } from '@angular/core';
import { IState } from '../reducers';
import { Store } from '@ngrx/store';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

import { MovieService } from './movie.service';
import { environment } from '../../environments/environment';
import { CApiKey } from '../shared/constants';
import { IMovieResponse, IResponseItem } from '../shared/interfaces';
import { EListType } from '../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  public sessionId = localStorage.getItem('sessionId') as string;
  public accountId = localStorage.getItem('accountId') as string;

  constructor(private store: Store<IState>,
              private movieService: MovieService,
              private http: HttpClient,
  ) { }

  addOrRemoveFromWatchlist(type: string, id: number, watchlist: boolean): Observable<IResponseItem>{
    const params = new HttpParams()
      .set('api_key', CApiKey)
      .set('session_id', this.sessionId);
    return this.http.post<{status_code: number, status_message: string}>(`${environment.apiUrl}/account/${this.accountId}/watchlist`, {
      "media_type": type,
      "media_id": id,
      "watchlist": watchlist
    }, {params});
  }

  getWatchlist(page: number, type: string): Observable<IMovieResponse>{
    const params = new HttpParams()
      .set('api_key', CApiKey)
      .set('session_id', this.sessionId)
      .set('page', page);
    switch (type) {
      case EListType.Movies:
        return this.http.get<IMovieResponse>(`${environment.apiUrl}/account/${this.accountId}/watchlist/movies`, {params});
      case EListType.Serials:
        return this.http.get<IMovieResponse>(`${environment.apiUrl}/account/${this.accountId}/watchlist/tv`, {params});
      default:
        return EMPTY
    }
  }

  markItem(type: string, id: number, favorite: boolean): Observable<IResponseItem> {
    const params = new HttpParams()
      .set('api_key', CApiKey)
      .set('session_id', this.sessionId);
    return this.http.post<{status_code: number, status_message: string}>
    (`${environment.apiUrl}/account/${this.accountId}/favorite`, {
      "media_type": type,
      "media_id": id,
      "favorite": favorite
    }, {params});
  }

  getPlaylist() {

  }
}
