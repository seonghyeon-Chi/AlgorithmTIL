const largestProductOfThree = function (arr) {
  // TODO: 배열의 요소 중 3개를 곱했을 때 가장 큰 경우를 구한다.
  // 배열의 3의 순열을 구하는 알고리즘을 사용한다.
  let array = []
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  function perm(arr, depth, n, k) {
    if (depth == k) {
      array.push(arr.slice())
      return;
    }
    
    for(let i = depth; i < n; i++) {
        swap(arr, i, depth);				
        perm(arr, depth+1, n, k); 		 
        swap(arr, i, depth);
    }
  }
  perm(arr, 0, arr.length, 3)
  return array
};

// swap을 사용한 permutation 알고리즘을 사용함.
// 갯수를 제한해서 사용하는 방법을 활용하기 어려움
// dfs를 시도해봐야 할것 같음