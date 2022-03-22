### a) A respeito de services, responda:
    I. Qual o propósito de services no angular?É usado para compartilhar/ organizar estados de objetos e as regras de negocio da aplicação.
    II. Porque no Angular há uma distinção entre components e services?
    Para aumentar a modularidade e a reutilização. Ao separar do componente você torna suas classes mais enxutas e eficientes.
    III. Como as services são disponibilizadas em um component? Fazendo a instalação através do angular CLI  ng generate service <name> *******************
    VI. Que tipo de tarefas uma service pode ter?  
    buscar dados do servidor, validar a entrada do usuário ou fazer logon diretamente no console
    V. Verdadeiro ou Falso. Uma service precisa obrigatoriamente estar em pelo menos um módulo? Justifique sua escolha.Verdadeiro , um módulo precisa prover ou fornecer um serviço para que ele possa ser ultilizado pelo seus components.Para isso ocorre uma alteração na declaração do módulo App.
    VI. Verdadeiro ou Falso. Uma service é do tipo de padrão de projeto Singleton?Justique sua escolha.Verdadeiro, pois assim que um service é declarado ele pode ser usado por qualquer component , por padrão é singleton.
    VII. Escreva uma service que deverá ter os seguintes métodos e em cada um deverá escrever uma implementação básica (pode ser usado Arrays)
    - getUsers( ): <any> { }: Observable<any> {
    return this.http.get<Tutorial[]>(baseUrl);
     }
    getUserById(Id: any): Observable<any>{
    return this.http.get(`${baseUrl}/${Id}`)
     }
    - setUsers(any): Observable<any> {
    return this.http.get<Tutorial>(`${baseUrl}?title=${title}`);
  }

    delete(user: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${user}`);
###    b- A respeito de services, responda:
    I. O que é Injeção de Dependências?
    
    *****Injeção de Dependência é um é um padrão de projeto usado para evitar o alto nível de acoplamento de código dentro de uma aplicação
    
    II. Verdadeiro  ou  Falso.  Injeção  de  Dependências  pode  ser  apenas  de  services? Justifique sua escolha. 

    ****  Falso  a injeção de dependecias pode ser usada em diversas ocasiões e linguagems de programação POO.

    III. Verdadeiro ou Falso. O Angular quando vai instanciar uma classe de componente verifica se as injeções de dependência já não estão sendo usadas?Justifique sua escolha. 
    
    ***Verdadeiro Quando o Angular descobre que um componente depende de um serviço, ele primeiro verifica se o injetor possui instâncias existentes desse serviço.
### c- HTTP Client 
    I. O que é o protocolo HTTP?
    
     *****É um protocolo de trasnferência que  possibilita as pessoas que inserem a url do seu site na web possam ver os conteúdos e dados que nele existem Hypertext Transfer Protocol.

     II. Cite outros tipos de comunicação com o backend e faça um breve resumo de cada. 
     
    **HTTPS** Versão do http segura com a ultilização de criptografia 
   ****FTP- Filer Trasnfer Protocol  ou protocolo de transferencia de arquivos, ultlizado para transferencias de arquivo com o TCP. Permite configurar usuário e senha 
   *** TFTP- Trivial filer  transfer protocol parecido  com o FTP , porém simples.   Ultiliza UDP para realizar as transferencias , não ultiliza autentificação de login e senha 

     III. Que recursos o HTTP nos fornece?

    *****arquivos HTML e outros conteúdos, ou realiza outras funções de interesse do cliente, retorna uma mensagem resposta para o cliente. A resposta contém informações de estado completas sobre a requisição e pode também conter o conteúdo solicitado no corpo de sua mensagem.É a base de qualquer troca de dados na Web.

     VI. Para usar o HttpClient no Angular, como devemos fazer sua importação e injeção? 
     
     ***Importando  o HtppClienteModule

V.  Verdadeiro ou Falso. O HttpClient pode ser usado com RxJS? Justifique sua escolha. 

     ***Verdadeiro  o HttPCliente faz uso de observáveis para todas as transações.

VI. Cite os principais métodos HTTP e faça um breve resumo de cada

     GET - O método GET pega  a representação de um recurso ou dadao especifico  específico. Requisições utilizando o método GET devem retornar apenas dados.
     POST- O método POST  serve para  CRIAÇÃO  é ultilizado para submeter uma entidade a um recurso especificorequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor. 
     PUT- O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição  "Alterar " ou "Atualizar"    
     DELETE-O método DELETE remove um recurso específico.
     PATCH-O método PATCH é utilizado para aplicar modificações parciais em um recurso.

     VII. Verdadeiro  ou  Falso.  Com  o  protocolo  HTTP  é  possível  dizer/setar  o  tipo  de resposta do servidor backend?

     **** Justifique sua escolha.Verdadeiro existem o tipo safe idempotent ou cacheable

VIII. Cite os tipos de retorno que uma requisição HTTP pode ter? Faça um breve resumo de cada .
     

IX. Cite os principais status de uma requisição HTTP e faça um breve resumo de cada.  ******* Respostas de sucesso ( 200 - 299 ) Estas requisição foi bem sucedida. O significado do sucesso varia de acordo com o método HTTP:, Respostas de informação ( 100 - 199 ) essa resposta provisória indica que tudo ocorreu bem até agora e que o cliente deve continuar com a requisição ou ignorar se já concluiu o que gostaria., Redirecionamentos ( 300 - 399 ) A requisição tem mais de uma resposta possível. User-agent ou o user deve escolher uma delas. Não há maneira padrão para escolher uma das respostas. Erros do cliente ( 400 - 499 )  Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.Erros do servidor ( 500 - 599 )  servidor encontrou uma situação com a qual não sabe lidar..

     X. Faça um exemplo de chamadas do tipo GET, POST, PUT, DELETE.

    ***GET listarTodosProdutos() {
  this.http.get(`${ this.apiURL }/produtos`)
           .subscribe(resultado => console.log(resultado));
    }

    **** POST this.http.post(`${ this.apiURL }/produtos`, produto)
            .subscribe(
              resultado => {
                console.log(resultado)
              },
    **** PUT this.http.put(`${ this.apiURL }/produtos/1`, produto)
            .subscribe(
              resultado => {
                console.log('Produto alterado com sucesso.')
              },
    ***** Deletethis.http.delete(`${ this.apiURL }/produtos/1`)
            .subscribe(
              resultado => {
                console.log('Produto excluído com sucesso.')

XI. Para que serve o cabeçalho em uma requisição HTTP?

    ****permitem que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP

XII. O que é um Interceptor e quais as suas aplicações? 
     
   **** Um Interceptor em Angular é um pattern simples que nos permite interceptar, tratar e gerenciar requisições http, antes mesmo delas serem enviadas ao servidor.

III. Quais cenários mais comuns podemos usar Interceptors?
     Adicione um token ou algum cabeçalho HTTP personalizado para todas as solicitações HTTP de saída.
     apture as respostas HTTP para fazer alguma formatação personalizada (ou seja, converter CSV para JSON) antes de entregar os dados ao seu serviço/componente.
     Registre todas as atividades HTTP no console.

### d- RxJS
I. O que é o RxJS?

  *****  RxJS é uma biblioteca para compor programas assíncronos e baseados em eventos usando sequências observáveis.
  O RxJS combina com o  padrão Observer  e reativa.

II. Qual a diferença de Promises e Observables?
  
  ****Promise são ansiosas, enquanto Observable são preguiçosos. Promise sempre são assíncronas, enquanto Observable pode ser tanto síncronas quanto assíncronas. Promise sempre retornam o mesmo valor, enquanto Observable pode retornar um fluxo de valores, de nenhum a vários
  
III. O que significa ser baseado em eventos?

  ***Trabalha com mudanças de  estado uma atualização de email ou cadastro,  click e etc.
 

VI. O que é o padrão de projetos Observer?

  **** Este padrão define a dependência um-para-muitos entre  um objeto muda o estado, todos seus dependentes são notificados e atualizados automaticamente

V.  O que é o padrão de projetos Iterator? 

 **** Em programação , um iterador se refere tanto ao objeto que permite ao programador percorrer um container, (uma coleção de elementos) particularmente listas, quanto ao padrão de projetos Iterator, no qual um iterador é usado para percorrer um container e acessar seus elementos.

 VI. O que é programação funcional com coleções? 

 *** coleção de funções que interagem entre si utilizando recursos como: composição funcional, condições e recursão.

 VII. Quais os conceitos básicos do RxJS para eventos assíncronos? Descreva todos e dê um exemplo de como utilizá-lo.

 Observable: Observables são coleções push preguiçosas de vários valores. 
    
import { Observable } from 'rxjs';

  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });
 

  Observer: é uma coleção de callbacks que sabe escutar os valores entregues pelo Observable simplesmente um conjunto de retornos de chamada, um para cada tipo de notificação entregue pelo Observable: next, error, e complete
  const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
  };
 **** Subscription:  é um objeto que representa um recurso descartável, geralmente a execução de um Observável. Uma Assinatura tem um método importante, unsubscribe, que não aceita argumentos e apenas descarta o recurso mantido pela assinatura

  import { interval } from 'rxjs';
 
  const observable1 = interval(400);
  const observable2 = interval(300);
  
  const subscription = observable1.subscribe(x => console.log('first: ' + x));
  const childSubscription = observable2.subscribe(x => console.log('second: ' + x));
  
  subscription.add(childSubscription);
  
  setTimeout(() => {
    // Unsubscribes BOTH subscription and childSubscription
    subscription.unsubscribe();
  }, 10
  *****Operators: Os operadores são as peças essenciais que permitem que código assíncrono complexo seja facilmente composto de maneira declarativa. Os operadores são funções 
  import { of } from 'rxjs';
import { map } from 'rxjs/operators';

  of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));

  Subject: é um tipo especial de Observable que permite que valores sejam multicast para muitos Observadores. Enquanto os Observables simples são unicast (cada Observer inscrito possui uma execução independente do Observable), os Subjects são multicast.import { Subject } from 'rxjs';
 
  const subject = new Subject<number>();
  
  subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`)
  });
  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`)
  });
  
  subject.next(1);
  subject.next(2);

  Schedulers:
  Um agendador controla quando uma assinatura é iniciada e quando as notificações são entregues.  É composto por três componentes.  estrutura de dados.  contexto de execução, relógio (virtual) import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';
 
const observable = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}).pipe(
  observeOn(asyncScheduler)
);
 
console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x)
  },


  VIII. Quais são os operadores de criação? ajax, bindCallback, bindNodeCallback , empty ,from ,fromEvent , fromEventPattern ,generate ,interval ,of ,range,throwError ,timer, iif

  IX. Ainda dentro de operadores de criação, explique melhor e dê um exemplo para os seguintes operadores:

   ***Ajax: Ele cria um observável para uma solicitação Ajax com um objeto de solicitação com url, cabeçalhos, etc. ou uma string para uma URL. const obs$ = ajax(`https://api.github.com/users?per_page=5`).pipe(
  map(userResponse => console.log('users: ', userResponse)),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
  );
  ****FROM: Cria um Observable a partir de um Array, um objeto do tipo array, um Promise, um objeto iterável ou um objeto do tipo Observable.
    import { from } from 'rxjs';

  const array = [10, 20, 30];
  const result = from(array);

  result.subscribe(x => console.log(x));

   fromEvent; Cria um Observable que emite eventos de um tipo específico provenientes de determinado destino de evento.
   const clicks = fromEvent(document, 'click');
  clicks.subscribe(x => console.log(x));
  - generate;Gera uma sequência observável executando um loop controlado por estado produzindo os elementos da sequência, usando o agendador especificado para enviar mensagens de observador.
  import { generate } from 'rxjs';

  const result = generate(0, x => x < 3, x => x + 1, x => x);

  result.subscribe(x => console.log(x));

  // Logs:
  // 0
  // 1
  // 2

  of;Converte os argumentos em uma sequência observável 
  mport { of } from 'rxjs';
 
  of(10, 20, 30)
  .subscribe(
    next => console.log('next:', next),
    err => console.log('error:', err),
    () => console.log('the end'),
  );

  interval; Cria um Observable que emite números sequenciais a cada intervalo de tempo especificado, em um SchedulerLike. 
  const numbers = interval(1000);
 
