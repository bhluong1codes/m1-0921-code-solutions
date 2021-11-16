var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', function () {
  event.preventDefault();
  var theForm = document.getElementById('contact-form').elements;
  var messageData = {};
  messageData.name = theForm[0].value;
  messageData.email = theForm[1].value;
  messageData.message = theForm[2].value;
  console.log('messageData:', messageData);
  $contactForm.reset();
});
