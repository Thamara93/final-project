import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostVisitedPlacesComponent } from './most-visited-places.component';

describe('MostVisitedPlacesComponent', () => {
  let component: MostVisitedPlacesComponent;
  let fixture: ComponentFixture<MostVisitedPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostVisitedPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostVisitedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
