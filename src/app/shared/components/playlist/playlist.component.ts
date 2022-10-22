import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IState } from '../../../reducers';

import { MovieService } from '../../../services/movie.service';
import { EListType, EMediaType } from '../../enums';
import { IMovie } from '../../interfaces';
import { StoreService } from '../../../services/store.service';
import { SelectItem } from 'primeng/api';
import { LibraryService } from '../../../services/library.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit, OnDestroy {

  public playlistType: string = EListType.Watchlist;
  public moviePlaylist$: Observable<{ list: IMovie[] }>;
  public serialsPlaylist$: Observable<{ list: IMovie[] }>;
  public destroy$: Subject<void> = new Subject<void>();
  public options: {label: string, value: string}[];
  public checkedOption: string = EListType.Movies;
  public EListType = EListType;
  public EMediaType = EMediaType;
  public sortOptions: SelectItem[];
  public sortOrder: number;
  public sortField: string;
  public sortKey: string;

  constructor(private movieService: MovieService,
              private store: Store<IState>,
              private storeService: StoreService,
              private libraryService: LibraryService) { }

  ngOnInit(): void {
    // this.loadParams();
    // this.loadDataLists();
    // this.getDataLists();
    this.storeService.getAccountId();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

 //  loadParams(): void {
 //    this.options = [
 //      {label: EListType.Movies, value: EListType.Movies},
 //      {label: EListType.Serials, value: EListType.Serials}
 //    ];
 //    this.sortOptions = [
 //      {label: 'Rating High to Low', value: '!price'},
 //      {label: 'Rating Low to High', value: 'price'}
 //    ];
 //  }
 //
 //  onSortChange(event: any) {
 //    let value = event.value;
 //
 //    if (value.indexOf('!') === 0) {
 //      this.sortOrder = -1;
 //      this.sortField = value.substring(1, value.length);
 //    }
 //    else {
 //      this.sortOrder = 1;
 //      this.sortField = value;
 //    }
 //  }
 //
 //  loadDataLists(): void {
 //    this.storeService.loadWatchlist(1);
 //  }
 //
 //  getDataLists(): void {
 //    this.moviePlaylist$ = this.storeService.getWatchlist(EListType.Movies);
 //    this.serialsPlaylist$ = this.storeService.getWatchlist(EListType.Serials);
 //  }
 //
 //  watchMovie(id: number) {
 //
 //  }
 //
 //  paginateSerials(event: any) {
 //    const pageNumber = event.page + 1;
 //  }
 //
 //  paginateMovies($event: any) {
 //
 //  }
 //
 // removeFromWatchlist(type: EMediaType, id: number): void {
 //    switch (type) {
 //      case EMediaType.Movie:
 //        this.movieService.getMovieById(id)
 //          .pipe(takeUntil(this.destroy$))
 //          .subscribe({
 //            next: (movie) => {
 //              this.storeService.addOrRemoveMovieToWatchlist(movie, id, false)
 //            }
 //          });
 //        return;
 //      case EMediaType.Tv:
 //        this.movieService.getSerialById(id)
 //          .pipe(takeUntil(this.destroy$))
 //          .subscribe({
 //            next: (tv) => {
 //              this.storeService.addOrRemoveSerialToWatchlist(tv, id, false)
 //            }
 //          })
 //    }
 //  }
 //
 //  markUnMarkAsFavorite(event: any, type: EMediaType, id: number): void {
 //    const favorite = event.checked;
 //    switch (type) {
 //      case EMediaType.Movie:
 //        this.movieService.getMovieById(id)
 //          .pipe(takeUntil(this.destroy$))
 //          .subscribe({
 //            next: (movie) => {
 //              this.storeService.markUnmarkMovieAsFavorite(id, movie, favorite)
 //            }
 //          });
 //      return;
 //      case EMediaType.Tv:
 //        this.movieService.getSerialById(id)
 //          .pipe(takeUntil(this.destroy$))
 //          .subscribe({
 //            next: (tv) => {
 //              this.storeService.markUnmarkTvAsFavorite(id, tv, favorite)
 //            }
 //          });
 //      return;
 //    }
 //  }
}
