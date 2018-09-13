import DataModel from './data-model';
import { IMoney } from './money';

export default class Search {
  public searchTerm: string = '';
  public originalList: DataModel[];
  public filteredList: DataModel[] = [];
  public filteredProperties: Array<keyof DataModel>;

  constructor(list: DataModel[]) {
    this.originalList = list;
    this.filteredProperties = ['field1'];
  }

  public setSearchTerm(term: string) {
    this.searchTerm = term;
  }

  public getFilteredList(): DataModel[] {
    return this.filteredList;
  }

  public run(): void {
    this.filteredList = this.originalList.filter((dataItem: DataModel) => {
      const foundMatches = this.filteredProperties.filter(property => {
        const value: string | IMoney | undefined = dataItem[property];
        if (typeof value === 'string' && value.includes(this.searchTerm)) {
          return true;
        }
        if ((value as IMoney) instanceof Object && (value as IMoney).amount === Number(this.searchTerm)) {
          return true;
        }
        return false;
      });
      return foundMatches.length > 0;
    });
  }
}
