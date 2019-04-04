import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesVeiculoComponent } from './informacoes-veiculo.component';

describe('InformacoesVeiculoComponent', () => {
  let component: InformacoesVeiculoComponent;
  let fixture: ComponentFixture<InformacoesVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
