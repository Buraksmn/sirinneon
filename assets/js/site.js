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

  var katalog = document.getElementById("katalog");
  if (!katalog) return;
  var chips = document.querySelectorAll(".chip");
  var cards = katalog.querySelectorAll(".card");
  var adet = document.getElementById("adet");

  function suz(id) {
    var gecerli = Array.prototype.some.call(chips, function (c) { return c.dataset.filtre === id; });
    if (!gecerli) id = "hepsi";
    var n = 0;
    cards.forEach(function (card) {
      var goster = id === "hepsi" || card.dataset.kategori === id;
      card.hidden = !goster;
      if (goster) n++;
    });
    chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.dataset.filtre === id)); });
    adet.textContent = n;
  }

  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      var id = c.dataset.filtre;
      suz(id);
      history.replaceState(null, "", id === "hepsi" ? location.pathname : "#" + id);
    });
  });
  suz(location.hash.slice(1));
  window.addEventListener("hashchange", function () { suz(location.hash.slice(1)); });
})();
