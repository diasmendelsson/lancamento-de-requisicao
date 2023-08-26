Sequência para criar o projeto 

Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outras funcionalidade
### npm install --save express


Rodar o projeto 
### node app.js


Instalar a dependência de forma global, "-g" significa globalmente. Executar o comando através do prompt de comando, executar somente se nunca instalou a depêndencia na maquina, após instalar, reiniciar o pc. 
## nom install -g nodemon

instalar a dependendica como desenvolvedor para reiniciar o servidor sempre que houver a alteração no código fonte. 
### npm install --save-dev nodemon


Comando SQL para criar a base de dados
### CREATE DATABASE nome-da-base-de-dados CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o driver do banco de dados
### npm install mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para banco de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Manipular variáveis de ambiente
### npm install dotenv --save


Criar a Models usuarios 
### npx sequelize-cli model:generate --name Requisicao --attributes veiculo:string,funcionario:string,data:date,tipo:enum,valor:float


Executar as migrations 
### npx sequelize-cli db:migrate