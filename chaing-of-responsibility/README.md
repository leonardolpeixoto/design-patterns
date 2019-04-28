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