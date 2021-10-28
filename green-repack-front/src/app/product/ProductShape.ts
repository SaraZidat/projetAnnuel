import { ProductModel } from './ProductModel';

const NO_TITLE = 'No Title';

export class ProductShape {
  public _id!: number;
  public  libelle!: string;
  public  description!: string;
  public  price!: number;
  public  img!: string;


  constructor(data: ProductModel) {
    this._id=data._id;
    this.libelle=data.libelle;
    this.description=data.description;
    this.price=data.price;
    this.img=data.img;

  }

  public static NEW(data: ProductModel): ProductShape {
    return new ProductShape(data);
  }

  public static NEW_BUNCH(data: ProductModel[]): ProductShape[] {
    return data.map(ProductShape.NEW);
  }

}
