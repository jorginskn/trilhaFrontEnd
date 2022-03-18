import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  template: '',
})
export class ComponentePaiComponent {
  //Logica
  @Input()
  numeroComponent: number = 0;

  valor:any = this.numeroComponent;

constructor(private router : Router){

}

  numeroPrimo(num: number): string {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return 'não é primo';
      }
    return 'é primo';
  }

  isPar(valor: number): string {
    return valor % 2 === 0 ? 'par' : 'ímpar';
  }
  goToCubo() {
    this.router.navigate(['cubo'], {queryParams: {valor: this.numeroComponent}});
    }
}
