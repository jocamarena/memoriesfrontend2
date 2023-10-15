import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempconversionComponent } from './tempconversion.component';

describe('TempconversionComponent', () => {
  let component: TempconversionComponent;
  let fixture: ComponentFixture<TempconversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempconversionComponent]
    });
    fixture = TestBed.createComponent(TempconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
