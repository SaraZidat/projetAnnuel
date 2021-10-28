import { UserShape } from './UserShape';

export class User {
  public constructor(
    public readonly _id: number,
    public readonly email: string,
    public readonly password: string,
    public readonly previousOrders: string[],
    public readonly age: string,
    public readonly pseudo: string,
    public readonly createDate: string,
    public readonly deleteDate: Date,
    public readonly favoriteProduct: number,
    public readonly token: string

  ) {}

  public static NEW(data: UserShape): User {
    return new User(data._id,data.email,data.password,data.previousOrders,data.age,data.pseudo,data.createDate,data.deleteDate,data.favoriteDrink,data.favoriteBar,data.token);
  }

  public static NEW_BUNCH(data: UserShape[]): User[] {
    return data.map(User.NEW);
  }
}
