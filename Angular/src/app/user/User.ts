import { UserShape } from '../user/user/UserShape';

export class User {
  public constructor(
    public readonly id: number,
    public readonly email: string,
    public readonly password: string,
    public readonly lastName: string,
    public readonly age: number,
    public readonly pseudo: string,
    public readonly firstName: string,
    public readonly favoriteDrink: number,
    public readonly favoriteBar: number,
    public readonly token: string

  ) {}

  public static NEW(data: UserShape): User {
    return new User(data.id,data.email,data.password,data.lastName,data.age,data.pseudo,data.firstName,data.favoriteDrink,data.favoriteBar,data.token);
  }

  public static NEW_BUNCH(data: UserShape[]): User[] {
    return data.map(User.NEW);
  }
}
