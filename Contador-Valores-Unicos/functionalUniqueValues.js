function countUniqueValues(arr) {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr.length;
};