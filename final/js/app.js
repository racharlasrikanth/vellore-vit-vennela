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
