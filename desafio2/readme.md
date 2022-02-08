# DESAFIO 2 

### I.  Cite  as  principais  tags  HTML  e  para  que  servem  respectivamente.  Dê  exemplos  de  situações reais de onde são usadas:


Existem as tags de cabeçalho que vai do :
 
As principais diferençãs entre o h1 até o h6 é a importancia, h1 é mais destacado  até 0 h6 vai diminuindo a importancia: 
- h1 
- h2
- h3
- h4
- h5
- h6

Tag de parágrafo com essa tag você consegue iniciar um novo parágrafo em seu texto
- p 

italico muda a fonte do texto 
- i

negrito, strong,  destaca a palavra ou frase que estiver em volta a essa tag

-b  

Listas não ordenadas envolve uma bolinha de marcação antes do item da lista.

-ul 

Ordenadas envolve numeros letras ou  outros identificadores citando a ordem dos itens da lista 

- ol

Itens da lista
- li 


Linka algo 

- a 

Pula uma linha 

- br 

Cria uma divisão que separa e identifica uma parte do documento

- div

### II. Explique com suas palavras a importância do HTML Semântico

    Ajuda os sistemas de busca como o google a entenderem os principais assuntos de cada página e assim retornarem resultados de busca mais adequados e precisos.


 ### IV.   O que é acessibilidade em um site?
    Acessibilidade Digital é a eliminação de barreiras na Web. O conceito pressupõe que os sites e portais sejam projetados de modo que todas as pessoas possam perceber, entender, navegar e interagir de maneira efetiva com as páginas
### V. Quais são as boas práticas devemos adotar ao construir uma página web para que ela seja acessível?

   - O site deve ser responsivo, ou seja, abrir em celulares, tablets, desktop

   - Você deve executar testes de navegação com o CSS Desabilitado

  -  Evitar páginas com excesso de movimentos e efeitos

   - Observar se os links funcionam sem o Javascript habilitado
    
   - Evitar tom de cores próximos e transparência

    -Tornar possível navegar no site utilizando as teclas tab, shift-tab e return

    -Destacar links visitados com cores diferentes se possível

    -Nunca sublinhar textos que não possuam link

   - Evitar a utilização de popup
    Trabalhe na hierarquia de informação afim de tornar o conteúdo do site claro

   - Testar o site nos principais navegadores (Internet Explorer, Safari e Chrome)

    -Evitar utilizar CAPTCHA com apenas imagens: Utilizar som, perguntas simples etc

    -Evitar menus com submenus. Caso isso seja necessário, que possa ser acessível utilizando o teclado
    Declaração de Doctype

    -Se criar uma lista, inserir marcadores

## b) A respeito de CSS, responda:

### I. Explique com suas palavras a importância do CSS (mínimo 5 linhas e no máximo 10)


    É responsavel por formar os estilos das paginas como formatação de cores e formas.Basicamente, redefine a apresentação do conteúdo e indiretamente trabalha para um melhor desempenho das páginas web.Um site de conteúdo estruturado depende muito do CSS e, assim, seu papel tem grande parte no desenvolvimento, não na concepção. 

### II.  Explique a diferença entre class & id.

    A classe pode ser reutilizada mas o ID e único (exclusivo)você não terá esse mesmo poder e é usada quando queremos algo específico em um estilo

### III.  Como podemos fazer a inserção do CSS na página?


      A primeira forma de aplicar CSS a uma página é utilizando o atributo style em elementos do HTML
      A segunda forma é utilizar a tag style dentro do head da página HTML;
      E a última - porém a mais utilizada - maneira de aplicar CSS é criar um ou mais arquivos com extensão .css e incluí-los na estrutura head do HTML.



### IV. Explique o que é encadeamento e agrupamento de seletores


   AGRUPAMENTO DE  SELETORES:
   
      Quando você deseja fazer com que vários elementos tenham as mesmas características, você irá agrupá-los em um mesmo seletor. A separação dos elementos é feita por vírgulas.
      seletor {
      propriedade: valor;
   }

   
   SELETORES ENCADEADOS

      O CSS trabalha com especificidade. Suponhamos que você queira que o EM tenha cor de letra vermelha, você irá fazer assim:
      em {
      color: red;
      }

### V.  O que é Box-Model e dê 3 exemplos de aplicação.

        se refere a como os elementos HTML são modelados nos mecanismos do navegador e como as dimensões desses elementos HTML são derivadas das propriedades CSS.

        EXEMPLOS:


        CONTROLE DO TAMANHO DA MARGIN 

        TAMANHO DO PADDING 

        TAMANHO DA BORDA

### VI. Explique a diferença entre Margin e Padding.

    Margin é o espaçamento externo ao conteudo ou seja fora . Já o Padding  é espaçamento interno da caixa.

### VII. Explique o que é Position e dê um exemplo de cada.

    CSS position é uma propriedade utilizada para determinar o posicionamento dos elementos na página. Ela é usada em conjunto com propriedades auxiliares.

    EXEMPLOS

    Static: É o padrão para todos os elementos , seguem o fluxo da pagina  as propriedades top, bottom , right , left não funcionam

    Fixed: Faz o elemento  selecionado permanenecer fixo na  página indenpendente do scroll

    Sticky: É semelhante ao fixed  em alguns aspectos , quando fazemos a rolagem do scroll do mouse o sticky após chegar ao elemento Sticky ele acompanha a página como um adesivo

    Relative:Ele está poscionado em sua posição normal dando a opção de você usar as propriedades para alterar o local 

    Absolute: ele é posicionado em relação ao elemento mais proximo dele que possui um posicionamento relative 
        





