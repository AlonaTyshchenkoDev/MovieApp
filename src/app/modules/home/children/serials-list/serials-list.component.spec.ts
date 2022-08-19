import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialsListComponent } from './serials-list.component';

describe('SerialsListComponent', () => {
  let component: SerialsListComponent;
  let fixture: ComponentFixture<SerialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
