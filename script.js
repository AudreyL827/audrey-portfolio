/* Two small jobs only: the light and dark switch, and image placeholders.
   Nothing else on the page depends on JavaScript. */

(function () {
  "use strict";

  /* ---- Theme -------------------------------------------------------------
     The saved theme is applied by the inline script in <head> so there is no
     flash. This part only handles the button. */

  var root = document.documentElement;
  var button = document.querySelector("[data-theme-toggle]");

  function paintButton() {
    if (!button) return;
    var dark = root.dataset.theme === "dark";
    button.querySelector(".toggle-label").textContent = dark ? "Light" : "Dark";
    button.setAttribute("aria-pressed", dark ? "true" : "false");
    button.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  if (button) {
    paintButton();
    button.addEventListener("click", function () {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
      paintButton();
    });
  }

  /* ---- Missing images ----------------------------------------------------
     Every <figure class="shot"> carries data-file with the filename it wants.
     If that file is not in assets/ yet, the figure keeps its space and shows
     the filename instead of a broken image. Drop the file in and the label
     disappears with no change to the markup. */

  function markMissing(img) {
    var figure = img.closest(".shot");
    if (!figure || figure.classList.contains("is-missing")) return;
    figure.classList.add("is-missing");
    img.remove();
  }

  document.addEventListener("error", function (event) {
    var target = event.target;
    if (target && target.tagName === "IMG") markMissing(target);
  }, true);

  document.querySelectorAll(".shot img").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) markMissing(img);
  });

  /* ---- Welcome postcard --------------------------------------------------
     Crumpled paper relaxing into a mailed postcard, about 1.6 seconds, once
     per browser session. The page underneath is already loaded. Skip and
     Escape both close it, focus is never trapped, and the overlay is taken
     out of the document when it is done. */

  var welcome = document.getElementById("welcome");

  if (welcome && root.classList.contains("welcome-open")) {
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var skip = welcome.querySelector(".welcome-skip");
    var card = welcome.querySelector(".welcome-card");
    var folds = [].slice.call(welcome.querySelectorAll(".fold"));
    var marks = welcome.querySelector(".welcome-marks");
    var message = welcome.querySelector(".welcome-message");
    var label = welcome.querySelector(".welcome-label");
    var closed = false;

    try { sessionStorage.setItem("welcomed", "1"); } catch (e) {}

    function closeWelcome() {
      if (closed) return;
      closed = true;
      document.removeEventListener("keydown", onKey);
      var done = function () {
        root.classList.remove("welcome-open");
        if (welcome.parentNode) welcome.parentNode.removeChild(welcome);
      };
      if (reduced) return done();
      welcome.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 260, easing: "ease", fill: "forwards" }
      ).finished.then(done, done);
    }

    function onKey(event) {
      if (event.key === "Escape") closeWelcome();
    }

    skip.addEventListener("click", closeWelcome);
    document.addEventListener("keydown", onKey);
    skip.focus({ preventScroll: true });

    if (reduced) {
      /* No crumpling and no unfolding. The finished card is shown, then it
         steps aside on its own. */
      skip.textContent = "Enter portfolio";
      setTimeout(closeWelcome, 900);
    } else {
      /* Each panel relaxes from its own angle, on its own beat. */
      folds.forEach(function (fold, i) {
        var start = getComputedStyle(fold).transform;
        fold.animate(
          [
            { transform: start, opacity: 1 },
            { transform: "none", opacity: 1, offset: 0.72 },
            { transform: "none", opacity: 0 }
          ],
          { duration: 760, delay: i * 52, easing: "cubic-bezier(0.28, 0.9, 0.3, 1)", fill: "forwards" }
        );
      });

      card.animate(
        [
          { opacity: 0, transform: "scale(0.985)" },
          { opacity: 1, transform: "none" }
        ],
        { duration: 420, delay: 330, easing: "ease-out", fill: "forwards" }
      );

      [label, message, marks].forEach(function (el, i) {
        el.animate(
          [{ opacity: 0, transform: "translateY(5px)" }, { opacity: 1, transform: "none" }],
          { duration: 300, delay: 620 + i * 110, easing: "ease-out", fill: "backwards" }
        );
      });

      setTimeout(closeWelcome, 1450);
    }
  } else if (welcome && welcome.parentNode) {
    /* Not this visitor's first page in the session. */
    welcome.parentNode.removeChild(welcome);
  }

  /* ---- Torn paper reveal -------------------------------------------------
     The sheet comes off once, when the project first reaches the viewport.
     Nothing is hidden behind it: it sits over the print only, takes no
     pointer events, and under reduced motion it is never drawn at all. */

  var tears = [].slice.call(document.querySelectorAll("[data-tear]"));

  if (tears.length) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      tears.forEach(function (tear) { tear.classList.add("is-torn"); });
    } else {
      var watcher = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-torn");
          watcher.unobserve(entry.target);
        });
      }, { threshold: 0.25 });
      tears.forEach(function (tear) { watcher.observe(tear); });
    }
  }

  /* ---- Process reveal ----------------------------------------------------
     A plain disclosure, added on top of markup that already works. Without
     JavaScript the panel is simply open and the trigger never appears, so the
     evidence is never trapped behind a control that cannot run. */

  document.querySelectorAll(".reveal-trigger").forEach(function (button) {
    var panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!panel) return;
    button.hidden = false;
    panel.hidden = true;
    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", open ? "false" : "true");
      panel.hidden = open;
    });
  });

  /* ---- Stamps ------------------------------------------------------------
     Hover and focus already reveal the note through CSS, which covers tapping
     too since a tap focuses the button. This only adds the sticky toggle, so a
     note stays open on a phone until it is tapped again. */

  document.querySelectorAll(".stamp .stamp-face").forEach(function (button) {
    button.addEventListener("click", function () {
      var stamp = button.closest(".stamp");
      var open = stamp.classList.toggle("is-open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
})();
