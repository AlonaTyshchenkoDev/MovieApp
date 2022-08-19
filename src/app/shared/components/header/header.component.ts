import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { debounceTime, distinctUntilChanged, Observable, Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CHeaderNavItems } from '../../constants';
import { MovieService } from '../../../services/movie.service';
import { IExtendedMovie, IMovie } from '../../interfaces';
import { Router } from '@angular/router';
import { EListType, EMediaType } from '../../enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public visibleSidebar: boolean = false;
  public destroy$: Subject<void> = new Subject<void>();
  public items: MenuItem[] = CHeaderNavItems;
  public searchGroup: FormGroup;
  public searchValue: string = '';
  public foundMovies: IMovie[];

  constructor(private fb: FormBuilder,
              private movieService: MovieService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initForm(): void {
    this.searchGroup = this.fb.group({
      search: ['']
    });
    this.searchGroup.get('search')?.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe({
        next: (searchValue) => {
          this.searchValue = searchValue;
          if (!searchValue) return;
          this.searchMovies(searchValue);
        }
      })
  }

  searchMovies(search: string): void {
    this.movieService.searchItem(search)
      .subscribe({
        next: (list) => {
          this.foundMovies = list.results;
        }
      });
  }

  checkSelectedMovie(event: any) {
    if(event.data.media_type === EMediaType.Tv){
      this.router.navigate([`item-page/${EListType.Serials}/${event.data.id}`])
    }
    if(event.data.media_type === EMediaType.Movie){
      this.router.navigate([`item-page/${EListType.Movies}/${event.data.id}`])
    }
  }
}
