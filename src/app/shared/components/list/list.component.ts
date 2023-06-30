import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

import { EListType, EMediaType } from '../../enums';
import { IMovie } from '../../interfaces';
import { StoreService } from '../../../services/store.service';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() isWatchlist: boolean = false;
  public pageType: string = EListType.Movies;
  public isFetching$: Observable<boolean>;
  public posters$: Observable<{ posters: IMovie[]}>;
  public moviePlaylist$: Observable<{ list: IMovie[]}>;
  public serialsPlaylist$: Observable<{ list: IMovie[]}>;
  public destroy$: Subject<void> = new Subject<void>();
  public EListType = EListType;
  public EMediaType = EMediaType;
  public sortOptions: SelectItem[];
  public sortOrder: number;
  public sortField: string;
  public sortKey: string;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.checkParams();
    this.getList(this.pageType);
    this.loadWatchlist();
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
        this.moviePlaylist$ = this.storeService.getList(EListType.Movies)
        return;
      case EListType.Serials:
        this.serialsPlaylist$ = this.storeService.getList(EListType.Serials)
        return;
      case EListType.Watchlist:
        this.moviePlaylist$ = this.storeService.getWatchlist(EListType.Movies);
        this.serialsPlaylist$ = this.storeService.getWatchlist(EListType.Serials);
        return;
    }
  }

  loadWatchlist(): void {
    this.storeService.loadWatchlist(1);
  }

  getFetchingState(pageType: string): void {
    switch (pageType) {
      case EListType.Movies:
        this.isFetching$ = this.storeService.getFetchingState(EListType.Movies)
        return;
      case EListType.Serials:
        this.isFetching$ = this.storeService.getFetchingState(EListType.Serials)
        return;
    }
  }

  getPostersList(pageType: string): void {
    switch (pageType) {
      case EListType.Movies:
        this.posters$ = this.storeService.getPostersList(EListType.Movies);
        return;
      case EListType.Serials:
        this.posters$ = this.storeService.getPostersList(EListType.Serials)
        return;
    }
  }

  // paginate(event: any): void {
  //   const pageNumber = event.page + 1;
  //   if(this.pageType === EListType.Movies){
  //     this.store.dispatch(new LoadMoviesAction({page: pageNumber}))
  //   }
  //   if(this.pageType === EListType.Serials){
  //     this.store.dispatch(new LoadSerialsAction({page: pageNumber}))
  //   }
  // }
  markUnMarkAsFavorite(event: any, type: EMediaType, id: number): void {
    const favorite = event.checked;
    switch (type) {
      case EMediaType.Movie:
        this.movieService.getMovieById(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (movie) => {
              this.storeService.markUnmarkMovieAsFavorite(id, movie, favorite)
            }
          });
        return;
      case EMediaType.Tv:
        this.movieService.getSerialById(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (tv) => {
              this.storeService.markUnmarkTvAsFavorite(id, tv, favorite)
            }
          });
        return;
    }
  }

  removeFromWatchlist(type: EMediaType, id: number): void {
    switch (type) {
      case EMediaType.Movie:
        this.movieService.getMovieById(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (movie) => {
              this.storeService.addOrRemoveMovieToWatchlist(movie, id, false)
            }
          });
        return;
      case EMediaType.Tv:
        this.movieService.getSerialById(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (tv) => {
              this.storeService.addOrRemoveSerialToWatchlist(tv, id, false)
            }
          })
    }
  }

  addOrRemoveToWatchlist(event: any, type: string, id: number) {
    let watchlist = event.checked;
    switch (type) {
      case EMediaType.Movie:
        this.movieService.getMovieById(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (movie) => {
              this.storeService.addOrRemoveMovieToWatchlist(movie, id, watchlist);
            }
          })
        return;
      case EMediaType.Tv:
        this.movieService.getSerialById(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (serial) => {
              this.storeService.addOrRemoveSerialToWatchlist(serial, id, watchlist)
            }
          })
        return;
    }
  }

  watchItem() {
  }
}
