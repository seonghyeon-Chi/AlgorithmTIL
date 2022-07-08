function power(base, exponent) {
  // todo: 재귀를 사용해서 제곱을 구한다
  // 시간 복잡도를 위해 분할 정복을 사용한다
  if (exponent === 0) {
    return 1
  } else if (exponent % 2 === 0) {
    return (power(base, exponent/2) * power(base, exponent/2)) % 94906249
  } else {
    return (base * power(base, (exponent-1)/2) * power(base, (exponent-1)/2)) % 94906249
  }
}

// 아직 통과되지 않음 좀 더 효율적인 알고리즘을 찾아야 함