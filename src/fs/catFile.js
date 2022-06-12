import * as fs from 'fs';
import * as process from "process";

const ERROR_FS = 'Operation failed';

export const catFile = async (fileName) => {
  return new Promise((res, rej) => {

      const myReadStream = fs.createReadStream(fileName);

      res(myReadStream.pipe(process.stdout));

      myReadStream.on('error', (err) => {
        console.log(`${ERROR_FS} -- ${err}`);
        rej(new Error(`${ERROR_FS} -- ${err}`));
      });

      myReadStream.on('end', () => {
        console.log(' ');
      });
  })
};
