import { MarchandModel } from './marchand-add/MarchandModel';

const NO_TITLE = 'No Title';

export class MarchandShape {
  public _id!: number;
  public  name!: string;
  public  password!: string;
  public  createDate!: string;
  public  email!: string;

  constructor(data: MarchandModel) {
    this._id=data._id;
    this.name=data.name;
    this.password=data.password;
    this.createDate=data.createDate;
    this.email=data.email;

  }

  public static NEW(data: MarchandModel): MarchandShape {
    return new MarchandShape(data);
  }

  public static NEW_BUNCH(data: MarchandModel[]): MarchandShape[] {
    return data.map(MarchandShape.NEW);
  }

}
