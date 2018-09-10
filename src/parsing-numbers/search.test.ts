import data from './data';
import Search from './search';

describe('Search', () => {
  test('_filterList', () => {
    const search = new Search(data);

    search.setSearchTerm('world');
    search.filteredProperties = ['field2', 'field1', 'amount1', 'amount2', 'field3'];
    search.run();
    expect(search.getFilteredList()).toEqual([data[1]]);
  });
});
