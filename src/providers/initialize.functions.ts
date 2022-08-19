import { MovieService } from '../app/services/movie.service';
import { Store } from '@ngrx/store';
import {
  getMoviesState,
  getPostersState,
  getSerialsState,
  IState
} from '../app/reducers';
import { LoadMoviesAction} from '../app/reducers/movies/movies.action';
import { delay } from 'rxjs';
import { LoadSerialsAction } from '../app/reducers/serials/serials.actions';
import { LoadPostersAction } from '../app/reducers/posters/posters.action';

export function initializeApp(movieService: MovieService, store: Store<IState>): () => Promise<boolean> {
  return () => new Promise(async (resolve, reject) => {
    store.dispatch(new LoadMoviesAction({page: 1}));
    store.select(getMoviesState)
      .pipe(
        delay(2000)
      )
      .subscribe({
        next: () => {
          resolve(true);
        }
      });
    store.dispatch(new LoadSerialsAction({page: 1}));
    store.select(getSerialsState)
      .pipe(
        delay(2000)
      )
      .subscribe({
        next: () => {
          resolve(true);
        }
      });
    store.dispatch(new LoadPostersAction());
    store.select(getPostersState)
      .pipe(
        delay(2000)
      )
      .subscribe({
        next: () => {
          resolve(true);
        }
      });
  })
}
