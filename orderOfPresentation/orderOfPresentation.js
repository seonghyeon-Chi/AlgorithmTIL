function orderOfPresentation (N, K) {
  // TODO: 배열의 경우의 수를 구하는 문제
  // 첫번째 배열, 두번째 배열, 세번째 배열의 분리해서 움직이는 경우로 한다.
  // N에 맞게 1부터 N번까지 순차적인 1차원 배열 생성한다
  let array = []
  for (let i = 1; i <= 3; i++) {
    array.push(i)
  }
  let result = [array];
  let K = 1
  let i = 0
}