import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProdutoComponent } from './consulta-produto.component';

describe('ConsultaProdutoComponent', () => {
  let component: ConsultaProdutoComponent;
  let fixture: ComponentFixture<ConsultaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
