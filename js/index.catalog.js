// Всі посилання меню
const menuLinks = document.querySelectorAll('.catalog__group-link');

// Всі категорії товарів
const allCategories = document.querySelectorAll('.catalog__category');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // щоб не стрибало до #id

    const targetClass = link.nextElementSibling.dataset.class; // беремо data-class з div поруч

    allCategories.forEach(category => {
      if (targetClass === 'all' || category.dataset.category === targetClass) {
        category.style.display = 'flex'; // або 'block', залежить від CSS
      } else {
        category.style.display = 'none';
      }
    });
  });
});
