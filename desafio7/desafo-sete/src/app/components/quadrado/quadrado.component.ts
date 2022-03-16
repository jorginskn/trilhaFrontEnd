import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss'],
})
export class QuadradoComponent implements OnInit {
  @Input() valor: number = 0;

  constructor(private router: Router) {
    this.valor =
      this.router.getCurrentNavigation()?.extras.state?.['valorRota'];
  }

  ngOnInit(): void {}
}
