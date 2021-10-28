import { UserModel } from './UserModel';

export class UserShape {
  public _id!: number;
  public email!: string;
  public password!: string;
  public previousOrders!: string[];
  public createDate!: string;
  public deleteDate!: Date;
  public age!: string;
  public pseudo!: string;
  public favoriteProduct!: number;
  public token!: string;

  public constructor(data: UserModel) {
    this._id = data._id;
    this.pseudo = data.pseudo;
    this.password = data.password;
    this.previousOrders = data.previousOrders;
    this.createDate = data.createDate;
    this.deleteDate = data.deleteDate;
    this.email = data.email;
    this.age = data.age;
    this.favoriteProduct = data.favoriteProduct;
    this.token = data.token;
  }

  public static NEW(data: UserModel): UserShape {
    return new UserShape(data);
  }

  public static NEW_BUNCH(data: UserModel[]): UserShape[] {
    return data.map(UserShape.NEW);
  }
}
