export class Products {
    public constructor(
      public ProductId: number,
      public ProductTitle: string,
      public ProductPrice: number,
      public ProductMFG: string,
      public ProductMFGData: Date,
      public ProductColor: string,
      public ProductAvailable: boolean) {}
  }
