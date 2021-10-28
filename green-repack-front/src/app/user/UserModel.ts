export interface UserModel {
  _id?: number;
  pseudo?: string;
  password?: string;
  previousOrders?: any[string];
  createDate: string;
  deleteDate?: Date;
  age?: string;
  email?: string;
  favoriteProduct?: number;
  token?: string;
}
