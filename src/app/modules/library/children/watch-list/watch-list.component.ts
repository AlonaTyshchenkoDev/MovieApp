import { Component, OnInit } from '@angular/core';

import { EListType } from '../../../../shared/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {

  public options: {label: string, value: string}[];
  public checkedOption: string = EListType.Movies;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadParams();
  }

   loadParams(): void {
     this.options = [
       {label: EListType.Movies, value: EListType.Movies},
       {label: EListType.Serials, value: EListType.Serials}
     ]
   }

   navigate(type: string) {
    this.router.navigate([`/library/${EListType.Watchlist}`, {type}]);
   }
}
