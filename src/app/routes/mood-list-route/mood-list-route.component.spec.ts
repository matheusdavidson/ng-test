import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodListRouteComponent } from './mood-list-route.component';

describe('MoodListRouteComponent', () => {
  let component: MoodListRouteComponent;
  let fixture: ComponentFixture<MoodListRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodListRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodListRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
