const isSubsetOf = function (base, sample) {
  // TODO: base를 순회하면서 sample의 요소가 있는지 없는지를 검사한다.
  // 재귀를 사용해서 sample의 요소를 순회한다.
  let result = true;

  function subset (base, sample) {
    if (sample.length === 0) {
      return result
    }
    if (base.includes(sample[0])) {
      isSubsetOf(base, sample.slice(1))
    } else {
      result = false
      isSubsetOf(base, [])
    }
  }
  subset(base, sample)
  return result
};

// console에서는 결과가 잘 나오지만 테스트에서는 아예 동작을 하지 않았다