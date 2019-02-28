// Declare variables
var toggleMenu = document.getElementsByClassName('toggle__menu')[0];
var servicesHeader = document.getElementsByClassName("services__range")[0];
var servicesImage = document.getElementsByClassName("services__image")[0];
var servicesDarken = document.getElementsByClassName("services__darken")[0];
var navItems = document.getElementsByClassName("nav__items")[0];
var navBox = document.getElementsByClassName("nav__box")[0];
var navCheckbox = document.getElementsByClassName("nav__checkbox")[0];
var englishRadio = document.getElementsByClassName("english__radio")[0];
var deutchRadio = document.getElementsByClassName("deutch__radio")[0];


// Function for toggling menu on mobile
toggleMenu.addEventListener('click', function (e) {
    if (navItems.style.display === 'none') {
        navItems.classList.add('nav__items--active');
        navBox.classList.add('nav__box--active');
        navItems.style.display = 'block';
        navBox.style.display = 'block';
        navCheckbox.style.display = 'block';
        toggleMenu.style.transform = 'rotate(180deg)';
        servicesHeader.style.visibility = "hidden";
        servicesImage.style.visibility = "hidden";
        servicesDarken.style.visibility = "hidden";    
    }
    else {
        navItems.style.display = 'none';
        navBox.style.display = 'none';
        navCheckbox.style.display = 'none';
        navItems.classList.remove('nav__items--active');
        navBox.classList.remove('nav__box--active');
        toggleMenu.style.transform = 'rotate(90deg)';
        servicesHeader.style.visibility = "visible";
        servicesImage.style.visibility = "visible";
        servicesDarken.style.visibility = "visible";
    }
    e.preventDefault();
})








