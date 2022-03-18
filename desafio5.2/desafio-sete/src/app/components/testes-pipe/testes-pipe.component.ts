import { Component, OnInit } from '@angular/core';
import { LOCALE_ID } from '@angular/core';

provider: [
  {
    provide: LOCALE_ID,
    useValue: 'BRL',
  },
];
@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.scss'],
})
export class TestesPipeComponent implements OnInit {
  constructor() {}
  public date = new Date();
  public preco: number = 22.5;
  public porcent:number =0.8465;
  ngOnInit(): void {}
}
