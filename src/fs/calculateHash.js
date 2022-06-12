import { createReadStream } from 'fs';
const { createHash } = await import('crypto');

export const calculateHash = (pathToFile) => {
  return new Promise((res, rej) => {
    const input = createReadStream(pathToFile);

    input.on('readable', () => {
      const data = input.read();
      const hash = createHash('sha256');

      if (data) {
        hash.update(data);
      } else {
        input.close();
        res(hash.digest('hex').toString());
      }
    })
  }).catch((err) => console.log(err));


}
