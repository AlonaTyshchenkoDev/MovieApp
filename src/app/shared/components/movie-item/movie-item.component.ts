import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { IExtendedMovie, IMovie } from '../../interfaces';
import { MovieService } from '../../../services/movie.service';
import { async, map, Subject, switchMap, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../../services/store.service';
import { EListType, EMediaType } from '../../enums';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit, OnDestroy{

  public destroy$: Subject<void> = new Subject<void>();
  public movie: IExtendedMovie;

  constructor(private movieService:MovieService,
              private storeService: StoreService,
              private route: ActivatedRoute,
  ) {
  }
  @Input() movieData: IMovie;
  @Input() isPoster: boolean = false;
  @Input() pageType: string;

  ngOnInit() {
    this.checkParams();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  checkParams(): void {
   this.pageType = this.route.snapshot.url[0].path;
  }

  addToWatchList(pageType: string, id: number) {
    switch (pageType) {
      case EListType.Movies:
        this.movieService.getMovieById(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (movie) => {
            this.storeService.addOrRemoveMovieToWatchlist(movie, id, true);
          }
        })
      return;
      case EListType.Serials:
        this.movieService.getSerialById(id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (serial) => {
              this.storeService.addOrRemoveSerialToWatchlist(serial, id, true)
            }
          })
      return;
    }
  }
}
