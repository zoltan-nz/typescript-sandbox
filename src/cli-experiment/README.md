# Experiment #2 - Testing Node.js CLI tool

Popular packages:

- Inquirer: [npm](https://www.npmjs.com/package/inquirer) | [github](https://github.com/SBoudrias/Inquirer.js)
- Oclif: [npm](https://www.npmjs.com/package/oclif) | [github](https://github.com/oclif/oclif) | [web](https://oclif.io/)

## Playing with the native built in `readline`

Update: Don't waste your time for native `readline`, use `inquirer`! ;)

Task:

- Show an instruction about requesting name and age. `Please fill in the following form.`
- Show prompt and request a name. `Name? >`
- Wait for the prompt and ask age. `Age? >`
- Write back the given data using a terminal table format, like

| name | age |
| ---- | --- |
| Joe  | 25  |

### Implementation

Instead of using the built in `readline`, there is a great wrapper: `inquirer`.

#### Writing test, mocking with `jest`

- We have to mock `inquirer` and `inquirer.prompt`.

```
import inquirer from 'inquirer';
jest.mock('inquirer')

test('some test', () => {
  inquirer.prompt = jest.fn().mockResolvedValue({ questionName: 'answer' });

  const result = await myAsyncMethod();
  expect(result).toEqual('answer');
}
```

#### Using `inquirer`

- Setup `Question[]` array:

```
const questions: Question[] = [{ message: 'The question', name: 'questionName' }]
```

- Prompt

```
const answers: Answers = await prompt(questions);
```

That's it.

## Using `oclif`

- `oclif` tutorial: <https://oclif.io/docs/introduction.html>
