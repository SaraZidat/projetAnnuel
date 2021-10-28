import { MarchandShape } from './MarchandShape';
export class Marchand {
  public constructor(
    public readonly _id: number,
    public readonly  name: string,
    public readonly  password: string,
    public readonly  menu: string[],
    public readonly  webSite: string,
    public readonly  createDate: string,
    public readonly  stock: string[],
    public readonly  email: string,
    public readonly isValidate: boolean,
    public readonly address: string) { }

  public static NEW(data: MarchandShape): Marchand {
    return new Marchand(
      data._id,
      data.name,
      data.password,
      data.createDate,
      data.email,
      );
  }

  public static NEW_BUNCH(data: MarchandShape[]): Marchand[] {
    return data.map(Marchand.NEW);
  }

  public nameStartsWith(proposal: string): boolean {
    console.log(proposal);
    const normalizedName = (this.name || '').toLowerCase();
    console.log(normalizedName);

    const normalizedTest = (proposal || '').toLowerCase();
    return normalizedName.includes(normalizedTest);
  }
}
