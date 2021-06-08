# API-SOLID
Criação de uma API publica de envio de emails usando os princípios do SOLID e TypeScript

# Principios SOLID utilizados nesse projeto
1. Single reponsibilty principle ( Princípio da responsabilidade única )

    A classe CreateUserUseCase tem uma única responsabilidade que é a criação dos usuários.

2. Liskov substitution principle ( Princípio de substituição Liskov )

    A partir do momento que estamos recebendo o nosso `userRepository` e o tipo dele é uma interface `IUsersRepository` que é onde guardamos os métodos do repositório

3. Dependency inversion principle ( Princípio da inversão da dependência ) 

    Não dependemos de nenhuma infraestrutura e sim de outra classe.

![logo](https://user-images.githubusercontent.com/56320849/121269157-b195d100-c895-11eb-9cbb-eacf7a152af4.png)
<em>Logo criado em: https://hatchful.shopify.com/pt-BR/</em>

## Rodando servidor
O primeiro passo para executar o servidor é verificar se você possui o NodeJS instalado na sua máquina, caso contrário, baixe <a href="https://nodejs.org/en/download/">aqui</a>

Após a instalação, <a href="https://github.com/barretot/API-SOLID">clone</a> este projeto em um local de sua preferência e com seu gerenciador de pacotes instale as dependências do projeto.

### Instalando dependências:

#### Yarn
```
$ yarn 
```

#### NPM

```
$ npm install
```

#### Criando variáveis de ambiente
Crie um arquivo na raiz do seu projeto com o nome de **`.env`** e escreva as suas credenciais para envio de e-mail, por padrão o projeto usa o mailtrap.
```
MAIL_HOST=seuHost
MAIL_PORT=suaPorta
MAIL_USER=seuUser
MAIL_PASS=seuPass
```
### Iniciando servidor
Execute o servidor com os seguintes comandos:
#### Yarn
```
$ yarn start
```

#### NPM

```
$ npm run start
```

## Project information

#### Gerenciador de pacotes

 * <a href="https://classic.yarnpkg.com/lang/en/">Yarn</a>  

#### Dependencies

* <a href="https://www.npmjs.com/package/uuidv4">uuidv4</a>
* <a href="https://www.npmjs.com/package/express">Express</a>  
* <a href="https://www.npmjs.com/package/dotenv">Dotenv</a> 
* <a href="https://www.npmjs.com/package/nodemailer">NodeMailer</a> 
* * <a href="https://www.npmjs.com/package/@types/nodemailer">Types NodeMailer</a> 


#### Dev Dependencies
* <a href="https://www.npmjs.com/package/@types/express">Types Express</a>
* <a href="https://www.npmjs.com/package/ts-node-dev">Ts Node dev</a>
* <a href="https://www.npmjs.com/package/typescript">TypeScript</a>




