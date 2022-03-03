# DESAFIO 5

### a) Explique de forma sucinta a diferença entre SPA e MPA;

    Single page application quer dizer que o browser vai renderizar o core da aplicação apenas uma vez, todas as outras informações serão carregadas por demanda, de acordo com a necessidade do usuário.
    MPA
    Cada item presente nessa seção é uma request que foi processada e solicitada pelo browser.

### b) Como eram as páginas WEB na década de 90 e 1º década dos anos 2000?

    WEB 1.0 é estático e sem nenhuma forma de interatividade com os leitores. É possível visitá-lo muitas vezes, mas não haverá nada de novo em todas as novas visitas e não há motivo para retornar a ele.

### c) O que é WEB 1.0 , WEB 2.0 e WEB 3.0?

    WEB 1.0 é estático e sem nenhuma forma de interatividade com os leitores. É possível visitá-lo muitas vezes, mas não haverá nada de novo em todas as novas visitas e não há motivo para retornar a ele.
    2.0, que consiste em uma maior interação dentro de cada página. A partir desse novo formato de WEB, foi possível a criação de blogs e da Wikipédia, em que o leitor não é passivo em relação ao que está publicado.
    WEB 2.0 não se refere a um avanço específico na tecnologia, mas a um conjunto de técnicas para design e execução de páginas da Web. Além disso, algumas dessas técnicas existem desde que a World Wide Web (www) foi lançada, de modo que não é possível separar Web 1.0 e a Web 2.0 em termos cronológicos. A definição de Web 1.0 é dependente da definição de Web 2.
    A WEB 3.0 consiste em algo além da interatividade. Páginas nesse formato personalizam o conteúdo de maior relevância de acordo com as preferências de cada pessoa. Por exemplo, ao usar a ferramenta do Google para procurar a palavra “Manga”, nos outros formatos, o buscador mostraria resultados tanto da fruta, quanto de uma camisa, quanto do ex-jogador de futebol. Caso um jornalista esportivo estivesse buscando informações sobre o jogador para uma matéria de futebol, seria pouco relevante para ele, enquanto na WEB 3.0, o buscador reconheceria as preferências do usuário e filtraria os resultados de pesquisa para uma maior relevância de resultados.

### d) d) Com suas palavras, responda às seguintes perguntas referentes ao Angular:

    Angular é uma plataforma e framework para construção da interface de aplicações usando HTML, CSS e, principalmente, JavaScript, criada pelos desenvolvedores da Google.
        I- Angular nos ajuda a criar Single-Page Applications com uma qualidade e produtividade
        surpeendente!
        II-Sua finalidade é nos dar ferramentas necessárias para criação de aplicações SPA, além disso também deixa o desenvolvimento deste tipo de aplicação mais simples e otimizado. Com ele, podemos desenvolver aplicações web voltadas tanto para resoluções desktop quanto para resoluções mobile, tornando-as dinâmicas, modernas e escaláveis.
        III-  Módulos
        Componentes
        Templates
        Metadata
        Data binding
        Diretivas
        Serviços
        Injeção de dependências
        IV-O Angular CLI é baseado no Webpack, uma ferramenta que ajuda a processar e agrupar nossos diversos arquivos TypeScript, JavaScript, CSS, HTML e imagens. Por baixo dos panos, o Webpack é responsável por estruturar o ponto de entrada da aplicação, ou seja, a raiz contextual.E com diveros comandos podemos baixar arquivos como :ng new NOME-DO-PROJETO
        V-O arquivo angular. json contém as configurações globais da aplicação, também define o arquivo que vai iniciar a aplicação, fazendo o SPA
        VI-PrimeNG,Angular Material,Nebular,NGX-Bootstrap, Ant Design para Angular
        VII-O package. json é um arquivo de configuração utilizado para estipular e configurar dependências do seu projeto (quais outros pacotes ele vai precisar para ser executado) e scripts automatizados. Através dele conseguimos deixar claro uma "receita" para executar um projeto.
        VIII- primeiro arquivo representaria o ambiente de desenvolvimento

### e)Sobre Text Interpolation, responda:

    I. O que é?
    A interpolação de texto permite incorporar valores de string dinâmicos em seus modelos HTML. Use a interpolação para alterar dinamicamente o que aparece em uma exibição do aplicativo, como exibir uma saudação personalizada que inclui o nome do usuário.
    II. Quais os benefícios de se ter interpolação em uma aplicação Angular?Os bindings em angular são as formas de como a View interage com Model/(Compoment). Interpolation ou interpolação em português é o tipo mais comum de binding, ele é utilizado para transportar o valor de propriedades e retorno de métodos do componente para o template HTML

