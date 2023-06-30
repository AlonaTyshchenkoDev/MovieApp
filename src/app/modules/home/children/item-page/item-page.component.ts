import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, Subject, takeUntil } from 'rxjs';

import { MovieService } from '../../../../services/movie.service';
import { IExtendedMovie } from '../../../../shared/interfaces';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit, OnDestroy {

  public movieData: IExtendedMovie;
  public destroy$: Subject<void> = new Subject<void>();
  public pageType: string;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getParams(): void {
    this.pageType = this.route.snapshot.url[1].path;
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (params) => {
          if (!params) return;
          this.getMovieData(+params['id']);
        }
      });
  }

  getMovieData(id: number): void {
    this.movieService.getMovieById(id)
      .subscribe({
        next: (movieData) => {
          this.movieData = movieData;
        },
        error: (error) => {
          console.log('error', error);
        }
      });
  }

  // getById(id: number): void {
  //     if(this.pageType === EListType.Movies){
  //       this.movieService.getMovieById(id)
  //         .subscribe({
  //           next: (movieData) => {
  //             this.movieData = movieData;
  //             console.log(this.pageType)
  //           },
  //           error: (error) => {
  //             console.log('error', error);
  //           }
  //         });
  //     }
  //     if(this.pageType === EListType.Serials) {
  //       this.movieService.getSerialById(id)
  //         .subscribe({
  //           next: (serialData) => {
  //             this.serialData = serialData;
  //             console.log(this.serialData)
  //           },
  //           error: (error) => {
  //             console.log('error', error);
  //           }
  //         });
  //     }
  //   }
}
