function titleCase(string) {
  var array = string.toLowerCase().split(' ');
  var minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var i = 0; i < array.length; i++) {
    if (array[i].includes('-')) {
      var arr = array[i].split('-');
      for (var index = 0; index < arr.length; index++) {
        arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1);
      }
      var newarray = arr.join('-');
      array[i] = newarray;
    } else if (array[i] === 'javascript:') {
      array[i] = 'JavaScript:';
    } else if (array[i] === 'javascript') {
      array[i] = 'JavaScript';
    } else if (array[i] === 'api') {
      array[i] = 'API';
    } else if (array[i].length >= 4) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    } else if (i === 0) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    } else if (minor.indexOf(array[i]) === -1) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    } else if (array[i - 1].includes(':')) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
  }
  var titleCased = array.join(' ');
  return titleCased;
}

titleCase('this is a string');
