// naive O(n2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  var max = -Infinity;
  for(let i = 0; i < arr.length; i++) {
    temp = 0;
    for(let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1,3,5,2,3,5,3,1,6,4,7], 3));