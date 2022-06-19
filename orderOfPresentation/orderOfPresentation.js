function orderOfPresentation (N, K) {
  // TODO: 배열의 경우의 수를 구하는 문제
  // 첫번째 배열, 두번째 배열, 세번째 배열의 분리해서 움직이는 경우로 한다.
  // N에 맞게 1부터 N번까지 순차적인 1차원 배열 생성한다
  let array = []
  for (let i = 1; i <= N; i++) {
    array.push(i)
  }
  let count = 0;
  let result = [];
  let num = 0;
  function permutation(arr, s, r) {
    // s를 증가시키며 재귀하고 s가 r과 같아지면 count를 증가시킨다
    if (s === r) {
      // K와 arr가 같으면 num에 count를 할당한다
      if (JSON.stringify(K) === JSON.stringify(arr)) {
        num = count
      }
      count++;
      result.push(arr.slice())
      return
    }
    for (let i = s; i < arr.length; i++) {
      [arr[s], arr[i]] = [arr[i], arr[s]];
      permutation(arr, s + 1, r);
      [arr[s], arr[i]] = [arr[i], arr[s]];
    }
  }
  permutation(array, 0, N-1);
  return num
}

// 시간 초과로 통과하지 못했다
// K와 arr가 같을 때 중간에 반복문이 멈춰야 할거 같다

