function checkScrollPosition() {
    const scrollToTopBtn = document.querySelector('#anchorBtn');
    if (window.pageYOffset > 500) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  window.addEventListener('scroll', checkScrollPosition);
  document.querySelector('#anchorBtn').addEventListener('click', scrollToTop);