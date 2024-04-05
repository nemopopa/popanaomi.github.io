window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var scrollHeight = document.documentElement.scrollHeight;
  var clientHeight = document.documentElement.clientHeight;

  if (scrollPosition > (scrollHeight - clientHeight) / 2) {
      document.getElementById('scroll-to-bottom').style.display = 'none';
      document.getElementById('scroll-to-top').style.display = 'block';
  } else {
      document.getElementById('scroll-to-bottom').style.display = 'block';
      document.getElementById('scroll-to-top').style.display = 'none';
  }
  
});


function scrollToBottom() {
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
  });
}

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

