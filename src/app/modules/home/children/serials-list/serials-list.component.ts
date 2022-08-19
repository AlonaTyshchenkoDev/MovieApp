import { Component, OnInit } from '@angular/core';
import { EListType } from '../../../../shared/enums';

@Component({
  selector: 'app-serials-list',
  templateUrl: './serials-list.component.html',
  styleUrls: ['./serials-list.component.scss']
})
export class SerialsListComponent implements OnInit {

  public pageType: string = EListType.Serials;

  constructor() { }

  ngOnInit(): void {
  }

}
