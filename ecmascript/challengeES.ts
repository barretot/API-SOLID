// 1
const dobro = (valor: number): number => valor * 2;

console.log(dobro(10));

// 2
const dizerOla = function (nome: string = 'Pessoa'): void {
  console.log(`Olá ${nome}`);
};

dizerOla();
dizerOla('Ruan');

// 3
let nums: number[] = [-3, 33, 39, 5];
console.log(Math.min(...nums));

// 4
const array: number[] = [55, 20, ...nums];

console.log(array);

// 5
const notas: number[] = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

// 6
type Cientista = {
  primeiroNome: string;
  experiencia: number;
};

const cientista: Cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;

console.log(primeiroNome, experiencia);
