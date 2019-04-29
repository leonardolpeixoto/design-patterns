## Aplicabilidade

Utilize Chain of Responsibility quando:

- mais de um objeto pode tratar uma solicitação e o objeto que o tratará não é conhecido a priori. O objeto que trata a solicitação deve ser escolhido automaticamente
- você quer emitir uma solicitação para um dentre vários objetos, sem especificar explicitamente o receptor
- o conjunto de objetos que pode tratar uma solicitação deveria ser especificado dinamicamente

## Participantes
- **Handler**
  - define uma interface para tratar solicitações
  - (opcional) implementa o link ao sucessor
- **ConcreteHandler**
  - trata de solicitações pelas quais é responsável
  - pode acessar seu sucessor
  - se o ConcreteHandler pode tratar a solicitação, ele assim o faz; caso contrário, ele repassa a solicitação para o seu sucessor
- **Cliente**
  - inicia a solicitação para um objeto ConcreteHandler da cadeia

## Colaborações
Quando um cliente emite uma solicitação, a solicitação se propaga ao longo da cadeia até que um objeto **ConcreteHandler** assume a responsabilidade de tratá-la.

## Consequências
A **Chain of Resposibility** tem os seguintes benefícios e deficiências:
- *Acoplamento reduzido*. O padrão libera um objeto de ter que conhecer qual o outro objeto que trata de uma solicitação. Um objeto tem que saber somente que uma solicitação será tratada "apropriadamente". Tanto o receptor como o remetente não têm conhecimento explícito m do outro, e um objeto que está na cadeia não necessita conhecer a estrutura da mesma. 

Como resultado, **Chain of Responsibility** pode simplificar as interconexões de objetos. Ao invés de os objetos materem referência única para o seu sucessor.

- *Flexibilidade adicional na atribuição de responsabilidades a objetos*. O **Chain of Responsibility** dá uma flexibilidade adicional na atribuição de responsabilidades entre objetos. É possível acrescentar ou mudar responsabilidades para o tratamento de uma solicitação pelo acréscimo ou mudança da cadeia em tempo de execução. Você pode combinar ito com subclasses para especializar estaticamente os *handlers*.

- A *recepção não é garantida*. Uma vez que uma solicitação não tem um receptor explícito, não há garantia de que ela será tratada - a solicitação pode sair pelo final da cadeia sem ter sido tratada. Um solicitação pode não ser tratada quando a cadeia não está configurada apropriadamente.