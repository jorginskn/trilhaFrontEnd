# Explique o que é o FlexBox?
    é um modelo de layout da Web
    O layout flexível permite que os elementos responsivos dentro de um contêiner sejam organizados automaticamente, dependendo do tamanho da tela.

## b) Cite e explique cada propriedade do eixo principal.

    Flex-Direction: Essa propriedade define em qual direção o container deseja empilhar os itens flexíveis.(Row/Row-reverse) Column/Column-Reverse)

    Flex-wrap:Especifica se os itens flex devem ser encapsulados ou não.

    Wrap: O valor wrap especifica que os itens flexíveis serão encapsulados se necessário

    Now-Rap: O valor nowrap especifica que os itens flexíveis não serão encapsulados (este é o padrão):

    Wrap-Reverse:O valor wrap-reverse especifica que os itens flexíveis serão encapsulados, se necessário, na ordem inversa.

    cross-start | cross-end: Linhas flex são preenchidas com ítens e adicionadas ao container, começando pelo lado cross start do flex container em direção ao lado cross end.

## c) Cite e explique cada propriedade do eixo transversal.

    O eixo transversal é perpendicular ao eixo principal, logo, se a propriedade flex-direction estiver definida nas linhas, como row ou row-reverse, o eixo transversal estará na direção das colunas, como column ou column-reverse.






##  Explique o que é um Flex Container?
    A área de um documento que faz uso do flexbox é chamada de contêiner flex.A área de um documento que faz uso do flexbox é chamada de contêiner flex. Para criar essa estrutura, define-se o valor da propriedade display do elemento representado pelo contêiner como flex ou inline-flex.

## e) Explique o que é um Flex Item?
    O Flexbox é um módulo completo e não uma única propriedade; algumas delas devem ser declaradas no container (o elemento-pai, que chamamos de flex container), enquanto outras devem ser declaradas nos elementos-filhos (os flex itens).

## f) Como funciona o flex-wrap?
    O valor wrap especifica que os itens flexíveis serão encapsulados se necessário.enquanto o now-rap que é o padrão não permitira o encapsulamento / quebra de linha

## g) Como é feita a Expansão, Encolhimento e Tamanho dos elementos flex?
    Para ter mais controle sobre os elementos flex é possível alterá-los diretamente utilizando as três propriedades abaixo:

    flex-grow
    flex-shrink 
    flex-basis 

     propriedade flex-basis define o tamanho inicial dos elementos, em unidades de pixel, antes que o espaço remanescente seja redistribuído.

     Com a propriedade flex-grow definida como um inteiro positivo, os elementos flex podem crescer ao longo do eixo principal, a partir do valor mínimo estabelecido no flex-basis. Isto fará com que o elemento se estique e ocupe qualquer espaço disponível nesse eixo ou uma proporção dele, caso outros elementos-irmãos também possam crescer.Atribuir o valor 1 à propriedade flex-grow fará com que o espaço disponível no contêiner flex seja igualmente distribuído entre todos os elementos do exemplo acima

     Enquanto a propriedade flex-grow permite aumentar a largura dos elementos dentro do contêiner para completar o espaço disponível no eixo principal, a propriedade flex-shrink faz o oposto, controlando a redução dos mesmos. Caso não haja espaço suficiente para acomodar todos os elementos e o valor da propriedade flex-shrink seja um inteiro positivo, a largura pode ser reduzida a um valor menor do que a definida na propriedade flex-basis. Assim como na propriedade flex-grow, diferentes valores podem ser atribuídos a um elemento de modo que ele encolha mais do que os outros - um elemento cuja propriedade flex-shrink receba um valor inteiro maior irá diminuir mais do que os seus irmão que tenham valores menores.

