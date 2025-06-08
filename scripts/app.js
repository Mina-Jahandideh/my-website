function setAppHeight() {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
}
window.addEventListener('resize', setAppHeight);
window.addEventListener('orientationchange', setAppHeight);
setAppHeight();

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

document.addEventListener("DOMContentLoaded", () => {
    // سوییچ تم تاریک/روشن
    const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
    
    toggleThemeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const isDark = localStorage.getItem("theme") === "dark";
            document.documentElement.classList.toggle("dark", !isDark);
            localStorage.setItem("theme", isDark ? "light" : "dark");
        });
    });
   


    const toggleBtn = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.getElementById("menu-close");

    // باز کردن منو
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.remove("-left-64");
        sidebar.classList.add("left-0");
        overlay.classList.remove("hidden");
    });

    // بستن منو از روی overlay
    overlay.addEventListener("click", () => {
        if(window.innerWidth < 640) {
        sidebar.classList.add("-left-64");
        sidebar.classList.remove("left-0");
        overlay.classList.add("hidden");
        }
    });

    // بستن منو با دکمه x
    closeBtn.addEventListener("click", () => {
        sidebar.classList.add("-left-64");
        sidebar.classList.remove("left-0");
        overlay.classList.add("hidden");
    });

const buttons = document.querySelectorAll('.submenu-open-btn');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const li = button.closest('li');
        if (!li) return;
        const submenu = li.querySelector('.submenu');
        if (!submenu) return;
        submenu.classList.toggle('hidden');
        const icon = button.querySelector('svg');
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    });
});

});



