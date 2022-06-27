let tiling = function (n, memo) {
  // TODO: fibonacci 알고리즘을 사용하여 문제를 해결할 수 있다.
  // 단, 2까지는 2를 반환한다.
  // 시간복잡도를 줄이기 위해서 메모제이션을 사용한다.
  memo = memo || {}
  if (memo[n]) {
    return memo[n]
  }
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    return memo[n] = tiling(n-1, memo) + tiling(n-2, memo)
  }
};
