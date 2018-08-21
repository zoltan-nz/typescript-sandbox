import moment, { Moment } from 'moment';
import isInValidBirthdayFormat from './birthday-validator';

export default class AgeCalculator {
  private birthdayInMoment: Moment;

  constructor(public birthday: string) {
    if (!isInValidBirthdayFormat(birthday)) {
      throw new Error('Birthdate should be in ISO format: YYYY-MM-DD');
    }

    this.birthdayInMoment = moment(birthday, 'YYYY-MM-DD');
  }

  get age() {
    return moment().diff(this.birthdayInMoment, 'years');
  }
}
