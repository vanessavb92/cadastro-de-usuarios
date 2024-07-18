# Projeto de Cadastro de Usuários

Este projeto é uma aplicação de cadastro de usuários construída com React e Vite. A aplicação permite que os usuários registrem nome, idade e email, salvem esses dados em um banco de dados, e também excluam registros.
![Descrição da Imagem](./src/assets/cadastro.png)

## Tecnologias Utilizadas

- React
- JavaScript
- Vite
- Axios
- Prisma
- MongoDB

## Funcionalidades

- Cadastro de usuários com nome, idade e email
- Listagem de usuários cadastrados
- Exclusão de usuários
- Persistência de dados com Prisma e MongoDB

## Instalação

### Pré-requisitos

- Node.js
- npm ou yarn

### Passo a Passo

1. Clone o repositório do frontend:
    ```bash
    git clone https://github.com/<seu-usuario-github>/<frontend-repo>.git
    ```
   
2. Navegue até o diretório do projeto:
    ```bash
    cd <frontend-repo>
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

### Backend

O backend deste projeto está configurado com Prisma e MongoDB. Siga os passos abaixo para configurar o backend:

1. Clone o repositório do backend:
    ```bash
    git clone https://github.com/<seu-usuario-github>/<backend-repo>.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd <backend-repo>
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure o Prisma e o banco de dados:
    - Crie um arquivo `.env` na raiz do projeto com a configuração do banco de dados MongoDB:
    ```
    DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority"
    ```

5. Execute as migrações do Prisma:
    ```bash
    npx prisma migrate dev
    ```

6. Inicie o servidor backend:
    ```bash
    npm run dev
    ```

## Deploy

O deploy do frontend é realizado no GitHub Pages. Para fazer o deploy, execute:

```bash
npm run deploy
