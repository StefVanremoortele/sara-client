import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivativeListItemComponent } from './privative-list-item.component';

describe('PrivativeListItemComponent', () => {
  let component: PrivativeListItemComponent;
  let fixture: ComponentFixture<PrivativeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivativeListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivativeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
