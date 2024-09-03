const $lang = document.getElementById('language');


function changeLanguage() {
    setLanguage($lang.value);
    getLanguage();
}
    
$lang.addEventListener('change', changeLanguage);
    
function setLanguage(lang) {
    localStorage.setItem('language', lang);
}
     
function getLanguage() {

    let selectedLanguage;

    if (localStorage.getItem('language')) {
        $lang.value = localStorage.getItem('language');
        selectedLanguage = localStorage.getItem('language');
    } else {
        selectedLanguage = 'fr';
    }

   fetch('./languages/' + selectedLanguage + '.json')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
           let languageElements = document.querySelectorAll('.lang-element');
           let num = 0;
            for (let element of languageElements) {
                element.textContent = res.index.element.content[num];
                num++;
            }
   });
}
getLanguage();