const takeFourNumbers = numbers.pipe(take(4));
 
 takeFourNumbers.subscribe(x => console.log('Next: ', x));
  throwError; Cria um observável que criará uma instância de erro e a enviará para o consumidor como um erro imediatamente após a assinatura.  
  const errorWithTimestamp$ = throwError(() => {
   const error: any = new Error(`This is error number ${++errorCount}`);
   error.timestamp = Date.now();
   return error;
   });
   timer; Cria um observável que aguardará um período de tempo especificado, ou data exata, antes de emitir o número 0. 
   const source = of(1, 2, 3);

  const result = timer(3000).pipe(
  concatMapTo(source)
  )
  .subscribe(console.log);

X. Quais os operadores de criação de associação? combineLatest, concat , forkJoin , merge, partition , race , zip

XI. Ainda dentro de operadores de criação de associação, explique melhor e dê um exemplo para os seguintes operadores:
- concat; Concatena vários Observables emitindo sequencialmente seus valores, um Observable após o outro.

const timer = interval(1000).pipe(take(4));
const sequence = range(1, 10);
const result = concat(timer, sequence);
result.subscribe(x => console.log(x));
 
  - forkJoin; Aguarde a conclusão dos Observables e, em seguida, combine os últimos valores emitidos; complete imediatamente se um array vazio for passado  import { forkJoin, of, timer } from 'rxjs';
  
  const observable = forkJoin({
    foo: of(1, 2, 3, 4),
    bar: Promise.resolve(8),
    baz: timer(4000),
  });
  observable.subscribe({
  next: value => console.log(value),
  complete: () => console.log('This is how it ends!'),
  });
