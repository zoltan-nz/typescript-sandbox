import data from './data';
import Search from './search';

const search = new Search(data);
search.filteredProperties = ['field1', 'field2', 'field3', 'amount1', 'amount2'];
search.setSearchTerm('hello');
search.run();
const result = search.getFilteredList();

console.log(result);
