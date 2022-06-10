import * as readline from 'readline';
import * as os from 'os';
import { parseName } from './helpers/parserName.js';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
let userName = parseName(process.argv.slice(3));


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Welcome to the File Manager, ${userName}!`, (answer) => {
  // TODO: Log the answer in a database
  rl.setPrompt(`You are currently in path_to_working_directory ${answer}`);
  rl.prompt();
  // console.log(`Thank you for your valuable feedback: ${answer}`);

  // rl.close();
});
rl.on('line', (line) => {
  if (line.trim() === '.exit') {
    rl.close();
  } else {
    console.log(`Received: ${line}`);
  }

});
rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}!`);
})
