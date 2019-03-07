// O(n)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for(let j = 0; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i+1;
}

console.log(countUniqueValues([1,1,2,5,5,6,7,8,8]));