import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { EPlaylistType } from '../../enums';
import { IMovie } from '../../interfaces';
import { Store } from '@ngrx/store';
import { getWatchlist, IState } from '../../../reducers';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  public playlistType: string = EPlaylistType.Watchlist;
  public moviePlaylist: IMovie[];

  constructor(private movieService: MovieService,
              private store: Store<IState>) { }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList(): void {
    this.store.select(getWatchlist)
      .subscribe({
        next: (list) => {
          this.moviePlaylist = list.watchlist
        }
      })
  }
}
