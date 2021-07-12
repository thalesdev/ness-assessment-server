# Ness Assessment Server
---

O servidor para solução do desafio da ness.com.br

## Iniciando

### Pré-Requisitos

Para rodar você precisa ter instalado em seu computador:

 [`yarn`](https://github.com/yarnpkg/yarn) - Gerenciador de pacotes para o nodejs terceiro.

  ou

 [`npm`](https://www.npmjs.com/) - Gerenciador de pacotes do nodejs padrão,

### Iniciando o Servidor
Deve configurar o `.env` com as configurações do seu servidor postgres.

----

Depois de instalado o gerenciador de pacote basta seguir os seguintes comandos abaixo:
#### yarn
----
Instalando as dependencias.
```
yarn
```
Rodando as migrações.
```
yarn typeorm migration:run
```
e por fim rodando o servidor.
```
yarn dev
```
#### npm
----
Instalando as dependencias.
```
npm install
```
Rodando as migrações.
```
npm run typeorm migration:run
```
Rodando o servidor.
```
npm run dev:server
```
### Distribuição
Para gerar o script de distribuição basta executar o seguinte comando:

#### yarn
---
```
yarn build
```

#### npm
---
```
npm run build
```

os arquivos de distribuição serão gerados na pasta `dist` na raiz do
Repositório.

## Dependências

* [**Express**](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node
* [**Typescript**](https://github.com/Microsoft/TypeScript) - TypeScript is a language for application-scale JavaScript.
* [**Prettier**](https://github.com/prettier/prettier) - Opinionated Code Formatter
* [**ESLint**](https://github.com/eslint/eslint) - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [**Ts Node Server**](https://github.com/whitecolor/ts-node-dev) - Tweaked version of node-dev that uses ts-node under the hood.
* [**Typeorm**](https://github.com/typeorm/typeorm) - Amazing ORM for TypeScript and JavaScript (ES7, ES6, ES5). Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, WebSQL databases. Works in NodeJS, Browser, Ionic, Cordova and Electron platforms.

## Autores

* **Thales de Oliveira** - *Colaborador* - [thalesdev](https://gitlab.com/thalesdev)

## Licença
Este projeto é licenciado pela licensa do MIT - veja em [LICENSE.md](LICENSE.md) para mais detalhes.
