export const initAnimations = () => {

  // Loader
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.querySelector('.loader-wrapper');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }
    }, 2000);
  });

  // Scroll Header
  const handleScroll = () => {
    const header = document.querySelector('.header');
    if (!header) return;

    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Smooth Scroll
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    });
  });

  // Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const createObserver = (selector) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, index * 200);
        }
      });
    }, observerOptions);

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  };

  createObserver('.project-card');
  createObserver('.timeline-content');
  createObserver('.achievement-card');

  // cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};