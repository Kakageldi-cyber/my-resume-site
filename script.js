// Плавная прокрутка для навигации
document.addEventListener('DOMContentLoaded', function() {
  // Кнопка "Наверх"
  const backToTop = document.getElementById('backToTop');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Анимация появления элементов при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // Наблюдаем за всеми секциями
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Добавляем текущий год в футер
  const currentYear = new Date().getFullYear();
  document.querySelector('footer p:first-child').textContent = 
    `© ${currentYear} Какагельды Аталов. Все права защищены.`;
  
  console.log('Резюме загружено успешно!');
});

// Анимация прогресс-баров
function animateSkills() {
  const skillProgresses = document.querySelectorAll('.skill-progress');
  
  skillProgresses.forEach(progress => {
    const width = progress.style.width;
    progress.style.width = '0';
    
    setTimeout(() => {
      progress.style.transition = 'width 1.5s ease';
      progress.style.width = width;
    }, 500);
  });
}

// Запускаем анимацию при загрузке
window.addEventListener('load', animateSkills);