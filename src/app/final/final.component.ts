import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() { }

  public retornarInicio() {
    this.route.navigate(['']);
  }

}
