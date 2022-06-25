const bubbleSort = function (arr) {
  // 배열을 순회하면서 i번째 값과 i+1번째 값을 비교해서 바꿔준다.
  let copyArr = arr.slice()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) {
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    }
  }

  // 배열이 다 정렬 될 때까지 재귀한다
  // 바뀐배열과 바뀌지 않은 배열이 같으면 재귀를 종료한다
  if (JSON.stringify(arr) === JSON.stringify(copyArr)) {
    return arr
  } else {
    return bubbleSort(arr)
  }
};
