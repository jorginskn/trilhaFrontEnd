import { Routes } from '@angular/router';
import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() numeroComponent:number= 0;
  title ='desafio-sete';
  constructor(private router: Router) {}
   public nome  = "Jorge";
   public  date = new Date();
   public b : number = 22.5;


  goToLogin() {
    this.router.navigate(['circulo']);
  }
  goToCubo() {
    this.router.navigate(['cubo'], {queryParams: {valor:this.numeroComponent}});
    }
}
