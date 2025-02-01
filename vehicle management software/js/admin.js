document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.querySelector(".sidebar");
    let arrowElements = document.querySelectorAll(".iocn-link .arrow");
    let sidebarToggle = document.querySelector(".logo-deatiles i");

    // Toggle Sidebar on Logo Click
    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("close");
    });

    // Handle Dropdown Menus
    arrowElements.forEach(arrow => {
        arrow.addEventListener("click", function () {
            let parent = this.parentElement;
            parent.classList.toggle("showmenu");
        });
    });

    // Close Sidebar when clicking outside
    document.addEventListener("click", function (event) {
        let isClickInsideSidebar = sidebar.contains(event.target);
        let isClickOnToggle = sidebarToggle.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggle) {
            sidebar.classList.add("close");
        }
    });
});
