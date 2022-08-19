import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryComponent } from './component/library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { WatchListComponent } from './children/watch-list/watch-list.component';
import { PlaylistsComponent } from './children/playlists/playlists.component';
import { CompletedListComponent } from './children/completed-list/completed-list.component';

@NgModule({
  declarations: [
    LibraryComponent,
    WatchListComponent,
    PlaylistsComponent,
    CompletedListComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule
  ]
})
export class LibraryModule { }
