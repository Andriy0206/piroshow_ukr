// Всі посилання меню
const menuLinks = document.querySelectorAll('.catalog__group-link');

// Всі категорії товарів
const allCategories = document.querySelectorAll('.catalog__category');

function showCategory(targetClass) {
  allCategories.forEach(category => {
    if (category.dataset.category === targetClass) {
      category.classList.remove('catalog__category--hidden');
    } else {
      category.classList.add('catalog__category--hidden');
    }
  });

  // Підсвічуємо активну кнопку
  menuLinks.forEach(link => {
    const linkClass = link.nextElementSibling.dataset.class;
    if (linkClass === targetClass) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// При натисканні на посилання меню
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetClass = link.nextElementSibling.dataset.class;
    showCategory(targetClass);
  });
});

// Початково показуємо лише "ДИМИ" і підсвічуємо кнопку
showCategory('smoke');
