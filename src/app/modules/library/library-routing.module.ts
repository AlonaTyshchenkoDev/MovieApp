import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './component/library.component';
import { WatchListComponent } from './children/watch-list/watch-list.component';
import { PlaylistsComponent } from './children/playlists/playlists.component';
import { CompletedListComponent } from './children/completed-list/completed-list.component';

const routes: Routes = [{
  path: '',
  component: LibraryComponent,
  children: [
    {
      path: 'watchList',
      component: WatchListComponent
    },
    {
      path: 'playlists',
      component: PlaylistsComponent
    },
    {
      path: 'completed',
      component: CompletedListComponent
    }
  ]
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
