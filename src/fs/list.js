import * as fs from 'fs/promises';
// import { fileURLToPath } from "url";
// import * as path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const PATH_FILES = 'files';
const ERROR_FS = 'FS operation failed';

export const list = async (path) => {
  try {
    const filesArr = await fs.readdir(path);
    console.log(filesArr);

  } catch (err) {
    throw new Error(ERROR_FS);
  }
};

