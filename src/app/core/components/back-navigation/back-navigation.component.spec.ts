import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNavigationComponent } from './back-navigation.component';

describe('BackNavigationComponent', () => {
  let component: BackNavigationComponent;
  let fixture: ComponentFixture<BackNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
