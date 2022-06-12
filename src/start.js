import * as readline from 'readline';
import * as os from 'os';
import * as cli from './cli/index.js';

const userName = await cli.createUserInvite(process.argv.slice(3));
const ERROR_FS = 'Operation failed';

const main = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', async (line) => {
    rl.setPrompt(`You are currently in ${process.cwd() + os.EOL}`);
    // rl.prompt();
    if (line.trim() === '.exit') {
      rl.close();
    } else {
      await cli.selectConsole(line).catch((err) => console.log('ERR start' + err));
      rl.prompt();
    }
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}!`);
  });

  rl.on('error', () => {
    console.log(ERROR_FS);
  })
}

await main();
