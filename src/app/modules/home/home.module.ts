import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './component/home.component';
import { MovieListComponent } from './children/movie-list/movie-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SerialsListComponent } from './children/serials-list/serials-list.component';
import { ItemPageComponent } from './children/item-page/item-page.component';
import { SerialPageComponent } from './children/serial-page/serial-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    ItemPageComponent,
    MovieListComponent,
    SerialsListComponent,
    SerialPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }
