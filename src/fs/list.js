import * as fs from 'fs/promises';
// import * as os from "os";
// import { fileURLToPath } from "url";
// import * as path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const PATH_FILES = 'files';
const ERROR_FS = 'FS operation failed';

export const list = async (path) => {
  try {
    // console.log(filesArr);
    // const dirList = await fs.readdir(path);
    // return dirList.join(os.EOL);
    return await fs.readdir(path);

  } catch (err) {
    throw new Error(ERROR_FS);
  }
};

