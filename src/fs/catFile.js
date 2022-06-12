import * as fs from 'fs/promises';

const ERROR_FS = 'FS operation failed';

export const catFile = async (fileName) => {

  try {
    const readFile = await fs.readFile(fileName, 'utf-8');
    console.log(readFile);

  } catch (err) {
    // throw new Error(ERROR_FS);
    console.log(`${err} + ${ERROR_FS}`);
  }
};
