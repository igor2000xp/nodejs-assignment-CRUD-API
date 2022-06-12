import * as fs from 'fs/promises';
// import { fileURLToPath } from 'url';
// import * as path from 'path';
import { constants } from 'fs';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const ERROR_FS = 'FS operation failed';
// const subFolder = 'files';
// const sourceFileName = 'wrongFilename.txt';
// const destinationFileName = 'properFilename.md';
// const fullSourceFileName = path.resolve(__dirname, subFolder, sourceFileName);
// const fullDestinationFileName = path.resolve(__dirname, subFolder, destinationFileName);


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
