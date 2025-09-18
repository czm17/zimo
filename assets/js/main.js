document.addEventListener("DOMContentLoaded", function onReady() {
  const menuToggleButton = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }
  if (menuToggleButton && siteNav) {
    menuToggleButton.addEventListener("click", function onMenuToggle() {
      const willOpen = !siteNav.classList.contains("open");
      siteNav.classList.toggle("open", willOpen);
      menuToggleButton.setAttribute("aria-expanded", String(willOpen));
    });
    siteNav.addEventListener("click", function onNavClick(event) {
      const target = event.target;
      if (target instanceof HTMLElement && target.tagName === "A") {
        siteNav.classList.remove("open");
        menuToggleButton.setAttribute("aria-expanded", "false");
      }
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach(function attachSmooth(el) {
    el.addEventListener("click", function onAnchorClick(event) {
      const href = el.getAttribute("href");
      if (!href || href.length <= 1) return;
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", '#' + targetId);
    });
  });
});