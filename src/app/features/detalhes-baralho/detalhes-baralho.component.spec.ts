import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesBaralhoComponent } from './detalhes-baralho.component';

describe('DetalhesBaralhoComponent', () => {
  let component: DetalhesBaralhoComponent;
  let fixture: ComponentFixture<DetalhesBaralhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesBaralhoComponent]
    });
    fixture = TestBed.createComponent(DetalhesBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
