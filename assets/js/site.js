// Şirin Neon — mobil menü ve ürün süzgeci. JS kapalıyken tüm ürünler görünür.
(function () {
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }

})();
