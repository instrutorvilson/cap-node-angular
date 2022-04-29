import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdutoComponent } from './cadastro-produto.component';

describe('CadastroProdutoComponent', () => {
  let component: CadastroProdutoComponent;
  let fixture: ComponentFixture<CadastroProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should field descricao have size >= 5', () => {
    component.descricao = "peixe"
    expect(component.descricao.length).toBeGreaterThanOrEqual(5)
  }); 


});
