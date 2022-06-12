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
    case 'compress':
      await commandList.compress(a[1], a[2]);
      break;
    case  'decompress':
      await commandList.decompress(a[1], a[2]);
      break;
    case 'cd':
      commandList.myChdir(a[1]);
      break;
    case 'up':
      commandList.myChdir('..');
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
    case 'cat':
      await commandList.catFile(a[1]);
      break;

    default:
      console.log('No command');

  }

  // function promptPrint() {
  //   console.log(`You are currently in ${process.cwd() + os.EOL}`);
  // }

}
