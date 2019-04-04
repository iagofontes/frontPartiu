import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesCorridaComponent } from './informacoes-corrida.component';

describe('InformacoesCorridaComponent', () => {
  let component: InformacoesCorridaComponent;
  let fixture: ComponentFixture<InformacoesCorridaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesCorridaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesCorridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
