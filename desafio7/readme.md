1### ROTAS 

    I. Qual é o comando no Angular CLI para criar uma nova aplicação com rotas?ng new routing-app --routing --defaults
    II. Qual é o comando no Angular CLI para criar um novo módulo com rotas?
    ng new AppRoutingModule
    III. Para que serve o método navigate( ) da classe Router? Navegar para aonde os seus comandos fornecidos ao navigate.
    IV. Para que serve o método isactive( ) da classe Router? Retorna se o URL está ativado.    
    V.  Para que serve o arquivo src/app/app-routing.module.ts?  É um arquivo de módulo das rotas: aonde você vai setar as rotas. É no router-outlet que os componentes acessados pelas rotas são renderizados.O Route objeto para uma rota secundária tem uma outlet propriedade para identificar a saída de destino:
    VII. Dê um exemplo de um botão chamando uma rota através de um método em angular.
    goToLogin() {
    this.router.navigate(['circulo'], {queryParams: {valor:this.numeroComponent}});
    }
     VIII. Dê um exemplo de um botão chamando uma rota sem chamar um método em angular.<button [routerLink]="['circulo']">Opa</button>
     IX. O que é Lazy Load? Dê um exemplo da definição de uma rota em angular utilizando Lazy Load.*****  um padrão de design que carrega NgModules conforme necessário. O carregamento lento ajuda a manter os tamanhos dos pacotes iniciais menores, o que, por sua vez, ajuda a diminuir os tempos de carregamento.path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
    X. O que é Eager Load? Dê um exemplo da definição de uma rota em angular utilizando Eager Load.Modo padrão em que são carregados lentamente .{ path: '', component: HomeComponent, pathMatch: 'full' },
### PIPES 

    I. Qual é a utilidade dos pipes em aplicações Angular?  O Pipe serve para transformar strings, valores monetários , datas e outros dados de exibição. Pipes são funções simples para usar em expressões de modelo para aceitar um valor de entrada e retornar um valor transformado.
    II. Cite os 6 pipes que fazem parte do pacote inicial do Angular. 
    DatePipe:
    UpperCasePipe: 
    CurrencyPipe:
    DecimalPipe: 
    PercentPipe
    III. Descreva a funcionalidade de cada um dos pipes citados acima e dê um exemplo da sua utilização, juntamente com o resultado em tela.
    DatePipe: formata um valor de data de acordo com as regras de localidade. {{date | date: "short"}}
    UpperCasePipe: Formata a String  transformando todas as letras em maiúsculas.{{nome | uppercase }}
    Transforma um número em uma string de moeda, formatada de acordo com as regras de localidade que determinam o tamanho e o separador do grupo, caractere de ponto decimal e outras configurações específicas de localidade.{{b | currency}}
    DecimalPipe: Formata um valor de acordo com as opções de dígitos e as regras de localidade.{{b | number}}
    PercentPipe: Transforma um número em uma string de porcentagem, formatada de acordo com as regras de localidade que determinam o tamanho e o separador do grupo, caractere de ponto decimal e outras configurações específicas de localidade.
    IV. O que são custom pipes?São Pipes criados para coisas especificas .


