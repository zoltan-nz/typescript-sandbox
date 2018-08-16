import { Answers, prompt, Question } from 'inquirer';

export default class CliWithInquirer {
  public name: string;
  public age: number;

  constructor() {
    this.name = '';
    this.age = 0;
  }

  public async promptQuestions() {
    const questions: Question[] = [
      {
        message: 'What is your name?',
        name: 'name',
      },
      {
        message: 'What is your age?',
        name: 'age',
      },
    ];

    const answers: Answers = await prompt(questions);

    this.name = answers.name;
    this.age = parseInt(answers.age, 10);
  }
}
