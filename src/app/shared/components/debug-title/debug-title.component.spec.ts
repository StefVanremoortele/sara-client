import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugTitleComponent } from './debug-title.component';

describe('DebugTitleComponent', () => {
  let component: DebugTitleComponent;
  let fixture: ComponentFixture<DebugTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebugTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
