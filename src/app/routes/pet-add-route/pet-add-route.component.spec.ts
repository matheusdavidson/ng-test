import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAddRouteComponent } from './pet-add-route.component';

describe('PetAddRouteComponent', () => {
  let component: PetAddRouteComponent;
  let fixture: ComponentFixture<PetAddRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetAddRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetAddRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
