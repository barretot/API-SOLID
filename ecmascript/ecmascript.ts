// // parametro padrão
// function contagemRegressiva(inicio: number = 3): void {
//   console.log(inicio);
//   while (inicio > 0) {
//     inicio--;
//     console.log(inicio);
//   }

//   console.log('fim !');
// }

// contagemRegressiva();
// contagemRegressiva(50);

// // Rest e spread
// const numbers = [1, 2, 10, 99, -5];
// console.log(Math.max(...numbers));

// const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
// const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA];

// console.log(turmaB);

// // Rest
// function retornaArray(...rest: number[]): number[] {
//   return rest;
// }

// const numeros: number[] = retornaArray(1, 2, 3, 4, 5, 1231, 34);
// console.log(numeros);
