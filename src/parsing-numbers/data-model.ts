import { IMoney } from './money';

export interface IDataModel {
  field1?: string;
  field2?: string;
  field3?: string;
  amount1?: IMoney;
  amount2?: IMoney;
}

export default class DataModel {
  public field1?: string;
  public field2?: string;
  public field3?: string;
  public amount1?: IMoney;
  public amount2?: IMoney;

  constructor(data: IDataModel) {
    this.field1 = data.field1;
    this.field2 = data.field2;
    this.field3 = data.field3;
    this.amount1 = data.amount1;
    this.amount2 = data.amount2;
  }
}
