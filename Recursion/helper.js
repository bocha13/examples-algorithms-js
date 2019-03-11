function CollectOddValues (arr) {
  let result = [];

  function helper(input) {
    if (input.lenght === 0) return;
    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }
    helper(input.slice(1));
  }
  helper(arr);
  return result;
}