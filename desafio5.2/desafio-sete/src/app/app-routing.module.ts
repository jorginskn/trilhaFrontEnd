import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteRotasComponent } from './components/componente-rotas/componente-rotas.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { TestesPipeComponent } from './components/testes-pipe/testes-pipe.component';

const routes: Routes = [
  {
    path: 'circulo',
    component: ComponenteRotasComponent,
  },
  {
    path: 'lista',
    component: ListaNumerosComponent,
  },
  {
    path:'quadrado',
    component:QuadradoComponent,
  },
  {
    path:'cubo',
    component: CuboComponent,
  },
  {
    path: 'pipe',
    component: TestesPipeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
