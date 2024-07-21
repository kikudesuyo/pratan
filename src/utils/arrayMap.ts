/* eslint @typescript-eslint/no-explicit-any: off */

export const arrayToMap = (arr: string[][]): { [key: number]: string[] } => {
  return arr.reduce((acc, curr, index) => {
    acc[index] = curr;
    return acc;
  }, {} as { [key: number]: string[] });
};

export const mapToArray = (map: { [key: number]: any }) => {
  const keys = Object.keys(map)
    .map(Number)
    .sort((a, b) => a - b);

  return keys.map((key) => map[key]);
};
