import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinFormComponent } from './pin-form.component';

describe('PinFormComponent', () => {
  let component: PinFormComponent;
  let fixture: ComponentFixture<PinFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinFormComponent]
    });
    fixture = TestBed.createComponent(PinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
