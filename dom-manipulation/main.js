var numClick = 1;
var $hotBtn = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotBtn.addEventListener('click', function (event) {
  $clickCount.textContent = 'Clicks: ' + numClick++;
  if (numClick < 4) {
    $hotBtn.className = 'hot-button cold';
  } else if (numClick < 7) {
    $hotBtn.className = 'hot-button cool';
  } else if (numClick < 10) {
    $hotBtn.className = 'hot-button tepid';
  } else if (numClick < 13) {
    $hotBtn.className = 'hot-button warm';
  } else if (numClick < 16) {
    $hotBtn.className = 'hot-button hot';
  } else {
    $hotBtn.className = 'hot-button nuclear';
  }
}
);
