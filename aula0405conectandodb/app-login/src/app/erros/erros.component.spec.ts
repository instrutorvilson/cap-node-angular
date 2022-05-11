import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrosComponent } from './erros.component';

describe('ErrosComponent', () => {
  let component: ErrosComponent;
  let fixture: ComponentFixture<ErrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
