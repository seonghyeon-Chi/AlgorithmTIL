const largestProductOfThree = function (arr) {
  // TODO: 배열의 요소 중 3개를 곱했을 때 가장 큰 경우를 구한다.
  // 배열의 3의 순열을 구하는 알고리즘을 사용한다.
  function getPermutation(arr, r, tmp, result, isUsed) {
    if( tmp.length === r ) {
      result.push(tmp.slice());
      return result;
    }
    for(let i=0; i<arr.length; i++) {
      if(isUsed.has(i)) continue;
      isUsed.add(i);
      tmp.push(arr[i]);
      getPermutation(arr, r, tmp, result, isUsed);
      tmp.pop();
      isUsed.delete(i);
    }
    return result;
  }
  // 순열을 구하고 순회하면서 세 요소를 곱한 값중 제일 큰 요소만 max 변수에 할당되게 한다.
  let result = getPermutation(arr, 3, [], [], new Set())
  let max = result[0][0] * result[0][1] * result[0][2];
  for (let i = 0; i < result.length; i++) {
    let squr = result[i][0] * result[i][1] * result[i][2]
    if (max < squr) {
      max = squr
    }
  }
  return max;
}