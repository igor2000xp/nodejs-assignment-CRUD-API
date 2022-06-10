import * as os from 'os';
import * as helpers from "../helpers/index.js";

export const createUserInvite = async (argsFromStart) => {
  try {
    let userName = helpers.parseName(argsFromStart);
    process.chdir(os.homedir());
    console.log(`Welcome to the File Manager, ${userName}!
You are currently in ${process.cwd()}`);

    return userName;

  } catch (err) {
    console.log('Operation failed');
  }
};
