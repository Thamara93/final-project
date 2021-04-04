import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostVisitedHotelsComponent } from './most-visited-hotels.component';

describe('MostVisitedHotelsComponent', () => {
  let component: MostVisitedHotelsComponent;
  let fixture: ComponentFixture<MostVisitedHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostVisitedHotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostVisitedHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
