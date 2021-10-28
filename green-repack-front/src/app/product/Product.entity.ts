import { ProductShape }  from './ProductShape';

export class Product {
  public constructor(public readonly _id : number,
    public readonly libelle : string,
    public readonly description : string,
    public readonly price : number,
    public readonly img : string,
) {}

  public static NEW(data: ProductShape) : Product {
    return new Product(data._id,
    data.libelle,
    data.description,
    data.price,
    data.img,
    );
  }
  public static NEW_BUNCH(data: ProductShape[]): Product[] {
    return data.map(Product.NEW);
  }
}
