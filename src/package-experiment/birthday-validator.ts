import moment from 'moment';

export default function isInValidBirthdayFormat(value: string) {
  return moment(value, 'YYYY-MM-DD', true).isValid();
}
