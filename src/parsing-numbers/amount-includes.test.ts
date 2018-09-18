import isAmountIncludes from './amount-includes';

describe('Amount Includes', () => {
  test('isAmountIncludes', () => {
    expect(isAmountIncludes(1234.56, '$1,234.56')).toBeTruthy();
    expect(isAmountIncludes(1234.56, '1234.56')).toBeTruthy();
    expect(isAmountIncludes(1234.56, '1,234.56')).toBeTruthy();
    expect(isAmountIncludes(1234.56, '1,2')).toBeTruthy();
    expect(isAmountIncludes(1234678.56, '4,6')).toBeTruthy();
    expect(isAmountIncludes(1234.56, '.56')).toBeTruthy();
    expect(isAmountIncludes(1234.5, '$1,234.50')).toBeTruthy();
    expect(isAmountIncludes(1234.56, '123')).toBeTruthy();

    expect(isAmountIncludes(1234.56, '45')).toBeFalsy();
    expect(isAmountIncludes(1234.56, '$34')).toBeFalsy();
  });
});
