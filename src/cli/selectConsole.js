import * as commandList from '../fs/index.js';
import * as os from 'os';

export const selectConsole = async (commandLine) => {
  const a = commandLine.trim().split(' ');
  const commandName = a[0];
  switch (commandName) {
    case 'ls':
      return await commandList.list(process.cwd());
    case 'os':
      commandList.osCommands(a[1]);
      break;
    case 'hash':
      console.log(commandList.calculateHash(a[1]));
      break;

    default:
      console.log('No command');

  }

  // function promptPrint() {
  //   console.log(`You are currently in ${process.cwd() + os.EOL}`);
  // }

}
