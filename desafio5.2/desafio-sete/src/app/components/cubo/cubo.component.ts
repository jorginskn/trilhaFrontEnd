import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss'],
})
export class CuboComponent implements OnInit {
  valor: any;

  constructor(private routes: ActivatedRoute){

  }


  ngOnInit(): void {
    this.routes.queryParams.subscribe(params => {
      this.valor = params['valor']
    })
  }


}
