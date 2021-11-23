var $container = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$container.addEventListener('click', function (event) {

  if (!event.target.matches('.tab')) {
    return;
  }

  for (var tabIndex = 0; tabIndex < $tab.length; tabIndex++) {
    if ($tab[tabIndex] === event.target) {
      $tab[tabIndex].className = 'tab active';
    } else {
      $tab[tabIndex].className = 'tab';
    }
  }

  var $dataView = event.target.getAttribute('data-view');
  for (var i = 0; i < $view.length; i++) {
    if ($dataView === $view[i].getAttribute('data-view')) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
})
;
