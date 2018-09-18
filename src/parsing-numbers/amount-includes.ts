import numeral from 'numeral';

export default function isAmountIncludes(amount: number, text: string) {
  return (
    numeral(amount)
      .format('$0,0.00')
      .includes(text) ||
    numeral(amount)
      .format('0,0.00')
      .includes(text) ||
    numeral(amount)
      .format('00.00')
      .includes(text)
  );
}
