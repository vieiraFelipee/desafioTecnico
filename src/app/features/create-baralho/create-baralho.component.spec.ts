import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBaralhoComponent } from './create-baralho.component';

describe('CreateBaralhoComponent', () => {
  let component: CreateBaralhoComponent;
  let fixture: ComponentFixture<CreateBaralhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBaralhoComponent]
    });
    fixture = TestBed.createComponent(CreateBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
