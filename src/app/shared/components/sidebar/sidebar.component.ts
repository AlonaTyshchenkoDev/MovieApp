import { Component, OnInit } from '@angular/core';
import { CSidebarItems } from '../../constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public items = CSidebarItems;
  constructor() { }

  ngOnInit(): void {
  }

}
