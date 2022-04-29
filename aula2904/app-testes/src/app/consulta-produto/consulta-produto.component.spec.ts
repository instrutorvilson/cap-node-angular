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

  it('should produto have id, descricao e preco', () => {
    component.produto.id = 1
    component.produto.descricao = "Feijão"
    component.produto.preco = 10
    expect(component.produto.id).toBeTruthy();
    expect(component.produto.descricao).toBeTruthy();
    expect(component.produto.preco).toBeTruthy();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
