/**
 * ============================================================================
 * PORTFOLIO — script.js
 * ============================================================================
 * Vanilla JS, no build step, no dependencies. Reads PROJECTS / CATEGORIES
 * from data.js and renders the filter bar, project index list and the
 * case-study modal. Everything else (nav, loader, cursor, reveal animations,
 * back-to-top, copy-email) is self-contained below.
 *
 * Table of contents:
 *   1. Utilities
 *   2. Loader
 *   3. Custom cursor
 *   4. Header / scroll state / active nav
 *   5. Mobile navigation
 *   6. Scroll-reveal animations
 *   7. Projects: render, filter, row preview
 *   8. Case-study modal
 *   9. Lightbox
 *  10. Back to top
 *  11. Copy email
 *  12. Misc (footer year, lazy-load fade)
 * ============================================================================
 */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  /* ------------------------------------------------------------------ */
  /* 1. UTILITIES                                                        */
  /* ------------------------------------------------------------------ */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function trapFocus(container) {
    const focusable = $$(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      container
    );
    if (!focusable.length) return () => {};
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handler(e) {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    container.addEventListener("keydown", handler);
    return () => container.removeEventListener("keydown", handler);
  }

  /* ------------------------------------------------------------------ */
  /* 2. LOADER                                                           */
  /* ------------------------------------------------------------------ */
  const loader = $("#loader");
  function hideLoader() {
    if (!loader) return;
    loader.classList.add("is-hidden");
    loader.addEventListener(
      "transitionend",
      () => loader.remove(),
      { once: true }
    );
  }
  window.addEventListener("load", () => {
    // small minimum-display delay so the loader reads as intentional,
    // not a flash — skipped entirely for reduced-motion users
    setTimeout(hideLoader, prefersReducedMotion ? 0 : 500);
  });
  // Safety net: never trap a user behind the loader
  setTimeout(hideLoader, 3500);

  /* ------------------------------------------------------------------ */
  /* 3. CUSTOM CURSOR                                                    */
  /* ------------------------------------------------------------------ */
  const cursorDot = $("#cursorDot");
  const cursorRing = $("#cursorRing");

  if (!isTouchDevice && cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      cursorDot.style.opacity = "1";
      cursorRing.style.opacity = cursorRing.classList.contains("is-active") ? "1" : "0.6";
    });

    function raf() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    $$("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", () => cursorRing.classList.add("is-active"));
      el.addEventListener("mouseleave", () => cursorRing.classList.remove("is-active"));
    });

    document.addEventListener("mouseleave", () => {
      cursorDot.style.opacity = "0";
      cursorRing.style.opacity = "0";
    });
  }

  /* ------------------------------------------------------------------ */
  /* 4. HEADER / SCROLL STATE / ACTIVE NAV                               */
  /* ------------------------------------------------------------------ */
  const siteHeader = $("#siteHeader");
  function onScroll() {
    if (window.scrollY > 24) {
      siteHeader.classList.add("is-scrolled");
    } else {
      siteHeader.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const navLinks = $$("[data-nav]");
  const navSections = ["work", "about", "skills", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navSections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    navSections.forEach((sec) => navObserver.observe(sec));
  }

  /* ------------------------------------------------------------------ */
  /* 5. MOBILE NAVIGATION                                                */
  /* ------------------------------------------------------------------ */
  const navToggle = $("#navToggle");
  const navMobile = $("#navMobile");
  let releaseMobileTrap = () => {};

  function openMobileNav() {
    navMobile.classList.add("is-open");
    navMobile.setAttribute("aria-hidden", "false");
    navToggle.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
    releaseMobileTrap = trapFocus(navMobile);
    const firstLink = $("a", navMobile);
    if (firstLink) firstLink.focus();
  }
  function closeMobileNav() {
    navMobile.classList.remove("is-open");
    navMobile.setAttribute("aria-hidden", "true");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
    releaseMobileTrap();
    navToggle.focus();
  }
  navToggle.addEventListener("click", () => {
    navMobile.classList.contains("is-open") ? closeMobileNav() : openMobileNav();
  });
  $$("[data-nav-mobile]").forEach((a) => a.addEventListener("click", closeMobileNav));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMobile.classList.contains("is-open")) closeMobileNav();
  });

  /* ------------------------------------------------------------------ */
  /* 6. SCROLL-REVEAL ANIMATIONS                                         */
  /* ------------------------------------------------------------------ */
  const revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ------------------------------------------------------------------ */
  /* 7. PROJECTS: RENDER, FILTER, ROW PREVIEW                            */
  /* ------------------------------------------------------------------ */
  const filterBar = $("#filterBar");
  const projectList = $("#projectList");
  const filterEmpty = $("#filterEmpty");

  let activeFilter = "All";

  function countFor(category) {
    if (category === "All") return PROJECTS.length;
    return PROJECTS.filter((p) => p.categories.includes(category)).length;
  }

  function renderFilterBar() {
    const cats = ["All", ...CATEGORIES];
    filterBar.innerHTML = cats
      .map(
        (cat) => `
      <button type="button"
        class="filter-btn${cat === activeFilter ? " is-active" : ""}"
        data-filter="${cat}"
        aria-pressed="${cat === activeFilter}">
        ${cat}<span class="count">${countFor(cat)}</span>
      </button>`
      )
      .join("");
  }

  function renderProjectList() {
    // Renders every entry in PROJECTS — intentionally no slice()/limit here.
    // Add as many projects as you like to data.js and they will all render.
    projectList.innerHTML = PROJECTS.map((project, i) => {
      const hidden = activeFilter !== "All" && !project.categories.includes(activeFilter);
      const index = String(i + 1).padStart(2, "0");
      return `
      <button type="button"
        class="project-row${hidden ? " is-hidden-filter" : ""}"
        data-project-id="${project.id}"
        aria-label="Open case study: ${project.title}">

        <span class="row-image-wrap">
          <img class="row-image"
            src="${project.cover}"
            alt="${project.title} — featured image"
            loading="lazy"
            width="960" height="720">
        </span>

        <span class="row-content">
          <span class="row-top">
            <span class="row-index">${index}</span>
            <span class="row-cats">${project.categories.map((c) => `<span>${c}</span>`).join("")}</span>
          </span>
          <span class="row-title">${project.title}</span>
          <span class="row-desc">${project.summary}</span>
          <span class="row-bottom">
            <span class="row-year">${project.year}</span>
            <span class="row-cta">
              View case study
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            </span>
          </span>
        </span>

      </button>`;
    }).join("");

    const visibleCount = PROJECTS.filter(
      (p) => activeFilter === "All" || p.categories.includes(activeFilter)
    ).length;
    filterEmpty.hidden = visibleCount !== 0;

    attachProjectRowEvents();
    attachLazyFade(projectList);
  }

  function attachProjectRowEvents() {
    $$(".project-row", projectList).forEach((row) => {
      row.addEventListener("click", () => openModal(row.dataset.projectId, row));
    });
  }

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    renderFilterBar();
    renderProjectList();
  });

  renderFilterBar();
  renderProjectList();

  // Keep the "Featured projects" stat in About honest as PROJECTS grows —
  // no hardcoded count anywhere in the page.
  const statProjectCount = $("#statProjectCount");
  if (statProjectCount) statProjectCount.textContent = PROJECTS.length;

  /* ------------------------------------------------------------------ */
  /* 8. CASE-STUDY MODAL                                                 */
  /* ------------------------------------------------------------------ */
  const modalOverlay = $("#modalOverlay");
  const modal = $("#modal");
  const modalContent = $("#modalContent");
  const modalCloseBtn = $("#modalCloseBtn");

  let releaseModalTrap = () => {};
  let lastFocusedEl = null;

  function projectIndexById(id) {
    return PROJECTS.findIndex((p) => p.id === id);
  }

  function renderModalContent(project) {
    const idx = projectIndexById(project.id);
    const next = PROJECTS[(idx + 1) % PROJECTS.length];

    modalContent.innerHTML = `
      <div class="modal-hero">
        <span class="eyebrow">${project.categories.join(" · ")}</span>
        <h2 id="modalTitle">${project.title}</h2>
        <div class="modal-meta">
          <div><span>Client</span><strong>${project.client}</strong></div>
          <div><span>Role</span><strong>${project.role}</strong></div>
          <div><span>Year</span><strong>${project.year}</strong></div>
        </div>
      </div>

      <div class="modal-cover">
        <img src="${project.cover}" alt="${project.title} — cover image" loading="lazy">
      </div>

      <div class="modal-body">
        <div class="body-block">
          <h3>Overview</h3>
          <p>${project.description[0] || ""}</p>
        </div>
        <div class="body-block">
          <h3>Approach</h3>
          <p>${project.description[1] || ""}</p>
        </div>
      </div>

      ${
        project.gallery && project.gallery.length
          ? `<div class="modal-gallery" style="grid-template-columns:${
              project.gallery.length === 1 ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))"
            }">
              ${project.gallery
                .map(
                  (src) => `
                <figure>
                  <img src="${src}" alt="${project.title} — gallery image" loading="lazy" data-lightbox="${src}">
                </figure>`
                )
                .join("")}
            </div>`
          : ""
      }

      <div class="modal-footer-nav">
        <div>
          <span class="next-label">Next project</span>
          <button type="button" class="next-title" id="modalNextBtn" data-project-id="${next.id}">
            ${next.title} →
          </button>
        </div>
      </div>
    `;

    attachLazyFade(modalContent);
    attachLightboxEvents(modalContent);

    const nextBtn = $("#modalNextBtn", modalContent);
    if (nextBtn) {
      nextBtn.addEventListener("click", () => openModal(next.id));
    }
  }

  function openModal(projectId, triggerEl) {
    const project = PROJECTS.find((p) => p.id === projectId);
    if (!project) return;

    lastFocusedEl = triggerEl || document.activeElement;
    renderModalContent(project);

    modalOverlay.classList.add("is-open");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.scrollTop = 0;

    releaseModalTrap = trapFocus(modal);
    modalCloseBtn.focus();

    history.replaceState(null, "", `#/work/${project.id}`);
  }

  function closeModal() {
    modalOverlay.classList.remove("is-open");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    releaseModalTrap();
    history.replaceState(null, "", "#work");
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  modalCloseBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      if (lightbox.classList.contains("is-open")) return; // let lightbox handle its own Esc
      closeModal();
    }
  });

  /* Deep-link support: opening the site on #/work/<id> opens that project */
  function openFromHash() {
    const match = location.hash.match(/^#\/work\/(.+)$/);
    if (match && PROJECTS.some((p) => p.id === match[1])) {
      openModal(match[1]);
    }
  }
  window.addEventListener("DOMContentLoaded", openFromHash);

  /* ------------------------------------------------------------------ */
  /* 9. LIGHTBOX (gallery image zoom)                                    */
  /* ------------------------------------------------------------------ */
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxClose = $("#lightboxClose");

  function attachLightboxEvents(scope) {
    $$("[data-lightbox]", scope).forEach((img) => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.dataset.lightbox;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("is-open");
        lightboxClose.focus();
      });
    });
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
  }
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
  });

  /* ------------------------------------------------------------------ */
  /* 10. BACK TO TOP                                                     */
  /* ------------------------------------------------------------------ */
  const backToTop = $("#backToTop");
  window.addEventListener(
    "scroll",
    () => backToTop.classList.toggle("is-visible", window.scrollY > 800),
    { passive: true }
  );
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  /* ------------------------------------------------------------------ */
  /* 11. COPY EMAIL                                                      */
  /* ------------------------------------------------------------------ */
  const emailCopy = $("#emailCopy");
  emailCopy.addEventListener("click", async () => {
    const email = "henfrigeone@gmail.com";
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      // Clipboard API unavailable (older browser / insecure context) —
      // fall back to a temporary hidden input + execCommand.
      const input = document.createElement("input");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    emailCopy.classList.add("is-copied");
    setTimeout(() => emailCopy.classList.remove("is-copied"), 1800);
  });

  /* ------------------------------------------------------------------ */
  /* 12. MISC: FOOTER YEAR, LAZY-LOAD FADE                               */
  /* ------------------------------------------------------------------ */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function attachLazyFade(scope) {
    $$('img[loading="lazy"]', scope).forEach((img) => {
      if (img.complete) {
        img.classList.add("is-loaded");
      } else {
        img.addEventListener("load", () => img.classList.add("is-loaded"), { once: true });
      }
    });
  }
  attachLazyFade(document);
})();
