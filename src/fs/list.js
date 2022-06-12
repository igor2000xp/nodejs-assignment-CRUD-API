import * as fs from 'fs/promises';
const ERROR_FS = 'Operation failed';

export const list = async (path) => {
  try {
    return await fs.readdir(path);

  } catch (err) {
    throw new Error(ERROR_FS);
  }
};

