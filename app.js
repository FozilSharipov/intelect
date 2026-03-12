(function () {
  'use strict';

  const slides = Array.from(document.querySelectorAll('[data-slide]'));
  const prevButton = document.getElementById('prevSlide');
  const nextButton = document.getElementById('nextSlide');
  const searchInput = document.getElementById('courseSearch');
  const searchMeta = document.getElementById('searchMeta');
  const courseCards = Array.from(document.querySelectorAll('[data-course]'));
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const metricCounters = Array.from(document.querySelectorAll('[data-counter]'));

  let currentSlide = 0;
  let sliderTimer = null;

  function showSlide(index) {
    slides.forEach(function (slide) {
      slide.classList.remove('active');
    });

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function resetSliderTimer() {
    if (sliderTimer) {
      clearInterval(sliderTimer);
    }

    sliderTimer = setInterval(nextSlide, 5000);
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightText(el, query) {
    const original = el.dataset.original || el.textContent;
    if (!query) {
      el.innerHTML = original;
      return;
    }

    const safeQuery = escapeRegExp(query);
    const regex = new RegExp('(' + safeQuery + ')', 'gi');
    el.innerHTML = original.replace(regex, '<mark>$1</mark>');
  }

  function filterCourses() {
    const query = searchInput.value.trim().toLowerCase();
    let matched = 0;

    courseCards.forEach(function (card) {
      const heading = card.querySelector('h3');
      const text = card.querySelector('p');
      const raw = ((heading.dataset.original || '') + ' ' + (text.dataset.original || '')).toLowerCase();

      highlightText(heading, query);
      highlightText(text, query);

      const isMatch = query === '' || raw.indexOf(query) !== -1;
      card.style.display = isMatch ? '' : 'none';
      card.classList.toggle('match', query !== '' && isMatch);

      if (isMatch) {
        matched += 1;
      }
    });

    if (!query) {
      searchMeta.textContent = 'Показаны все курсы.';
      return;
    }

    searchMeta.textContent = matched > 0
      ? 'Найдено курсов: ' + matched
      : 'Совпадений не найдено. Попробуйте другой запрос.';
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const program = String(formData.get('program') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !program || !email || !message) {
      formStatus.textContent = 'Заполните все поля формы.';
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      formStatus.textContent = 'Введите корректный email.';
      return;
    }

    formStatus.textContent = 'Заявка по направлению успешно отправлена. Мы свяжемся с вами в ближайшее время.';
    contactForm.reset();
  }

  function setupMenu() {
    menuToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function animateCounter(el) {
    const target = Number(el.dataset.count || 0);
    const divisor = Number(el.dataset.divisor || 1);
    const decimals = Number(el.dataset.decimals || 0);
    const prefix = String(el.dataset.prefix || '');
    const suffix = String(el.dataset.suffix || '');
    const duration = 1300;
    const startTime = performance.now();

    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const scaled = current / divisor;
      const value = scaled.toFixed(decimals);
      el.textContent = prefix + value + suffix;

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }

  function setupMetrics() {
    if (metricCounters.length === 0) {
      return;
    }

    const observed = new WeakSet();
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !observed.has(entry.target)) {
          observed.add(entry.target);
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    metricCounters.forEach(function (item) {
      observer.observe(item);
    });
  }

  function init() {
    if (slides.length > 0) {
      showSlide(0);
      resetSliderTimer();
      nextButton.addEventListener('click', function () {
        nextSlide();
        resetSliderTimer();
      });
      prevButton.addEventListener('click', function () {
        prevSlide();
        resetSliderTimer();
      });
    }

    if (window.SmoothScroll) {
      new SmoothScroll('.main-nav a[href*="#"]', {
        speed: 700,
        speedAsDuration: true,
        offset: 68,
        updateURL: false
      });
    }

    if (window.AOS) {
      AOS.init({
        duration: 650,
        once: true,
        easing: 'ease-out-cubic'
      });
    }

    searchInput.addEventListener('input', filterCourses);
    contactForm.addEventListener('submit', handleFormSubmit);
    setupMenu();
    setupMetrics();
  }

  init();
})();
