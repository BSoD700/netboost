import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquariumComponent } from './aquarium.component';

describe('AquariumComponent', () => {
  let component: AquariumComponent;
  let fixture: ComponentFixture<AquariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquariumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
