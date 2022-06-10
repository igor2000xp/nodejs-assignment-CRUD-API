import * as commandList from '../fs/index.js';
import * as os from 'os';

export const selectConsole = async (commandLine) => {
  const a = commandLine.trim().split(' ');
  const commandName = a[0];
  switch (commandName) {
    case 'ls':
      console.log(await commandList.list(process.cwd()));
      break;
    case 'os':
    commandList.osCommands(a[1]);
    break;

    default:
      console.log('No command');

  }

}
