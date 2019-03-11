function CollectOddValues(arr) {
  let newArr = [];
  if(arr.lenght === 0) return newArr;
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(CollectOddValues(arr.slice(1)));
  return newArr;
}