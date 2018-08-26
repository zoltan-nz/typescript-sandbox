import inquirer from 'inquirer';
import CliWithInquirer from './cli-with-inquirer';
jest.mock('inquirer');

describe('Cli With Inquirer', () => {
  test('it exists', () => {
    expect.assertions(2);
    const cliWithInquirer = new CliWithInquirer();

    expect(cliWithInquirer.name).toEqual('');
    expect(cliWithInquirer.age).toEqual(0);
  });

  test('#promptQuestions', async () => {
    expect.assertions(2);
    // inquirer.prompt = jest.fn().mockResolvedValue({ name: "John", age: "30" });

    const cliWithInquirer = new CliWithInquirer();
    await cliWithInquirer.promptQuestions();

    expect(cliWithInquirer.name).toEqual('John');
    expect(cliWithInquirer.age).toEqual(30);
  });
});
