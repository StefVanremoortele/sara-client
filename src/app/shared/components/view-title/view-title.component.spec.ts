import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTitleComponent } from './view-title.component';

describe('ViewTitleComponent', () => {
  let component: ViewTitleComponent;
  let fixture: ComponentFixture<ViewTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
