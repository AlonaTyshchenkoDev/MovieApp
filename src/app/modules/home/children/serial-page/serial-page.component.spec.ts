import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialPageComponent } from './serial-page.component';

describe('SerialPageComponent', () => {
  let component: SerialPageComponent;
  let fixture: ComponentFixture<SerialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
