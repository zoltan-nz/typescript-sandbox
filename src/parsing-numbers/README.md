# Parsing Numbers

- [Playing with Currying](https://codesandbox.io/s/132lo41267)

```javascript
const numbers = [1, 2, 3];
console.log(numbers.map(n => n * 2));

const multiply = n => n * 2;
console.log(numbers.map(multiply));

const multiplyWith = multiplier => n => n * multiplier;
console.log(numbers.map(multiplyWith(5)));

const data = [
  {
    id: '1',
    field1: 'hello',
    field2: 'world',
    field3: 'some text',
  },
  {
    id: '2',
    field1: 'dummy hello',
    field2: 'string',
  },
  {
    id: '3',
    field1: 'nothing',
    field2: 'here text',
  },
];

let result;

// 1. Simple filter function
result = data.filter(item => item.id === '1');
console.log('1 >', result);

// 2. Search in fields
result = data.filter(item => item['field1'].includes('hello'));
console.log('2 >', result);

// 3. Search with searchTerm
let searchTerm = 'text';
result = data.filter(item => item['field2'].includes(searchTerm));
console.log('3 >', result);

// 4. Iterate object fields
const SEARCH_PROPERTIES = ['field1', 'field2', 'field3'];
result = data.filter(item => {
  let foundMatch = false;
  SEARCH_PROPERTIES.forEach(property => {
    const value = item[property];
    if (value && value.includes(searchTerm)) {
      foundMatch = true;
    }
  });
  return foundMatch;
});
console.log('4 >', result);

// 5. Iterate object fields using filter
result = data.filter(item => {
  const foundMatch = SEARCH_PROPERTIES.filter(property => {
    const value = item[property];
    return value && value.includes(searchTerm);
  });
  // console.log(foundMatch);
  return foundMatch.length > 0;
});
// console.log('5 >', result);

// 6. Clean it up
// const filterPropertiesIn = function(item) {
//   return function(property) {
//     const value = item[property];
//     return value && value.includes(searchTerm);
//   }
// };

// Still not pure function because of searchTerm
const filterPropertiesIn = item => property => {
  const value = item[property];
  return value && value.includes(searchTerm);
};

result = data.filter(item => {
  const foundMatch = SEARCH_PROPERTIES.filter(filterPropertiesIn(item));
  return foundMatch.length > 0;
});
// console.log('6 >', result);

// 7.

const hasFoundMatchInWith = (dataRecord, term) => property => {
  const value = dataRecord[property];
  return value && value.includes(term);
};

const inPropertiesWithTerm = (searchProperties, actualSearchTerm) => item => {
  const foundMatch = searchProperties.filter(
    hasFoundMatchInWith(item, actualSearchTerm),
  );
  return foundMatch.length > 0;
};

result = data.filter(inPropertiesWithTerm(['field1'], 'hello'));
console.log('7 >', result);

```
