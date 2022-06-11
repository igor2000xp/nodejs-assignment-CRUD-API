import * as fs from 'fs';
import * as zlib from 'zlib';

export const decompress = async (compressedFile, filesDecompress) => {
  const myUnzip = zlib.createBrotliDecompress();
  const myInputStream = fs.createReadStream(compressedFile);
  const myOutputStream = fs.createWriteStream(filesDecompress);

  myInputStream.pipe(myUnzip).pipe(myOutputStream);
};
