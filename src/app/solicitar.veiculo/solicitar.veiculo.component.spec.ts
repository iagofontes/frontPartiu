import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitar.VeiculoComponent } from './solicitar.veiculo.component';

describe('Solicitar.VeiculoComponent', () => {
  let component: Solicitar.VeiculoComponent;
  let fixture: ComponentFixture<Solicitar.VeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Solicitar.VeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Solicitar.VeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
