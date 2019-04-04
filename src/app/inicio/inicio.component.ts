import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'snack-bar-message-component',
  templateUrl: 'snack.bar.message.component.html',
  styles: [`.color-message {
    color: #03dac6;
  }`],
})
export class SnackBarMessageComponent implements OnInit {
  public message = '';
  ngOnInit() {
    this.message = sessionStorage.getItem('messageSnack').toString();
  }
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @Input() clienteNome = '';

  constructor(
    public router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  informarDestino() {
    if (this.validarNome()) {
      this.router.navigate(['/solicitarveiculo']);
    } else {
      this.showSnackBarWithMessage('Digite seu nome para continuar');
    }
  }

  validarNome(): boolean {
    if (this.clienteNome.length <= 0) {
      return false;
    }
    return true;
  }

  showSnackBarWithMessage(message: string) {
    sessionStorage.setItem('messageSnack', message);
    this.snackBar.openFromComponent(SnackBarMessageComponent, {
      duration: 5 * 1000,
    });
  }
}
