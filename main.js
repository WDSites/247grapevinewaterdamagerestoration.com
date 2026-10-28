(function () {
  document.documentElement.classList.add("js");
  var toggle = document.getElementById("navtoggle");
  var nav = document.getElementById("primarynav");
  function setMenu(open) {
    if (!toggle || !nav) { return; }
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.documentElement.style.overflow = open ? "hidden" : "";
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { setMenu(false); }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) { setMenu(false); }
    });
  }
  var qs = document.querySelectorAll(".faq-q");
  for (var i = 0; i < qs.length; i++) {
    qs[i].addEventListener("click", function () {
      var btn = this;
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      if (panel) { panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px"; }
    });
  }
  var fab = document.getElementById("fab");
  var foot = document.querySelector("footer");
  if (fab && foot && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      fab.classList.toggle("hide", entries[0].isIntersecting);
    }).observe(foot);
  }
})();
