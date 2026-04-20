/* jshint esversion: 6 */
'use strict';

(function () {

  // ── Mobile nav toggle ──────────────────────────────────────
  const toggle  = document.getElementById('nav-toggle');
  const nav     = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link inside it is clicked
    nav.addEventListener('click', function (e) {
      if (e.target.matches('a')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ── Active nav link on scroll ──────────────────────────────
  const sections  = document.querySelectorAll('main [id]');
  const navLinks  = document.querySelectorAll('.nav-link');
  const headerH   = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 60;

  function setActiveLink() {
    let current = '';
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - headerH - 10) {
        current = section.id;
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  // ── Dynamic footer year ────────────────────────────────────
  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ── Contact form – client-side validation & submission ─────
  const form       = document.getElementById('contact-form');
  const statusEl   = document.getElementById('form-status');

  if (form && statusEl) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous state
      statusEl.textContent = '';
      statusEl.className   = 'form-status';
      form.querySelectorAll('.invalid').forEach(function (el) {
        el.classList.remove('invalid');
      });

      // Validate required fields
      var valid = true;
      form.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) {
          field.classList.add('invalid');
          valid = false;
        }
      });

      // Basic email format check
      var emailField = form.querySelector('#email');
      if (emailField && emailField.value && !emailField.value.includes('@')) {
        emailField.classList.add('invalid');
        valid = false;
      }

      if (!valid) {
        statusEl.textContent = 'Please fill in all required fields correctly.';
        statusEl.className   = 'form-status error';
        return;
      }

      // Simulate submission (replace with real fetch/AJAX call)
      var submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled    = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(function () {
        form.reset();
        submitBtn.disabled    = false;
        submitBtn.textContent = 'Send Message';
        statusEl.textContent  = 'Thanks! We\'ll be in touch soon.';
        statusEl.className    = 'form-status success';
      }, 800);
    });

    // Remove invalid class on input
    form.addEventListener('input', function (e) {
      if (e.target.classList.contains('invalid') && e.target.value.trim()) {
        e.target.classList.remove('invalid');
      }
    });
  }

}());
