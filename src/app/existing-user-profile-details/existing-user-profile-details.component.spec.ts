import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingUserProfileDetailsComponent } from './existing-user-profile-details.component';

describe('ExistingUserProfileDetailsComponent', () => {
  let component: ExistingUserProfileDetailsComponent;
  let fixture: ComponentFixture<ExistingUserProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingUserProfileDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingUserProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
