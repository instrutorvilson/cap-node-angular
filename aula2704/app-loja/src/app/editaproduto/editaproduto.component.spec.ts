import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaprodutoComponent } from './editaproduto.component';

describe('EditaprodutoComponent', () => {
  let component: EditaprodutoComponent;
  let fixture: ComponentFixture<EditaprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
