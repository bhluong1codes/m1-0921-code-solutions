/* exported getStudentNames */
function getStudentNames(students) {
  var arr = [];
  for (var i = 0; i < students.length; i++) {
    for (var property in students[i]) {
      arr.push(students[i][property]);
    }
  }
  return arr;
}
