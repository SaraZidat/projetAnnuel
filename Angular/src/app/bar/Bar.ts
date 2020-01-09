import { BarShape } from './BarShape';
export class Bar {
  public constructor(
    public readonly id: number,
    public readonly  name: string,
    public readonly  paswword: string,
    public readonly  menu: string[],
    public readonly  webSite: string,
    public readonly  createDate: Date,
    public readonly  stock: string[],
    public readonly  email: string) { }

  public static NEW(data: BarShape): Bar {
    return new Bar(
      data.id,
      data.name,
      data.password,
      data.menu,
      data.webSite,
      data.createDate,
      data.stock,
      data.email
      );
  }

  public static NEW_BUNCH(data: BarShape[]): Bar[] {
    return data.map(Bar.NEW);
  }

  public nameStartsWith(proposal: string): boolean {
    console.log(proposal);
    const normalizedName = (this.name || '').toLowerCase();
    console.log(normalizedName);

    const normalizedTest = (proposal || '').toLowerCase();
    return normalizedName.startsWith(normalizedTest);
  }
}
