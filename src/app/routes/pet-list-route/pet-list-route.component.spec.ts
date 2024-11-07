import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListRouteComponent } from './pet-list-route.component';

describe('PetListRouteComponent', () => {
  let component: PetListRouteComponent;
  let fixture: ComponentFixture<PetListRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetListRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetListRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
