import { ComponentFixture, TestBed } from '@angular/core/testing';

import { currenciesConverterComponent } from './currencies-converter.component';

describe('ConvertCardComponent', () => {
  let component: currenciesConverterComponent;
  let fixture: ComponentFixture<currenciesConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [currenciesConverterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(currenciesConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
