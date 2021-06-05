class Car {
  constructor(
    public name: string,
    public brand: string,
    public color: string,
    public year: number,
    public used: boolean,
  ) {}

  public usedCar(): string {
    if (this.used === true) {
      return 'Este carro é usado';
    } else {
      return 'Carro novo';
    }
  }

  public payIpva(): string {
    if (this.year < 2005) {
      return 'Sem Ipva';
    } else {
      return 'Paga IPVA';
    }
  }

  public resumeCar(): string {
    return `Nome: ${this.name}
     Marca: ${this.brand}
     Cor: ${this.color}
     Ano: ${this.year} - ${this.payIpva()}
     Usado: ${this.usedCar()}
     `;
  }
}

const chevette = new Car('Chevette', 'Chevrolet', 'Amarelo', 2010, true);
console.log(chevette.resumeCar());
