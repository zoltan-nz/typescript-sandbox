import AgeCalculator from './age-calculator';

describe('Age Calculator', () => {
  test('age', () => {
    const now = new Date('2018-01-01').getTime();
    Date.now = jest.spyOn(Date, 'now').mockImplementation(() => now);

    const ageCalculator = new AgeCalculator('1992-10-11');
    expect(ageCalculator.age).toEqual(25);
  });

  test('invalid birthday string', () => {
    expect(() => new AgeCalculator('11-10-1992')).toThrowError(Error);
  });
});
