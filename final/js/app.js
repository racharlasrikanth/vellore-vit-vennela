// sidebar functionality
(function () {
  const hamburger = document.querySelector(".hamburger");
  const sidebarCloseButton = document.querySelector(".close-button");
  const sidebarContainer = document.querySelector(".sidebar-container");

  const openSidebar = function () {
    sidebarContainer.classList.add("show-sidebar");
  };
  const closeSidebar = function () {
    sidebarContainer.classList.remove("show-sidebar");
  };
  hamburger.addEventListener("click", openSidebar);
  sidebarCloseButton.addEventListener("click", closeSidebar);
})();

// sticky sidebar
(function () {
  const navbarContainer = document.querySelector(".nav-container");
  window.addEventListener("scroll", function () {
    let targetNumber = this.innerWidth >= 992 ? 70 : 50;
    if (this.scrollY >= targetNumber) {
      navbarContainer.classList.add("sticky-nav");
    } else {
      navbarContainer.classList.remove("sticky-nav");
    }
  });
})();
