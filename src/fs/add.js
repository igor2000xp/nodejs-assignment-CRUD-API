import * as fs from 'fs/promises';

export const add = async (fileName) =>  {

  try {
    await fs.open(fileName, 'ax');

  } catch (err) {
    console.log(err);
  }
}
