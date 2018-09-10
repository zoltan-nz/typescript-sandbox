import DataModel from './data-model';
import { IMoney } from './money';

const amountSample1: IMoney = {
  amount: 10.0,
  code: '',
  symbol: '',
};

const amountSample2: IMoney = {
  amount: 1230056000,
  code: '',
  symbol: '',
};

const data: DataModel[] = [
  {
    amount1: amountSample1,
    amount2: amountSample2,
    field1: 'something here',
    field2: 'example text',
    field3: 'not important',
  },
  {
    amount1: amountSample1,
    amount2: amountSample2,
    field1: 'hello world',
    field2: 'internet explorer',
    field3: 'jo estet kivanok',
  },
  {
    amount1: amountSample1,
    amount2: amountSample2,
    field1: 'this is a sample text',
    field2: 'some not repeated sample',
    field3: 'brilliant',
  },
  {
    amount1: {},
    amount2: {},
    field1: 'not so interesting',
    field2: 'again',
    field3: 'still need some dummy text',
  },
];

export default data;
