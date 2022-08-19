import { Injectable } from '@angular/core';
import { IState } from '../reducers';
import { Store } from '@ngrx/store';
import { EPlaylistType } from '../shared/enums';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private store: Store<IState>, private movieService: MovieService) { }

  addMovie(type: string, id: number): void{

    switch (type) {
      case(EPlaylistType.Watchlist):
        // this.store.dispatch(new AddToWatchListAction())
    }
  }

  removeMovie(type: string, id: number): void {

  }

  getPlaylist() {

  }
}
