import { stdin, stdout } from "process";
import { createInterface, ReadLine } from "readline";

type Question = (query: string) => string;

const promisifyQuestion = (rl: ReadLine, question: string): Promise<string> => {
  const callback = (answer: string) => Promise.resolve(answer);
  return new Promise(() => {
    rl.question(question, callback);
  });
};

class App {
  private static initializeConsole(): ReadLine {
    return createInterface({
      input: stdin,
      output: stdout,
      prompt: ">"
    });
  }
  public rl: ReadLine;

  constructor() {
    this.rl = App.initializeConsole();
    this.rl.pause();
  }

  public async run() {
    const name = await promisifyQuestion(this.rl, "What's your name? >");
    console.log("name: ", name);
    this.rl.close();
    console.log("exit");
  }
}

const app = new App();
app.run().then();
