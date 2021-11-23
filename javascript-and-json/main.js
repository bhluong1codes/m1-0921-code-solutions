var books = [
  {
    isbn: '12345',
    title: 'Harry Potter',
    author: 'JK Rowling'
  }
];

console.log('value of books:', books);
console.log('typeof books:', typeof books);

var stringify = JSON.stringify(books);
console.log('value of stringify:', stringify);
console.log('typeof stringify:', typeof stringify);

var student = '{"id": 12345, "name": "johnson"}';

console.log('value of student:', student);
console.log('type of student:', typeof student);

var parsed = JSON.parse(student);
console.log('value of parsed', parsed);
console.log('type of parsed', typeof parsed);
