import { AdminModel } from './AdminModel';

export class AdminShape {
  public _id!: number;
  public email!: string;
  public password!: string;
  public createDate!: string;
  public deleteDate!: Date;
  public token!: string;

  public constructor(data: AdminModel) {
    this._id = data._id;
    this.password = data.password;
    this.createDate = data.createDate;
    this.deleteDate = data.deleteDate;
    this.email = data.email;
    this.token = data.token;
  }

  public static NEW(data: AdminModel): AdminShape {
    return new AdminShape(data);
  }

  public static NEW_BUNCH(data: AdminModel[]): AdminShape[] {
    return data.map(AdminShape.NEW);
  }
}
