
## Descrição
Projeto back-end para Crud de Usuários e Filmes e autenticação JWT.

<p>Técnologias utilizadas:</p>
<ul>
<li>TypeScript</li>
<li>NestJS</li>
<li>TypeOrm</li>
<li>Docker</li>
<li>Postgres</li>
<li>Redis</li>
<li>Swagger</li>
<li>JWT</li>
<li>BCrypt</li>
</ul>

## Configuração
```bash
# Desenvolvimento
# Necessário
Antes de fazer a configuração e iniciação do projeto, crie um novo arquivo
com base na .env.example chamada .env com as devidas variaveis de ambiente.

# Opcional
Temos o docker-compose.yml que pode ser configurado opcionalmente com as variaveis 
de ambiente de banco de dados que preferir, configurar também o script que faz a criação
do banco de dados (create-db.sql) caso o docker-compose.yml for modificado.
```

## Instalação
```bash
# Dependências do NPM
$ npm install

# Docker
$ docker-compose up
```

## Inicie o app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
