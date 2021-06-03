let nome = 'João';
console.log(nome);

// nome = 28

// numbers
let idade = 27;
// idade = 'Ruan'
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// tipos explicitos
let minhaIdade: any;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 27';
console.log(typeof minhaIdade);

// array
let hobbies: any[] = ['Cozinhar', 'Praticar esportes', 100];
console.log(hobbies[2]);
console.log(typeof hobbies);

// tupla
let endereco: [string, number, number] = ['Av Principal', 99, 123];
console.log(endereco);

// enums
enum Cor {
  Cinza, // 0
  Verde, // 1
  Azul, // 2
  Laranja, // 3
  Amarelo, // 4
  Vermelho,
}

let cor1: Cor = Cor.Cinza;

enum UserResponse {
  No = 0,
  BadRequest = 400,
}

function respond(recipient: string, message: UserResponse): void {
  console.log(`${recipient} - ${message}`);
}

respond('Princess Caroline', UserResponse.BadRequest);

// funções
function retornaNome(nome1: string): string {
  return nome1;
}

function digaOi(): void {
  return console.log('oi');
}

function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

digaOi();
console.log(retornaNome('Ruan'));

// tipo função
let calculo: (numA: number, numB: number) => number;
calculo = multiplicar;
console.log(calculo(5, 6));

// objetos
let users: { name: string; age: number } = {
  name: 'João',
  age: 20,
};

console.log(users);

users = {
  name: 'Ruan',
  age: 20,
};

console.log(users);

// desafio

type Funcionario = {
  supervisores: string[];
  baterPonto: (hora: number) => string;
};

function baterPontoFuncionario(horario: number): string {
  if (horario <= 8) {
    return 'Normal';
  } else {
    return 'Fora do horário';
  }
}

let funcionario1: Funcionario = {
  supervisores: ['Ruan', 'Miguel', 'Leo'],
  baterPonto: baterPontoFuncionario,
};

let funcionario2: Funcionario = {
  supervisores: ['Leo'],
  baterPonto: baterPontoFuncionario,
};

console.log(funcionario1.supervisores);
console.log(funcionario1.baterPonto(8));
console.log(funcionario1.baterPonto(10));

console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(4));
console.log(funcionario2.baterPonto(10));

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);
nota = '7';
console.log(`Minha nota é ${nota}`);

// Checando tipos
let valor = 30;

if (typeof valor === 'number') {
  console.log('é number');
} else {
  console.log(typeof valor);
}

// Never
function falha(msg: string): never {
  throw new Error(msg);
}

// const produto = {
//   nome: ' ',
//   preco: -1,
//   validar() {
//     if (!this.nome || this.nome.trim().length === 0) {
//       falha('Precisa de nome pai');
//     }
//     if (this.preco < 0) {
//       falha('Preço invalido');
//     }
//   },
// };

// produto.validar();

let altura = 12;
// altura = null;

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: 'Ruan',
  tel: '123123',
  tel2: null,
};

console.log(contato1.nome);
console.log(contato1.tel);
console.log(contato1.tel2);
