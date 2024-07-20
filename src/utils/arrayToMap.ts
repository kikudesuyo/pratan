const arrayToMap = (arr: string[][]): { [key: number]: string[] } => {
  return arr.reduce((acc, curr, index) => {
    acc[index] = curr;
    return acc;
  }, {} as { [key: number]: string[] });
};

export default arrayToMap;
