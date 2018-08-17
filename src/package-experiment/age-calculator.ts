import { AssertionError } from 'assert';
import moment, { Moment } from 'moment';
import isValidFormat from './birthdate-validator';

export default class AgeCalculator {
  private birthdayInMoment: Moment;

  constructor(public birthdate: string) {
    if (!isValidFormat(birthdate)) {
      throw new AssertionError({ message: 'Birthdate should be in ISO format: YYYY-MM-DD' });
    }

    this.birthdayInMoment = moment(birthdate, 'YYYY-MM-DD');
  }

  get age() {
    return moment().diff(this.birthdayInMoment, 'years');
  }
}
