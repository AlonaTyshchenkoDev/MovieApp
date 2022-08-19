import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { IExtendedMovie, IMovie } from '../../interfaces';
import { MovieService } from '../../../services/movie.service';
import { IState } from '../../../reducers';
import { Store } from '@ngrx/store';
import { AddToWatchListAction } from '../../../reducers/library/library.action';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EListType } from '../../enums';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit, OnDestroy{

  public destroy$: Subject<void> = new Subject<void>()
  constructor(private movieService:MovieService,
              private store: Store<IState>,
              private route: ActivatedRoute
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
   console.log(this.pageType)
  }

  addToWatchList(id: number) {
    switch (this.pageType) {
      case EListType.Movies:
      this.movieService.getMovieById(id)
        .pipe(
          takeUntil(this.destroy$))
        .subscribe((movie) => {
          this.store.dispatch(new AddToWatchListAction(movie))
        });
      return;
      case EListType.Serials:
      this.movieService.getSerialById(id)
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe((serial) => {
          console.log(serial)
          this.store.dispatch(new AddToWatchListAction(serial))
        });
      return;
    }
  }
}
