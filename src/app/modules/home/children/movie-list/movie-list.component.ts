import { Component, OnInit } from '@angular/core';
import { EListType } from '../../../../shared/enums';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public pageType: string = EListType.Movies;

  constructor() { }

  ngOnInit(): void {

  }

}
