function power(base, exponent) {
  // todo: 재귀를 사용해서 제곱을 구한다
  if (exponent === 0) {
    return 1
  } else {
    return base * power(base, exponent-1)
  }
}

// 수가 94,906,249가 넘는 경우는 제대로 된 정답이 나오지 않는다
// 결과를 94,906,249로 나누는 것이 아니라 94,906,249보다 넘는 경우에 나눠서 연산을 이어가야 한다.