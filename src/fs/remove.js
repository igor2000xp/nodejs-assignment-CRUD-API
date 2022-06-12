import * as fs from 'fs/promises';
const ERROR_MASSAGE = 'FS operation failed';

export const remove = async (pathFile) => {

  try {
    await fs.rm(pathFile);

  } catch (err) {
    throw new Error(ERROR_MASSAGE);
  }
};
