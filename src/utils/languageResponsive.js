const $langResponsive = document.getElementById('language-responsive');


function changeLanguage() {
        setLanguage($langResponsive.value);
        getLanguage();
}
    
function setLanguage(lang) {
    localStorage.setItem('language', lang);
}

function getLanguage() {

    let selectedLanguage;
    let body = document.querySelector('body');

    if (localStorage.getItem('language')) {
        $langResponsive.value = localStorage.getItem('language');
        selectedLanguage = localStorage.getItem('language');
    } else {
        selectedLanguage = 'fr';
    }

   fetch('../languages/' + selectedLanguage + '.json')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
                 let languageElements = document.querySelectorAll('.lang-element');
                 let num = 0;

                if (body.classList.contains('body-snorkel')) {
                    for (let element of languageElements) {
                        element.textContent = res.snorkel.element.content[num];
                        num++;
                    }
                }  
                else if (body.classList.contains('body-diving-trip')) {
                    for (let element of languageElements) {
                        element.textContent = res.divingTrip.element.content[num];
                        num++;
                    }
                }  
                else if (body.classList.contains('body-boat-trip')) {
                    for (let element of languageElements) {
                        element.textContent = res.boatTrip.element.content[num];
                        num++;
                    }
                }
                else if (body.classList.contains('body-contact')) {
                    for (let element of languageElements) {
                        element.textContent = res.contact.element.content[num];
                        num++;
                    }
                }
                else if (body.classList.contains('body-book')) {
                    for (let element of languageElements) {
                        element.textContent = res.book.element.content[num];
                        num++;
                    }
                }
                else if (body.classList.contains('body-placebooking')) {
                    for (let element of languageElements) {
                        element.textContent = res.placebooking.element.content[num];
                        num++;
                    }
                }
                else if (body.classList.contains('body-placeorder')) {
                    for (let element of languageElements) {
                        element.textContent = res.placeorder.element.content[num];
                        num++;
                    }
                }
                else if (body.classList.contains('body-order')) {
                    for (let element of languageElements) {
                        element.textContent = res.order.element.content[num];
                        num++;
                    }
                }
                else if (body.classList.contains('body-payment')) {
                    for (let element of languageElements) {
                        element.textContent = res.payment.element.content[num];
                        num++;
                    }
                }
                else if (body.classList.contains('body-day')) {
                    for (let element of languageElements) {
                        element.textContent = res.day.element.content[num];
                        num++;
                    }
                }
         });
}
$langResponsive.addEventListener('change', changeLanguage);
getLanguage();