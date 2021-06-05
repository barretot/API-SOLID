class Data {
  // Público por padrão
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1980) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data(); // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);

///////////////////////////

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1980,
  ) {}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta(); // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

// Modificadores de acesso

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200,
  ) {}

  protected alterarValocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarValocidade(5);
  }

  public frear(): number {
    return this.alterarValocidade(-5);
  }
}

const carro1 = new Carro('Ford', 'Ka', 185);

console.log(carro1.acelerar());
console.log(carro1.frear());

// Herança

class Ferrari extends Carro {
  public acelerar(): number {
    return this.alterarValocidade(20);
  }

  public frear(): number {
    return this.alterarValocidade(-15);
  }
}

const f40 = new Ferrari('Ferrari', 'F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);

console.log(f40.acelerar());
console.log(f40.frear());

// Get e set

class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);
