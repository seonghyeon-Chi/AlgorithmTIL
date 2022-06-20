function fibonacci(n) {
  // TODO: n이 0과 1인 경우에는 곧바로 0과 1을 리턴한다
  // 재귀를 사용하여 fibonacci(n-1)인 경우와 fibonacci(n-2)인 경우를 더한다
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n-1) + fibonacci(n-2)
  }
}

// 콘솔을 찍었을 경우 정상적으로 fibonacci의 값이 나오지만 테스트는 통과하지 못했다
// 시간 복잡도가 2n이 아닌 0(N)인 경우를 찾아야 함