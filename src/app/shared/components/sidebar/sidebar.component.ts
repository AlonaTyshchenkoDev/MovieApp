import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { AuthService } from '../../../services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { EListType } from '../../enums';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnDestroy{

  public destroy$: Subject<void> = new Subject<void>();
  public items: MenuItem[] = [
    {label: 'Menu', disabled: true},
    {label: 'Movies', routerLink: `/${EListType.Movies}`, icon:'pi pi-video'},
    {label: 'Serials', routerLink: `/${EListType.Serials}`, icon:'pi pi-video'},
    {label: 'Library', disabled: true },
    {label: 'Recent', routerLink: '', icon: 'pi pi-clock'},
    {label: 'Playlists', routerLink: 'library/playlists', icon: 'pi pi-heart'},
    {label: 'Watchlist', routerLink: `library/${EListType.Watchlist}`, icon: 'pi pi-database'},
    {label: 'Completed', routerLink: '/library/completed', icon: 'pi pi-check-square'},
    {label: 'General', disabled: true},
    {label: 'Log Out', icon: 'pi pi-power-off', command: () => {
      this.auth.deleteSession()
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => localStorage.clear())}}
  ]

  constructor(public auth: AuthService) {
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
