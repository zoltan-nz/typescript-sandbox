import isInValidBirthdayFormat from './birthday-validator';

test('isValid', () => {
  expect(isInValidBirthdayFormat('1990-01-01')).toBeTruthy();
  expect(isInValidBirthdayFormat('')).toBeFalsy();
  expect(isInValidBirthdayFormat('01-01-1990')).toBeFalsy();
  expect(isInValidBirthdayFormat('1990-13-42')).toBeFalsy();
  // @ts-ignore
  expect(isInValidBirthdayFormat(1234)).toBeFalsy();
});
