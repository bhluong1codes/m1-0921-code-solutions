var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName', event.target.tagName);
  var ancestor = event.target.closest('.task-list-item');
  console.log('closest', ancestor);
  if (event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();
  }
});