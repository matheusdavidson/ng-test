import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodAddRouteComponent } from './mood-add-route.component';

describe('MoodAddRouteComponent', () => {
  let component: MoodAddRouteComponent;
  let fixture: ComponentFixture<MoodAddRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodAddRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodAddRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