- merge; Achata vários observáveis ​​juntos, combinando seus valores em um observável import { merge, fromEvent, interval } from 'rxjs';
 
const clicks = fromEvent(document, 'click');
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));
 
XII. Quais os operadores de transformação?

 buffer
bufferCount
bufferTime
bufferToggle
bufferWhen
concatMap
concatMapTo
exhaust
exhaustMap
expand
groupBy
map
mapTo
mergeMap
mergeMapTo
mergeScan
pairwise
partition
pluck
scan
switchScan
switchMap
switchMapTo
window
windowCount
windowTime
windowToggle
windowWhen 

XIII. Ainda dentro de operadores de transformação, explique melhor e dê um exemplo para os seguintes operadores:
- concatMap; Mapeia cada valor para um Observable e, em seguida, nivela todos esses Observables internos usando concatAll. onst result = clicks.pipe(
  concatMap(ev => interval(1000).pipe(take(4)))
);
- map;Como Array.prototype.map() , ele passa cada valor de origem por meio de uma função de transformação para obter os valores de saída correspondentes. onst positions = clicks.pipe(map(ev => ev.clientX));
positions.subscribe(x => console.log(x));
- mapTo; Como map, mas mapeia todos os valores de origem para o mesmo valor de saída todas as vezes. const clicks = fromEvent(document, 'click');
const greetings = clicks.pipe(mapTo('Hi'));
greetings.subscribe(x => console.log(x)); 
- mergeMap;Mapeia cada valor para um Observable e, em seguida, nivela todos esses Observables internos usando mergeAll.onst result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x+i))),
); 
- mergeMapTo;   como mergeMap, mas mapeia cada valor sempre para o mesmo Observable interno. const clicks = fromEvent(document, 'click');
const result = clicks.pipe(mergeMapTo(interval(1000)));
- switchMap; Mapeia cada valor para um Observável e, em seguida, nivela todos esses Observáveis ​​internos.
const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));


- switchMapTo; É como switchMap, mas mapeia cada valor sempre para o mesmo Observable interno.

 const clicks = fromEvent(document, 'click');
const result = clicks.pipe(switchMapTo(interval(1000)));
result.subscribe(x => console.log(x));





 
