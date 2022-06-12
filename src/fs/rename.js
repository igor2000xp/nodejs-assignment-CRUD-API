import * as fs from 'fs/promises';

import { constants } from 'fs';

const ERROR_FS = 'Operation failed';

export const rename = async (nameToRename, newName) => {

  try {
    console.log(nameToRename);
    console.log(newName);
    await fs.copyFile(nameToRename, newName, constants.COPYFILE_EXCL);
    await fs.rm(nameToRename);
  } catch (err) {
    throw new Error(ERROR_FS);
  }
};
