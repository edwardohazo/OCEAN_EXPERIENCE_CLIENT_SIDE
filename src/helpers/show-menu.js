document.querySelector('.body__header-nav--one-ul--one-li--two-a--one').addEventListener('click', function (e) {
    e.preventDefault();
    const menu = document.querySelector('.body__header-nav--one-ul--one-li--two-ul--one');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});