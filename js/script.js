/**
 * Web Server Implementation Project — Main Script
 * Handles navigation, scroll animations, and interactive UI elements.
 */

(function () {
    "use strict";

    /* ---------- DOM Elements ---------- */
    const header = document.getElementById("header");
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav__link");
    const backToTop = document.getElementById("back-to-top");
    const revealElements = document.querySelectorAll(".reveal");
    const sections = document.querySelectorAll("section[id]");

    /* ---------- Mobile Navigation Toggle ---------- */
    function toggleMobileMenu() {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen);

        const icon = navToggle.querySelector("i");
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-xmark", isOpen);
    }

    function closeMobileMenu() {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");

        const icon = navToggle.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
    }

    navToggle.addEventListener("click", toggleMobileMenu);

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            closeMobileMenu();
        });
    });

    /* ---------- Sticky Header Shadow ---------- */
    function handleHeaderScroll() {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    /* ---------- Back to Top Button ---------- */
    function handleBackToTop() {
        if (window.scrollY > 400) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    }

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ---------- Active Navigation Highlighting ---------- */
    function setActiveNavLink() {
        const scrollPos = window.scrollY + header.offsetHeight + 100;

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    /* ---------- Scroll Reveal Animations ---------- */
    function initScrollReveal() {
        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -60px 0px",
            threshold: 0.1,
        };

        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    }

    /* ---------- Staggered Reveal for Grid Children ---------- */
    function initStaggeredReveal() {
        const grids = document.querySelectorAll(".about__grid, .stats__grid, .tech__grid, .team__grid, .outcomes__grid");

        grids.forEach(function (grid) {
            const children = grid.querySelectorAll(".reveal");
            children.forEach(function (child, index) {
                child.style.transitionDelay = index * 0.1 + "s";
            });
        });
    }

    /* ---------- Combined Scroll Handler ---------- */
    function onScroll() {
        handleHeaderScroll();
        handleBackToTop();
        setActiveNavLink();
    }

    /* ---------- Initialize ---------- */
    function init() {
        initScrollReveal();
        initStaggeredReveal();
        onScroll();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", closeMobileMenu);

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
