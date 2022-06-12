import { createReadStream } from 'fs';

const { createHash } = await import('crypto');
const ERROR_FS = 'Operation failed';

export const calculateHash = (pathToFile) => {
  return new Promise((res, rej) => {
    const hash = createHash('sha256');
    const input = createReadStream(pathToFile);

    input.on('error', (err) =>
      rej(`${ERROR_FS} -- ${err}`));

    input.on('readable', () => {
      const data = input.read();

      if (data) {
        hash.update(data);
      } else {
        input.close();
        res(hash.digest('hex').toString());
      }
    })
  });
}
