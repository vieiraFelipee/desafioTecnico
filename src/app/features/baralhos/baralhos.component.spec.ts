import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaralhosComponent } from './baralhos.component';

describe('BaralhosComponent', () => {
  let component: BaralhosComponent;
  let fixture: ComponentFixture<BaralhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaralhosComponent]
    });
    fixture = TestBed.createComponent(BaralhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
