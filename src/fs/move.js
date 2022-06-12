import * as fs from 'fs/promises';
import { constants } from 'fs';
import * as path from 'path';

const ERROR_FS = 'FS operation failed';

export const move = async (sourcePath, destPath) => {
  try {

    const destinationPathFiles = path.resolve(destPath, sourcePath);
    await fs.copyFile(
      sourcePath,
      destinationPathFiles,
      constants.COPYFILE_EXCL
    );
    await fs.rm(sourcePath);

  } catch (err) {
    console.log(`${err} + ${ERROR_FS}`);
  }
};
