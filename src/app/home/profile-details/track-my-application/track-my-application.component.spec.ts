import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMyApplicationComponent } from './track-my-application.component';

describe('TrackMyApplicationComponent', () => {
  let component: TrackMyApplicationComponent;
  let fixture: ComponentFixture<TrackMyApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackMyApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackMyApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
