import { Component, OnInit } from '@angular/core';
import { IExtendedMovie, IExtendedSerial } from '../../../../shared/interfaces';
import { Subject, takeUntil } from 'rxjs';
import { MovieService } from '../../../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serial-page',
  templateUrl: './serial-page.component.html',
  styleUrls: ['./serial-page.component.scss']
})
export class SerialPageComponent implements OnInit {

  public movieData: IExtendedMovie;
  public serialData: IExtendedSerial;
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
          this.getSerialData(+params['id']);
        }
      });
  }

  getSerialData(id: number): void {
    this.movieService.getSerialById(id)
      .subscribe({
        next: (movieData) => {
          this.serialData = movieData;
          console.log(this.pageType)
        },
        error: (error) => {
          console.log('error', error);
        }
      });
  }

}
