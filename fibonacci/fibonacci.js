function fibonacci(n, memo) {
  // TODO: n이 0과 1인 경우에는 곧바로 0과 1을 리턴한다
  // 재귀를 사용하여 fibonacci(n-1)인 경우와 fibonacci(n-2)인 경우를 더한다
  memo = memo || {}
  if (memo[n]) {
    return memo[n]
  }
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
  }
}


// 콘솔을 찍었을 경우 정상적으로 fibonacci의 값이 나오지만 테스트는 통과하지 못했다
// 시간 복잡도가 2n이 아닌 0(N)인 경우를 찾아야 함

// 메모이제이션 기능을 사용하면 중복 연산을 삭제할 수 있고 결과적으로 시간복잡도를 줄일 수 있음
// 메모이제이션이 이해가 온전히 잘 안된다. 이에 대한 설명이 있는 레퍼런스를 남긴다. https://www.devh.kr/2020/Understanding-Memoization-In-JavaScript/