var $text = document.querySelector('.text');
var $textContent = $text.textContent;
var textArray = $textContent.split('');
var spanArray = [];

for (var i = 0; i < textArray.length; i++) {
  if (textArray[i] === ' ') {
    spanArray.push('<span>' + ' ' + '</span>');
  } else {
    spanArray.push('<span>' + textArray[i] + '</span>');
  }
}

var spanString = spanArray.join('');
$text.innerHTML = spanString;
var $chars = document.querySelectorAll('h1 span');
$chars[0].className = 'active';

var index = 0;
window.addEventListener('keydown', typingTest);

function typingTest(event) {
  if (event.key === $chars[index].textContent) {
    $chars[index].className = 'right';
    index++;
  } else {
    $chars[index].classList.add('wrong');
  }
  $chars[index].classList.add('active');
}
