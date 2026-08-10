/* Small jobs only. Every page reads correctly with this file missing. */

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

  /* ---- The sealed letter --------------------------------------------------
     A full-screen entrance on the first homepage visit in each tab session.
     The homepage underneath has already rendered and is simply held inert
     until the envelope is opened, so nothing waits on this to finish loading. */

  var entrance = document.getElementById("entrance");

  if (entrance && root.classList.contains("entrance-up")) {
    var openButton = entrance.querySelector(".letter-open");
    var seal = entrance.querySelector(".seal");
    var flap = entrance.querySelector(".envelope-flap");
    var glimpse = entrance.querySelector(".envelope-glimpse");
    var heading = document.querySelector("main .display");
    var quiet = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var busy = false;
    var timers = [];

    /* everything behind the letter is unreachable while it is up */
    var behind = [].slice.call(document.querySelectorAll(".skip, .section-rail, .head, main, .foot"));
    behind.forEach(function (el) { el.setAttribute("inert", ""); });

    var done = false;
    var finish = function () {
      if (done) return;
      done = true;
      timers.forEach(clearTimeout);
      timers = [];
      behind.forEach(function (el) { el.removeAttribute("inert"); });
      root.classList.remove("entrance-up");
      if (entrance.parentNode) entrance.parentNode.removeChild(entrance);
      if (heading) heading.focus({ preventScroll: true });
    };

    var open = function () {
      if (busy || !root.classList.contains("entrance-up")) return;
      try { sessionStorage.setItem("audreyEnvelopeOpened", "1"); } catch (e) {}
      if (quiet) return finish();
      busy = true;
      entrance.classList.add("is-open");

      /* 1. the seal lifts */
      seal.animate(
        [{ transform: "translate(-50%, -50%)" }, { transform: "translate(-50%, calc(-50% - 8px)) scale(1.05)" }],
        { duration: 200, easing: "cubic-bezier(0.3, 0.7, 0.3, 1)", fill: "forwards" }
      );

      /* 2. a pause, then 3. the flap opens */
      timers.push(setTimeout(function () {
        flap.style.transform = "rotateX(-168deg)";

        /* 4. a glimpse of the postcards rises out of the envelope */
        timers.push(setTimeout(function () {
          glimpse.animate(
            [
              { transform: "translate(-50%, 26%)", opacity: 0 },
              { transform: "translate(-50%, -14%)", opacity: 1 }
            ],
            { duration: 300, easing: "cubic-bezier(0.24, 0.8, 0.3, 1)", fill: "forwards" }
          );

          /* 5. the entrance fades and the homepage is there */
          timers.push(setTimeout(function () {
            entrance.animate(
              [{ opacity: 1 }, { opacity: 0 }],
              { duration: 260, easing: "ease", fill: "forwards" }
            );
            /* the clock finishes it, not the animation promise */
            timers.push(setTimeout(finish, 260));
          }, 240));
        }, 300));
      }, 300));
    };

    openButton.addEventListener("click", open);
  }

  /* ---- Section shortcuts -------------------------------------------------
     Keep the quiet side rail in sync with the part of the one-page site that
     is currently being read. Anchor navigation remains native HTML. */

  var sectionRail = document.querySelector(".section-rail");

  if (sectionRail) {
    var sectionLinks = [].slice.call(sectionRail.querySelectorAll("[data-section-link]"));
    var sectionTargets = sectionLinks.map(function (link) {
      return document.getElementById(link.getAttribute("data-section-link"));
    }).filter(Boolean);
    var sectionFrame = 0;

    var setCurrentSection = function (id) {
      sectionLinks.forEach(function (link) {
        if (link.getAttribute("data-section-link") === id) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    var updateCurrentSection = function () {
      sectionFrame = 0;
      var marker = window.scrollY + window.innerHeight * 0.38;
      var current = sectionTargets[0];

      sectionTargets.forEach(function (target) {
        if (target.offsetTop <= marker) current = target;
      });

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        current = sectionTargets[sectionTargets.length - 1];
      }

      if (current) setCurrentSection(current.id);
    };

    var requestSectionUpdate = function () {
      if (!sectionFrame) sectionFrame = requestAnimationFrame(updateCurrentSection);
    };

    window.addEventListener("scroll", requestSectionUpdate, { passive: true });
    window.addEventListener("resize", requestSectionUpdate);
    window.addEventListener("hashchange", requestSectionUpdate);
    updateCurrentSection();
  }

  /* ---- The photographs in the hero ---------------------------------------
     Order only. Every photo, caption and alt text lives in index.html. */

  var photoStage = document.querySelector(".photo-stage");

  if (photoStage) {
    var photos = [].slice.call(photoStage.querySelectorAll(".photo"));
    var photosNext = photoStage.querySelector(".photos-next");
    var frontPhoto = 0;

    if (photos.length && photosNext) {
      photosNext.addEventListener("click", function () {
        frontPhoto = (frontPhoto + 1) % photos.length;
        photos.forEach(function (photo, i) {
          photo.dataset.pos = String((i - frontPhoto + photos.length) % photos.length);
        });
      });
    }
  }

  /* ---- Project postcard deck ---------------------------------------------
     Order and interaction only. Every project lives in index.html. The cards
     are a plain list until this runs, so the content is readable either way.
     Previous and Next are real buttons; Left and Right arrows work while
     focus is inside the deck. */

  var deck = document.getElementById("work-deck");

  if (deck) {
    var deckCards = [].slice.call(deck.querySelectorAll(".deck-card"));
    var prev = deck.querySelector("[data-deck-prev]");
    var next = deck.querySelector("[data-deck-next]");
    var status = deck.querySelector("[data-deck-status]");
    var active = 0;

    var show = function (index, announce) {
      active = (index + deckCards.length) % deckCards.length;
      deckCards.forEach(function (card, i) {
        var pos = (i - active + deckCards.length) % deckCards.length;
        card.dataset.pos = String(pos);
        /* Only the card in front takes focus or is read out. */
        if (pos === 0) card.removeAttribute("inert");
        else card.setAttribute("inert", "");
      });
      if (announce && status) {
        status.textContent =
          deckCards[active].dataset.title + ", " + (active + 1) + " of " + deckCards.length;
      }
    };

    if (deckCards.length) {
      show(0, false);

      if (next) next.addEventListener("click", function () { show(active + 1, true); });
      if (prev) prev.addEventListener("click", function () { show(active - 1, true); });

      deck.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") { show(active + 1, true); event.preventDefault(); }
        if (event.key === "ArrowLeft") { show(active - 1, true); event.preventDefault(); }
      });
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
