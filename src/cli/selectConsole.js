import * as commandList from '../fs/index.js';
import * as os from 'os';

export const selectConsole = async (commandLine) => {
  const a = commandLine.trim().split(' ');
  const commandName = a[0];
  switch (commandName) {
    case 'up':
      commandList.myChdir('..');
      break;
    case 'cd':
      commandList.myChdir(a[1]);
      break;
    case 'ls':
      console.log(await commandList.list(process.cwd()));
      break;

    case 'cat':
      await commandList.catFile(a[1]);
      break;
    case 'add':
      await commandList.add(a[1]);
      break;
    case 'rn':
      await commandList.rename(a[1], a[2]);
      break;
    case 'cp':
      await commandList.copy(a[1], a[2]);
      break;
    case 'mv':
      await commandList.move(a[1], a[2]);
      break;
    case 'rm':
      await commandList.remove(a[1]);
      break;

    case 'os':
      commandList.osCommands(a[1]);
      break;

    case 'hash':
      await console.log(await commandList.calculateHash(a[1]));
      break;

    case 'compress':
      await commandList.compress(a[1], a[2]);
      break;
    case  'decompress':
      await commandList.decompress(a[1], a[2]);
      break;

    default:
      console.log('Invalid input');
      break;
  }
}
