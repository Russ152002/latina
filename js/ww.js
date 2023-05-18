AOS.init();


  // get all the navbar links
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // add a click event listener to each link
  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      // hide the collapsed menu
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler.getAttribute('aria-expanded') === 'true') {
        navbarToggler.click();
      }
    });
  });