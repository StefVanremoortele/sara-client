import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDetailsDialogComponent } from './building-details-dialog.component';

describe('BuildingDetailsDialogComponent', () => {
  let component: BuildingDetailsDialogComponent;
  let fixture: ComponentFixture<BuildingDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
