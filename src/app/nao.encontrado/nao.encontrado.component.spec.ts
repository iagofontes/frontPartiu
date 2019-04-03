import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nao.EncontradoComponent } from './nao.encontrado.component';

describe('Nao.EncontradoComponent', () => {
  let component: Nao.EncontradoComponent;
  let fixture: ComponentFixture<Nao.EncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nao.EncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nao.EncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
