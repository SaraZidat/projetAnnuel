import { AdminShape } from './AdminShape';

export class Admin {
  public constructor(
    public readonly _id: number,
    public readonly email: string,
    public readonly password: string,
    public readonly createDate: string,
    public readonly deleteDate: Date,
    public readonly token: string

  ) {}

  public static NEW(data: AdminShape): Admin {
    return new Admin(data._id,data.email,data.password,data.createDate,data.deleteDate,data.token);
  }

  public static NEW_BUNCH(data: AdminShape[]): Admin[] {
    return data.map(Admin.NEW);
  }
}
