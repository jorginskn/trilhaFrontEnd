### a) Explique de forma sucinta a diferença entre SPA e MPA; 
    No Spa o brownser vai renderizar o core da aplicação apenas uma vez, todas as outras informações serão carregadas por demanda, de acordo com a necessida do usuário, além de oferecer uma melhor experiência para o usúario  pois não terá que ver a página carregando inúmeras vezes  .Enquanto MPA É O INVERSO.

### b) Como eram as páginas WEB na década de 90 e 1º década dos anos 2000?
    Eram com conteúdo estático com pouca interativade dos usúarios.

### c) O que é WEB 1.0 , WEB 2.0 e WEB 3.0?   
    Web 1.0 é a internet e come ela surgiu.Web 2.0 foi a revolução dos blogs e chats e redes sociais do mundo.Web 3.0 é a internet que temos toda informação de forma organizada para que não somente os humanos possam entender, mas principalmente as maquinas.

### d) Com suas palavras, responda às seguintes perguntas referentes ao Angular:
     I. De forma resumida o que é o Angular? Angular é um framework front-end que te da as ferramentas para construir suas aplicações
    II. Qual a relação do Angular com SPA? O Angular é o framework SPA mais completo que existe já que o Angular foi feito para esse tipo de aplicação .
    III. Em uma aplicação básica, o que é essencial ter?Módulos, componentes , templates, metadata , DataBiding, diretivas, serviços, injeção de dependecias
    IV. O que é o Angular CLI e qual a sua importância? Dê exemplos: É uma ferramenta de   Interface que usamos para inicializar, desenvolver , estruturar aplicativos diretamente de um shell de comando.Angular CLI cria toda a estrutura necessária para o projeto, com os arquivos, diretorios e scripts necessários.
    V.   Para que serve o arquivo angular.json? Fornece padrões de configuração  do espaço de trabalho e específicos do projeto.
    VI. Quais pacotes (libs) são considerados primários (default)? "@angularanimations" "@angular/common" "@angular/compiler" "@angularcore" "@angularforms": "@angular/platform-browser":"@angular/platform-browser-dynamic" @angular/router"
    VII. Para que serve o arquivo package.json? é usado para estipular e configurar as dependências do projeto, pacotes e scripts automatizados.
    VIII. Para que serve o arquivo environment.ts? ambiente de desenvolvimento.

### e) Sobre Text Interpolation, responda:
    I. O que é? Incorpora valores de string em seu template ou modelo HTML  Use a interpolação para alterar dinamicamente o que aparece em uma exibição do aplicativo. Exibir uma saudação personalizada que inclui o nome do usuário.
    II. Quais os benefícios de se ter interpolação em uma aplicação Angular?Exibir uma saudação personalizada que inclui o nome do usuário.
    III. Crie uma interpolação com o seu nome, com nome do seu guia, data do desafio e a sua turma do desafio.

### f) A respeito de Bindings, responda
    I. O que é Property Binding e quais as suas aplicações?

    Ajuda a  definir valores para propriedades de elementos ou diretivas HTMLUse a associação de propriedade para fazer coisas como a funcionalidade do botão de alternância, definir caminhos e compartilhar valores entre componentes.
    II. Qual é o passo a passo do fluxo das informações com Property Binding?Do componente para uma propriedade do elemento de destino .
    III. Dê um exemplo de Property Binding e explique o seu funcionamento.
    <img alt="item" [src]="itemImageUrl"> Os colchotes fazem com que o Angular avalie o lado direito da atribuição "itemImageUrl"  como uma expressão dinâmica.
    IV. O que é Event Binding? São eventos que permitem ouvir e responder a ação do usuário.
    V. Dê um exemplo de Event Binding e explique o seu funcionamento., como pressionamentos de tecla, movimentos do mouse, cliques e toques. <button (click)="onSave()">Save</button>  o event binding é os parentenses entre  click.
    VI. O que é Two-Way-Data-Binding e em quais cenários devemos usá-lo? É  uma associação de dois lados (biredicional) que oferece a sua Api uma maneira de compartilhar Dados.Use a associação bidirecional para ouvir eventos e atualizar valores simultaneamente entre componentes pai e filho
    VII. Dê um exemplo de Two-Way-Data-Binding e explique.
    <app-sizer [(size)]="fontSizePx"></app-sizer>  A combinação de colchete e parênteses combina para associação de propriedade e para associação de evento evento.
###   g) Diretivas:
    I. O que é uma diretiva Angular e qual o seu propósito? As diretivas são classes que adicionam comportamento adicional aos elementos.Use as diretivas internas do Angular para gerenciar formulários, listas, estilos e o que os usuários veem.
    II. Quais tipos de diretivas existem?Componentes, Diretivas de atributo e Diretivas estruturais
    III.  O  Angular  possui  algumas  diretivas  default,  explique  as  6  principais  e  dê  um  exemplo de cada;
    NgClass— adiciona e remove um conjunto de classes CSS.
    NgStyle— adiciona e remove um conjunto de estilos HTML.
    NgModel— adiciona vinculação de dados bidirecional a um elemento de formulário HTML.
    NgIf— cria ou descarta condicionalmente subviews do template.
    NgFor—repete um nó para cada item em uma lista.
    NgSwitch—um conjunto de diretivas que alternam entre visões alternativas.

### h) Reactive forms:
    I. Qual a diferença entre template-driven e reactive forms? Reactive Explícito, criado na classe do componente  , Modelo de dados	Estruturado e imutável , Fluxo de dados	Síncrono, Validação de formulário	Funções Enquanto no template-driven Configuração do modelo de formulário Implícito, criado por diretivas,  Modelo de dados Não estruturado e mutável , Fluxo de dados Assíncrono Validação de formulário Diretivas
    II. Quais benefícios temos ao usar um formulário reativo?
     São mais robustos e escaláveis , reutilizáveis e testaveis  são mais escaláveis ​​do que os formulários orientados por modelo. Eles fornecem acesso direto à API de formulário subjacente e usam fluxo de dados síncrono entre a exibição e o modelo de dados, o que facilita a criação de formulários em grande escala.
     III. Quais módulos são necessários para criar os formulários reativos?
     ReactiveFormsModule
     IV. Quais classes base temos para formulários reativos no Angular?
     FormGroup, FormControl , FormArray , FormBuilder, AbstractControl

     V.   Como é feita a configuração de um formulário reativo usando separadamente as classes base?  Com formulários reativos, você define o modelo de formulário diretamente na classe do componente.
     import { ReactiveFormsModule } from '@angular/forms';

        @NgModule({
    imports: [
        
        ReactiveFormsModule
                !!!!!!!!!!!!!!!!!!!

     VI. Como se dá o fluxo de informações entre o formulário reativo e o componente em Angular?  Cada elemento de formulario está vinculado ao  modelo de formulário (formControl) acessador de valor de controle ouvindo eventos no elemento de entrada de formulário imediatamente retransmite o novo valor para a FormControlinstância.
    A FormControlinstância emite o novo valor por meio do valueChangesobservável.

     VII. Como é feita a captura dos dados de um formulário reativo e apresentado na tela?  Atráves do valueChanges observável onde você pode escutar as mudanças  no valor. Para exibir na tela usamos interpolação no modelo.

     VIII. Explique  para  o  que  serve  a  validação  de  um  formulário  e  como  isto  pode  ser  apresentado para o usuário? Verificando o campos obrigatrios  ou consultando uma API externa Garantir que a entrada do  usuário esteja completa e correta. Tornando um campo obrigatorio definem validadores personalizados como funções que recebem um controle para validar.


    