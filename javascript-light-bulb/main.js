var $container = document.querySelector('.container');
var $circle = document.querySelector('.circle');

$circle.addEventListener('click', function (event) {
  if ($container.className === 'container') {
    $container.className = 'container yellow-bg';
    $circle.className = 'circle yellow-circle';
  } else {
    $container.className = 'container';
    $circle.className = 'circle';
  }
});
