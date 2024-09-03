let navLinks = document.querySelectorAll(".body__headerResponsive-nav-ul-li-a");
const burgerMenu = document.querySelector('.body__headerResponsive-nav--one-label--one');
let prevScrollPos = 0;

// Toggle the visibility of the menu
function animateBar() {
  const menu = document.querySelector('.body__headerResponsive-nav--one-ul--one');
  menu.classList.toggle("activeHeader__nav-ulResponsive");
  
  if (menu.classList.contains('activeHeader__nav-ulResponsive')) {
    disableScroll();
  } else {
    enableScroll();
  }
}

// Add click event listener to burger menu
burgerMenu.addEventListener('click', animateBar);

// Disable scrolling
function disableScroll() {
  // Get the current scroll position
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  let scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  // Save the current scroll position
  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

// Enable scrolling
function enableScroll() {
  window.onscroll =  () => {};
}
