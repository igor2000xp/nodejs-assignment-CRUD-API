import * as fs from 'fs';
import * as zlib from 'zlib';

export const compress = async (file, newFileName) => {
  const myZip = zlib.createBrotliCompress();
  const inputStream = fs.createReadStream(file);
  const outputStream = fs.createWriteStream(newFileName);

  inputStream.pipe(myZip).pipe(outputStream);
};


