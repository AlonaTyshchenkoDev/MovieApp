import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './reducers';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MovieService } from './services/movie.service';
import { MoviesEffects } from './reducers/movies/movies.effects';
import { SerialsEffects } from './reducers/serials/serials.effects';
import { initializeApp } from '../providers/initialize.functions';
import { PostersEffects } from './reducers/posters/posters.effects';
import { AuthEffects } from './reducers/auth/auth.effects';
import { LibraryEffects } from './reducers/library/library.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([MoviesEffects, SerialsEffects, PostersEffects, LibraryEffects, AuthEffects])
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [MovieService, Store],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
