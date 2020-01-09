import { BarModel } from './bar-add/BarModel';

const NO_TITLE = 'No Title';

export class BarShape {
  public id!: number;
  public  name!: string;
  public  password!: string;
  public  menu!: string[];
  public  webSite!: string;
  public  createDate!: Date;
  public  stock!: string[];
  public  email!: string;

  constructor(data: BarModel) {
    this.id=data.id;
    this.name=data.name;
    this.password=data.password;
    this.menu=data.menu;
    this.webSite=data.webSite;
    this.createDate=data.createDate;
    this.stock=data.stock;
    this.email=data.email;
  }

  public static NEW(data: BarModel): BarShape {
    return new BarShape(data);
  }

  public static NEW_BUNCH(data: BarModel[]): BarShape[] {
    return data.map(BarShape.NEW);
  }

}
