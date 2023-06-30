import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { IExtendedMovie, IExtendedSerial, IMovieResponse } from '../shared/interfaces';
import { CApiKey, defaultParams, } from '../shared/constants';
import { EListType } from '../shared/enums';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getList(page: number,type : string): Observable<IMovieResponse> {
    const params = new HttpParams()
      .set('api_key', CApiKey)
      .set('language','en-US')
      .set('page', page)
    switch (type) {
      case(EListType.Movies):
        return this.http.get<IMovieResponse>(`${environment.apiUrl}/movie/popular`, {params});
      case(EListType.Serials):
        return this.http.get<IMovieResponse>(`${environment.apiUrl}/tv/popular`, {params});
      default:
        return EMPTY;
    }
  }

  getPosterList(page: number,type : string): Observable<IMovieResponse> {
    const params = new HttpParams()
      .set('api_key', CApiKey)
      .set('language','en-US')
      .set('page', page)
    switch (type) {
      case(EListType.Movies):
        return this.http.get<IMovieResponse>(`${environment.apiUrl}/movie/upcoming`, {params});
      case(EListType.Serials):
        return this.http.get<IMovieResponse>(`${environment.apiUrl}/tv/top_rated`, {params});
      default:
        return EMPTY;
    }
  }

  getMovieById(id: number): Observable<IExtendedMovie> {
    return this.http.get<IExtendedMovie>(`${environment.apiUrl}/movie/${id}`, {params: defaultParams});
  }

  getSerialById(id: number): Observable<IExtendedSerial> {
    return this.http.get<IExtendedSerial>(`${environment.apiUrl}/tv/${id}`, {params: defaultParams});
  }

  searchItem(search: string): Observable<IMovieResponse>{
    const params = new HttpParams()
      .set('api_key', CApiKey)
      .set('language','en-US')
      .set('query', search)
      .set('page', 1)
    return this.http.get<IMovieResponse>(`${environment.apiUrl}/search/multi`, {params})
  }

}
