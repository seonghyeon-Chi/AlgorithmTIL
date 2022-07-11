function power(base, exponent) {
  // todo: 재귀를 사용해서 제곱을 구한다
  // 시간 복잡도를 위해 분할 정복을 사용한다
  if (exponent === 0) {
    return 1
  } 
  let half = Math.floor(exponent / 2)
  let temp = power(base, half)
  let result = (temp * temp) % 94906249

  if (exponent % 2 === 1) {
    return result * base % 94906249
  } else {
    return result
  }
}