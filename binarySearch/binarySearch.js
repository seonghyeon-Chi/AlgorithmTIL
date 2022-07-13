const binarySearch = function (arr, target) {
  // TODO : 이진 탐색이란 배열의 중간에 있는 임의의 값을 선택하여 찾고자 하는 값 X와 비교한다.
  // X가 중간 값보다 작으면 중간 값을 기준으로 좌측의 데이터들을 대상으로
  // X가 중간값보다 크면 배열의 우측을 대상으로 다시 탐색한다.
  // 해당 값을 찾을 때까지 이 과정을 반복한다.
  let half = Math.floor(arr.length / 2)

  if (arr[half] === target) {
    return half
  } else {
    if (target < arr[half]) {
      return binarySearch(arr.slice(0,half), target)
    } else {
      return binarySearch(arr.slice(half+1), target)
    }
  }
};

// target이 배열에 없는 경우를 계산하지 못함
