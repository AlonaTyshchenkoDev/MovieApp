import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home.component';
import { MovieListComponent } from './children/movie-list/movie-list.component';
import { ItemPageComponent } from './children/item-page/item-page.component';
import { SerialsListComponent } from './children/serials-list/serials-list.component';
import { EListType } from '../../shared/enums';
import { SerialPageComponent } from './children/serial-page/serial-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: EListType.Movies,
        component: MovieListComponent
      },
      {
        path: EListType.Serials,
        component: SerialsListComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: EListType.Movies
      }
    ]
  },
  {
    path: `item-page/Movies/:id`,
    component: ItemPageComponent
  },
  {
    path: `item-page/Serials/:id`,
    component: SerialPageComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
