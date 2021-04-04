import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsInformationComponent } from './hotels-information.component';

describe('HotelsInformationComponent', () => {
  let component: HotelsInformationComponent;
  let fixture: ComponentFixture<HotelsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
