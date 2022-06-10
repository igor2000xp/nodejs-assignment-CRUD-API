export const parseName = (name) => {
  let newArr;
  newArr = name.join(' ')
    .split('--username=')
    .filter((el) => el !== '');

  return newArr[0];
};
