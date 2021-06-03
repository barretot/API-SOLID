class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number,
  ) {}

  public priceDiscount(): number {
    let percentage: number = this.discount / 100;
    let formulaDiscount: number = this.price * percentage;

    let atualPrice: number = this.price - formulaDiscount;

    return Math.abs(atualPrice);
  }

  public resume(): string {
    return `Produto: ${this.name} 
     Preço: ${this.price}R$
     Desconto: ${this.discount}% Off
     Total: ${this.priceDiscount()}R$`;
  }
}

const productOne = new Product('Televisão Smart', 20, 10);
console.log(productOne.resume());
