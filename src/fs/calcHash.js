import { createReadStream } from 'fs';

export const calculateHash = async (pathToFile) => {
  const { createHash } = await import('crypto');
  const input = createReadStream(pathToFile);

  let result;
  try {
    input.on('readable', () => {
      const data = input.read();
      const hash = createHash('sha256');
      if (data) {
        hash.update(data);
      } else {
        input.close();
        result = `${hash.digest('hex')}`;
        console.log(result);
      }
    });

  } catch (err) {
    console.log(err);
  }
};
