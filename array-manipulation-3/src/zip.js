/* exported zip */
function zip(first, second) {
  var newArr = [];
  if (first.length < second.length) {
    for (var i = 0; i < first.length; i++) {
      var arr1 = [];
      arr1.push(first[i]);
      arr1.push(second[i]);
      newArr.push(arr1);
    }
  } else {
    for (var index = 0; index < second.length; index++) {
      var arr2 = [];
      arr2.push(first[index]);
      arr2.push(second[index]);
      newArr.push(arr2);
    }
  }

  return newArr;
}
