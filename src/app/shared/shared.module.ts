import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { MegaMenuModule } from 'primeng/megamenu';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';

import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { LoadImageDirective } from '../directives/load-image.directive';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataViewModule } from 'primeng/dataview';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    MovieItemComponent,
    HeaderComponent,
    ListComponent,
    LoadImageDirective,
    PlaylistComponent,
  ],
  imports: [
    CommonModule,
    TabMenuModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    MegaMenuModule,
    CarouselModule,
    TabViewModule,
    RatingModule,
    FormsModule,
    CardModule,
    PaginatorModule,
    MenuModule,
    OverlayPanelModule,
    TableModule,
    ReactiveFormsModule,
    PasswordModule,
    SelectButtonModule,
    DataViewModule,
    ToggleButtonModule
    ],
  exports: [
    SidebarComponent,
    FooterComponent,
    MovieItemComponent,
    PlaylistComponent,
    TabMenuModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    CarouselModule,
    RatingModule,
    HeaderComponent,
    ListComponent,
    PaginatorModule,
    LoadImageDirective,
    ReactiveFormsModule,
    PasswordModule,
    SelectButtonModule,
    DataViewModule,
    ToggleButtonModule
  ]
})
export class SharedModule { }
