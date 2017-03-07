import * as moment from 'moment';

export interface IProduct {
  // Properties
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: Date;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;

  // Methods
  calculateDiscount(percent: number): number;
}

export class Product implements IProduct {
  public releaseDate: Date;

  constructor(
    public productId: number,
    public productName: string,
    public productCode: string,
    releaseDate: string,
    public description: string,
    public price: number,
    public starRating: number,
    public imageUrl: string,
  ) {
    this.releaseDate = moment(releaseDate, 'MMM DD, YYYY').toDate();
  }

  get formattedReleaseDate(): string {
    return moment(this.releaseDate).format('MMM DD, YYYY');
  }

  calculateDiscount(percent: number): number {
    return this.price - (this.price * percent / 100);
  }
}
