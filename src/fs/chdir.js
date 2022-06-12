import { chdir } from 'process';

export const myChdir = (newPath) => {
  try {
    chdir(newPath);

  } catch (err) {
    console.error(`chdir: ${err}`);
  }
}
