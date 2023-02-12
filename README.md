# Seja bem vindo ao desafio Tencnico MaxMilhas ✈️

## Sobre o projeto
O objetivo deste projeto era desenvolver uma API que expusesse Rotas atraves das quais fosse possivel realizar as operações CRIAÇÃO, REMOÇÃO e LEITURA de CPF's em uma lista negra isto é CPF's bloqueados.
## Arquitetura
### Banco de dados
O banco de dados conta com uma unica entidade chamada **CPF**:
| Nome Da Coluna | Tipo Da Coluna | Descrição                                                                                         |
|----------------|----------------|---------------------------------------------------------------------------------------------------|
| cpf            | INTEGER        | Essa é a chave primaria e também é a coluna que armazena o valor do cpf adicionado na lista negra |
| created_at     | DATE           | Esse valor deverá ser uma data formatada no padrão ISO-8601 |


### API
A API segue uma arquitetura Model-Service-Controller. Essa Arquitetura foi escolhida dado que a complexidade
da regra de negocio era baixa o que motivou a escolha de uma arquitetura mais simples e concisa.

Basea-se na divisão entre 3 camadas principais:
- O **Controller** responsavel por lidar com todo fluxo de entrada e saida dos programas através das rotas expostas na APi e delegar o processamento das informações para o service.
- O **Service** responsavel por tratar de processar a regra de negocio e se conectar com o Model.
- O **Model** responsavel por conectar a regra de negocio ao banco de dados.

## Infraestrutura
### Banco de dados
O banco de dados é o mysql na versão 8, rodado em um container Docker.
### API
A api foi desenvolvida com:
| Nome da Dependencia   | Versão da Dependencia         | Descrição |
|---------------------  |-----------------------        |------------------------------------------------------------------------------------------------------------------------       |
| NodeJs                | 18.14.0                       | Esse foi o runtime escolhido para rodar o projeto desenvolvido                                                                |
| Typescript            | 4.9.5                         | O superset do Javascript foi utilizado nesse projeto para possibilitar a tipagem estatica facilitando conceitos da POO        |
| Express               | 4.18.2                        | O express é a biblioteca utilizada para subir o servidor HTTP e expor as rotas REST                                           |
| Sequilize             | 6.28.0                        | O sequilize foi definido para ser a ORM que possibilita a conexão com o banco de dados MySQL                                  |
| Mysql2                | 3.1.2                         | Utilizado em conjunto com o Sequilize para fornecer a conexão com o banco de dados                                            |
| Cpf-Cnpj-Validator    | 1.0.3                         | Utilizado para simplificar a validação do CPF do usuario a ser adicionado na blacklist                                        |
| Dotenv                | 16.0.3                        | Instalado para realizar a função de ler os arquivos de ambiente e adiciona-los a variavel process.env                         |
| Jest                  | 29.4.2                        | Framework instalado com finalidade de implementar os testes                                                                   |
| Eslint                | 8.33.0                        | Biblioteca utilizada realização de analise estatica do codigo para detecção de problemas.                                     |


### Estrutura de Pastas e Arquivos
- src
  - api:
    - controller: representa a pasta que contém os arquivos responsaveis por representar a camada controller já descrita nesse documento
    - exceptions: contém as exceções que serão lançadas em situações previstas pela regra de negocio
    - interfaces: contém interface que representa o dado que será trafegado através da api
    - middlewares: contém arquivos com funções que serão executadas antes das funções do controller, util nesse contexto para validar o formato do cpf
    - routes: contém a arquivo que configura as rota
    - services: contem arquivos que processarão a regra de negocio
    - index.ts: arquivo que principal inicia o servidor.
  - database: contém arquivos de configuração do sequilize e modelos para conectar backend typescript com o banco de dados
    - migration: contém arquivos de migração usado pelo sequilize
    - models: contém modelo de conexão entre sequilize e codigo typescript
    - config.js: arquivo contém configuração para se conectar com o banco


## Executando o projeto
> Aviso: Para executar esse projeto é obrigatorio que se tenha instalado e acessivel o Docker.

### Passo 1:
Na pasta raiz (pasta que esta no mesmo nivel que README.md e docker-compose.yml)

Execute o docker compose para subir os containers
```
docker-compose up
```

E importante nesse passo esperar que o container do backend esteja completamente 'de pé' essa operação demora alguns minutos, entretanto você verá a mensagem "Server started on port 3333!" Quando a api estiver pronta para receber as requisições

### Passo 2:
Para testar as rotas você deve acessar
```
http://localhost:3333/cpf
```

- A US1 é mapeado para um post para o endpoint passando como corpo da requisição um payload json
{ "cpf": "valor_do_cpf" }
- A US2 é mapeada para um endpoint **GET** cpf/:cpf  sendo assim será necessario executar um GET similar a:
http://localhost:3333/cpf/numero_do_cpf
- A US3 é mapeada para um endpoint **DELETE** cpf/:cpf, sendo será necessario executar um DELETE para um endereço similar a: http://localhost:3333/cpf/numero_do_cpf
- A US4 é mapeada para o endpoint **GET** cpf/ sem o cpf na frente, sendo assim executar um GET para o endereço: http://localhost:3333/cpf/

É importante dizer que todas as rotas estão com documentação feita através do SWAGGER, para acessa-lo basta executar ir ao navegador e acessar a rota: http://localhost:3333/api-docs
a interface deve parecer com:
![swagger](assets/swagger.png)

> Caso  você use Insomnia para executar as requisições poderá importar com o botão abaixo



### Passo 3:
Para executar os testes unitarios, você precisará acessar o container, para isso, execute um:
```
docker exec -it backend sh
```
Agora, dentro do container execute um:
```
npm run test
```
Algo como:
![tests](assets/tests.png)
Também é possivel ver a covertura de codigo, execute um:
```
npm run cov
```
Algo parecido com:
![coverage](assets/cov.png)

## Acessando o frontend
Nos passos anteriores foi instruido que se colocasse pare rodar os containers atraves do docker, sendo assim a aplicação React deverá estar disponivel na porta 3000, sendo assim acesse
> http://localhost:3000/ 

Você deverá encontrar uma interface como:
![site](assets/site.png)




Feito com 💚 Por Jenifer Gonçalves Com:
 <div style="display: inline_block" align="left"><br>
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  
  <img align="center" alt="Jest" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/jest/jest-plain.svg">
  <img align="center" alt="Git" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg">
  
  <img align="center" alt="typescript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
 <img align="center" alt="mysql" height="45" width="55" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" />
 <img align="center" alt="nodejs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
 <img align="center" alt="express" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
 <img align="center" alt="docker" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
 <img align="center" alt="sequelize" height="70" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg" />
             
</div>