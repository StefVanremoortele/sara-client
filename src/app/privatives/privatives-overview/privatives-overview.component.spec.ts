import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivativesOverviewComponent } from './privatives-overview.component';

describe('PrivativesOverviewComponent', () => {
  let component: PrivativesOverviewComponent;
  let fixture: ComponentFixture<PrivativesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivativesOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivativesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
