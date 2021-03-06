import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { ComponenteRotasComponent } from './components/componente-rotas/componente-rotas.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { TestesPipeComponent } from './components/testes-pipe/testes-pipe.component';
import { CnpjEmpresaPipe } from './pipes/cnpj-empresa.pipe';
import { CodigoConvitePipe } from './pipes/codigo-convite.pipe';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ComponenteRotasComponent,
    ListaNumerosComponent,
    QuadradoComponent,
    CuboComponent,
    TestesPipeComponent,
    CodigoConvitePipe,
    CpfPipe,
    CnpjEmpresaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