## h) Como é feito o Alinhamento, Justificação e Distribuição de espaço livre entre os elementos?

    Propriedade align-items:ropriedade align-items irá alinhar os elementos no eixo transversal.
    O valor inicial desta propriedade é stretch e é por essa razão que, por padrão, os elementos flex se estendem até a maior altura. De fato, eles se esticam para preencher o contêiner flex - o item mais alto define a altura deste.Pode-se definir a propriedade align-items como flex-start, de modo que os elementos fiquem alinhados com topo do contêiner, flex-end para alinhá-los a partir da base ou center, para que o alinhamento seja centralizado.

    Propriedade justify-content:A propriedade justify-content  é empregada para alinhar os elementos ao longo do eixo principal, cuja direção (row ou column) é definida a partir da propriedade flex-direction. O valor inicial é flex-start, que alinha os elementos rente à borda esquerda do contêiner, mas também pode ser definido como flex-end, que resulta em um alinhamento oposto, rente à borda direita do contêiner, ou center, para alinhá-los ao centro.
    O valor space-between pode ser usado pode ser usado para ocupar todo o espaço livre após a disposição dos itens e dividí-lo igualmente entre os itens, para que haja a mesma quantidade de espaço entre cada elemento. Para gerar uma quantidade igual de espaço à direita e à esquerda, usa-se o valor space-around.

## a) Explique o que é o Grid Layout.
    Os grids consiste em um elemento técnico que é constituído por linhas verticais e horizontais ou quadrados e retângulos. Eles são utilizados para proporcionar uma estrutura de construção de peças de design para web ou impressão.

## b) Cite e dê exemplos das propriedades do Grid Container?
    Display:  Cria-se um grid container com as declarações CSS display: grid ou display:

    Grid-template-rows: Cria 4 linhas no grid, sendo a primeira com 50px, segunda 100px, terceira 50px e quarta 150px. Caso o grid necessite de mais linhas, elas terão o tamanho de acordo com o conteúdo.

    grid-template-areas
    Define áreas específicas no grid. O ponto (.) pode ser utilizado para criar áreas vazias.

    grid-template: Atalho para definir o grid-template-columns, grid-template-rows e grid-template-areas.

    gap
    Define o gap (gutter) entre os elementos do grid.

    grid-auto-columns
    Define o tamanho das colunas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma coluna que não foi definida).

    grid-auto-rows
    Define o tamanho das linhas do grid implícito (gerado automaticamente, quando algum elemento é posicionado em uma linha que não foi definida).

## c) Cite e dê exemplos das propriedades do Grid Item?

    grid-column
    Define quais colunas serão ocupadas pelo grid item. É possível definir uma linha de início e final, assim o item irá ocupar múltiplas colunas.

    grid-row 
    Define quais linhas serão ocupadas pelo grid item.
    Atenção aqui, pois esse linha é referente a row. Porém as chamadas grid lines que por tradução também significam linhas do grid, são diferentes. Uma row (linha), possui sempre 2 grid lines (linhas do grid), uma no início dela e uma no final dela.

    grid-area
    Define a área do item do grid. É um atalho para grid-row-start, grid-column-start, grid-row-end, grid-column-end.
    O z-index pode ser utilizado para manipular a posição no eixo Z do item. Ou seja, se um item for posicionado em cima de outro, o z-index controla qual vêm na frente.

    justify-self:
    Justifica o item do grid em relação ao eixo x (horizontal). Justifica em relação a célula.

     align-self
     Justifica o item do grid em relação ao eixo y (vertical). Alinha em relação a célula.

## d) O que é a unidade fr?
    A unidade fr representa uma fração do espaço disponível no container do grid

## e) O que é a notação repeat?
    A notação Repeat tem como parâmetro um track listing, sendo assim você pode usá-lo para criar um padrão de repetição de tracks. Neste exemplo meu grid terá 10 tracks, uma trilha de 1fr seguida por uma trilha de 2fr

## f) O que são as linhas do Grid?
    um dos conjuntos define colunas e outro linhas. Dentro de um  grid, respeitando-se a configuração criada pelas suas linhas, pode-se inserir elementos da marcação
## g) O que é uma célula no Grid?
    Uma célula de grid é a menor unidade em um grid. Conceitualmente é como se fosse uma célula de tabela. Como vimos em nossos exemplos anteriores, uma vez que o grid é definido como o pai os itens filhos serão organizados cada um em uma célula do grid definido
## h) O que são áreas do Grid?
    Itens podem se espalhar por uma ou mais células ambas entre linhas ou colunas, e isto cria uma área de grid. Áreas de grid devem ser retangulares