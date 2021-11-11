var $overlay = document.querySelector('.overlay');
var $openModal = document.querySelector('.open-btn');
var $closeBtn = document.querySelector('.close-btn');

$openModal.addEventListener('click', function (event) {
  $overlay.style.display = 'flex';
});

$closeBtn.addEventListener('click', function (event) {
  $overlay.style.display = 'none';
});
