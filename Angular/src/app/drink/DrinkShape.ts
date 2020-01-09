import { DrinkModel } from './DrinkModel';

const NO_TITLE = 'No Title';

export class DrinkShape {
  public id!: number;
  public  libelle!: string;
  public  description!: string;
  public  recipe!: string[];
  public  bar!: string;
  public  price!: number;
  public  img!: string;

  constructor(data: DrinkModel) {
    this.id=data.id;
    this.libelle=data.libelle;
    this.description=data.description;
    this.recipe=data.recipe;
    this.bar=data.bar;
    this.price=data.price;
    this.img=data.img;
  }

  public static NEW(data: DrinkModel): DrinkShape {
    return new DrinkShape(data);
  }

  public static NEW_BUNCH(data: DrinkModel[]): DrinkShape[] {
    return data.map(DrinkShape.NEW);
  }

}