### f) A respeito de Bindings, responda:

    I. O que é Property Binding e quais as suas aplicações?
    A vinculação de propriedades em Angular ajuda a definir valores para propriedades de elementos ou diretivas HTML. Use a associação de propriedade para fazer coisas como a funcionalidade do botão de alternância, definir caminhos programaticamente e compartilhar valores entre componentes.
    II. Qual é o passo a passo do fluxo das informações com Property Binding?
    To bind to an element's property, enclose it in square brackets, [], which identifies the property as a target property. A target property is the DOM property to which you want to assign a value. For example, the target property in the following code is the image element's src property
    III. Dê um exemplo de Property Binding e explique o seu funcionamento.
    Aqui a coisa começa a ficar mais interessante, pois com attribute binding podemos setar o valor de qualquer atributo de um elemento html.
    Podemos utilizar a interpolação para tanto da seguinte forma:
    <input type="text" value="{{propriedade}}">
    IV. V. O que é Event Binding?
    V.   Dê um exemplo de Event Binding e explique o seu funcionamento.
    Neste tipo de binding enviamos valores vindos do template HTML para o componente, este tipo de binding é importantíssimo por ser utilizado para manipular os eventos e interações com o template e enviados para o componente.
    E como o próprio nome diz, event binding, utilizamos de eventos para que possamos disparar os métodos ou expressões para atualizarmos a model a partir de um elemento Html presente no template.
    VI. O que é Two-Way-Data-Binding e em quais cenários devemos usá-lo?
    Diferente do angular Js, o binding de duas vias em angular algumas otimizações de perfomance foram implementadas, e por este motivo não existe mais este tipo de binding e sim uma combinação do attribute binding e event binding quando precisamos atualizar o template e o componente existe a diretiva ngModel, utilizada nos elemtos de um formulário que simplifica o modo de fazermos o binding de duas vias.Neste tipo de binding, como explicado, anteriormente temos a união dos dois tipos de binding em uma sintaxe conhecida como "banana in the box" ou [(ngModel)], como podemos ver esta sintaxe realmente lembra duas bananas, representando os parenteses "()", e a caixa, representando os colchetes "[]", uma forma simples de lembrar a sintaxe é imaginar esta figura abaixo:

### g) Diretivas

    I. O que é uma diretiva Angular e qual o seu propósito?
    Diretivas são extensões da linguagem HTML, que fornecem a possibilidade de estender/ampliar o comportamento de elementos HTML. Este recurso permite a implementação de novos comportamentos de forma declarativa.
    Ao selecionar um elemento HTML, a diretiva pode ampliar seu comportamento de diversas formas:para adicionar um novo HTML,
    associar eventos à funções Javascript,
    manipular o DOM.
    II. Quais tipos de diretivas existem?ng-click,ng-if,ng-view,ng-switch,ng-controller
    III.  O  Angular  possui  algumas  diretivas  default,  explique  as  6  principais  e  dê  um  exemplo de cada
    ng-click Permite instanciar o evento de click, semelhante ao onclick.
    ng-if	Declaração básica de um 'if' que permite mostrar um elemento se a condição for verdadeira.
    ng-class	Permite atributos de classe serem carregados dinamicamente.
    ng-model É similar ao ng-bind, mas permite ligação direta bidirecional (two-way data binding ) entre a view e o escopo do aplicativo.
    ng-switch	Instancia um template, em uma lista de escolhas, dependendo do valor obtido pela expressão.
    ng-view	A diretiva base para manipulação de rotas, resolvendo um JSON antes de renderizar os modelos acionados por controladores especificados

### Reactive forms:
    I. Qual a diferença entre template-driven e reactive forms?
    formulários reativos fornecem uma abordagem baseada em modelo para lidar com entradas de formulário cujos valores mudam ao longo do tempo. Este guia mostra como criar e atualizar um controle de formulário básico, progredir para usar vários controles em um grupo, validar valores de formulário e criar formulários dinâmicos nos quais você pode adicionar ou remover controles em tempo de execução.
    Template-driven forms are suitable for small or simple forms, while reactive forms are more scalable and suitable for complex forms. For a comparison of the two approaches, see Introduction to Forms
    II. Quais benefícios temos ao usar um formulário reativo? Os formulários reativos fornecem acesso síncrono ao modelo de dados, imutabilidade com operadores observáveis ​​e rastreamento de alterações por meio de fluxos observáveis.
    III. Quais módulos são necessários para criar os formulários reativos?
    ReactiveFormsModule formGroup no formulário formControlName 
    IV. Quais classes base temos para formulários reativos no Angular?
    V.   Como é feita a configuração de um formulário reativo usando separadamente as classes base? Criar a classe que servira como base ng g class clientes/shared/cliente
    VI.Como se dá o fluxo de informações entre o formulário reativo e o componente em Angular?é o @Input() e @Output(), que provem a entrada e saída de dados respectivamente.' 
    VII. Como é feita a captura dos dados de um formulário reativo e apresentado na tela?@Input() e @Output()
    VIII. Explique  para  o  que  serve  a  validação  de  um  formulário  e  como  isto  pode  ser  apresentado para o usuário?FormGroup e FormControl

    