import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivativeDetailComponent } from './privative-detail.component';

describe('PrivativeDetailComponent', () => {
  let component: PrivativeDetailComponent;
  let fixture: ComponentFixture<PrivativeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivativeDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivativeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
