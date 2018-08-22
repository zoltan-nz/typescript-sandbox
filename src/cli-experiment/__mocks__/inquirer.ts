export const prompt = jest.fn().mockResolvedValue({
  age: '30',
  name: 'John',
});

const inquirer = {
  prompt,
};

export default inquirer;
