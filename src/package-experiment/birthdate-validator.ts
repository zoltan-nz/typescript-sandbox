import moment from 'moment';

export default function isValidBirthday(value: string) {
  return moment(value, 'YYYY-MM-DD', true).isValid();
}
