// export const remove = (arr: number[], item: number) => {
//   const newArr = [...arr];
//   newArr.splice(newArr.findIndex(i => i === item), 1);
//   return newArr;
// };

let newIndex = 0;
export const add = (arr: number[]) => {
  newIndex++;
  return [...arr, newIndex];
};

export const remove = (arr: number[]) => {
  newIndex = 0;
  const newArr = [...arr];
  newArr.pop();
  return newArr;
};

let newIndexStack = 0;
export const addStack = (arr: number[]) => {
  newIndexStack++;
  const newArr = [...arr, newIndexStack]
  return newArr.sort((a, b) => { return b - a });
};

export const removeStack = (arr: number[]) => {
  newIndexStack = 0;
  const newArr = [...arr];
  newArr.shift();
  return newArr;
};

export const clean = () => {
  newIndex = 0;
  newIndexStack = 0;
  return [0];
}
