import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  getFetchingMoviesState, getFetchingSerialsState,
  getMoviesList, getMoviesPosters,
  getSerialsList, getSerialsPosters,
  IState
} from '../../../reducers';
import { EListType } from '../../enums';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../interfaces';
import { LoadMoviesAction } from '../../../reducers/movies/movies.action';
import { LoadSerialsAction } from '../../../reducers/serials/serials.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() pageType: string;
  public list$: Observable<{ data: IMovie[], amount: number }>;
  public isFetching$: Observable<boolean>;
  public posters$: Observable<{ posters: IMovie[]}>;
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<IState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkParams();
    this.getList(this.pageType);
    this.getPostersList(this.pageType);
    this.getFetchingState(this.pageType);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  checkParams(): void {
    this.pageType = this.route.snapshot.url[0].path;
  }

  getList(pageType: string): void {
    switch (pageType) {
      case EListType.Movies:
        this.list$ = this.store.select(getMoviesList);
        return;
      case EListType.Serials:
        this.list$ = this.store.select(getSerialsList);
        return;
    }
  }

  getFetchingState(pageType: string): void {
    switch (pageType) {
      case EListType.Movies:
        this.isFetching$ = this.store.select(getFetchingMoviesState);
        return;
      case EListType.Serials:
        this.isFetching$ = this.store.select(getFetchingSerialsState);
        return;
    }
  }

  getPostersList(pageType: string): void {
    switch (pageType) {
      case EListType.Movies:
        this.posters$ = this.store.select(getMoviesPosters);
        return;
      case EListType.Serials:
        this.posters$ = this.store.select(getSerialsPosters);
        return;
    }
  }

  paginate(event: any): void {
    const pageNumber = event.page + 1;
    if(this.pageType === EListType.Movies){
      this.store.dispatch(new LoadMoviesAction({page: pageNumber}))
    }
    if(this.pageType === EListType.Serials){
      this.store.dispatch(new LoadSerialsAction({page: pageNumber}))
    }
  }

}
