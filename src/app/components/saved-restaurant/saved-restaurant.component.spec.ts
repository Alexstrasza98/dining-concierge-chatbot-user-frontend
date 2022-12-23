import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRestaurantComponent } from './saved-restaurant.component';

describe('SavedRestaurantComponent', () => {
  let component: SavedRestaurantComponent;
  let fixture: ComponentFixture<SavedRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
