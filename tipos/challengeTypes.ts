type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => number;
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number): number {
    return (this.saldo += valor);
  },
};

let correntista: Correntista = {
  nome: 'Ruan Barreto',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432'],
};

let correntista2: Correntista = {
  nome: 'João Barreto',
  contaBancaria: contaBancaria,
  contatos: ['34567890'],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);

correntista2.contaBancaria.depositar(8000);
console.log(correntista2);
