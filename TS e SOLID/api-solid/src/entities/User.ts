import { uuid } from 'uuidv4';

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    // Destino, Origem
    Object.assign(this, props);

    // Se não passar id para um user, retorna um id para ele.
    if (!id) {
      this.id = uuid();
    }
  }
}
