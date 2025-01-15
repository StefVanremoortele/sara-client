import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingListItemComponent } from './building-list-item.component';

describe('BuildingListItemComponent', () => {
  let component: BuildingListItemComponent;
  let fixture: ComponentFixture<BuildingListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
