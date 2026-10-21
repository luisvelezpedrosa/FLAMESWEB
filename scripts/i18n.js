// Localization: English (default), Spanish and Catalan.
// Pages load translations/common.js (menu, footer) and define a global
// `translations` object ({ en: {...}, es: {...}, ca: {...} }) before loading
// this script, and mark elements with:
//   data-i18n="key"                 -> replaces innerHTML
//   data-i18n-attr="alt:key;..."    -> replaces attributes
//   data-i18n-href="file_{LANG}.pdf" -> localized link ({LANG} = EN/ES/CA)
// Language is chosen from ?lang=, then localStorage, then English.

const validLanguages = ['en', 'ca', 'es'];
const languageNames = { en: 'English', es: 'Castellano', ca: 'Català' };

function switchLanguage(lang) {
    if (!validLanguages.includes(lang)) lang = 'en';
    try { localStorage.setItem('preferredLanguage', lang); } catch (e) {}
    document.documentElement.lang = lang;

    const strings = Object.assign({},
        typeof commonTranslations !== 'undefined' && commonTranslations[lang],
        typeof translations !== 'undefined' && translations[lang]);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (strings[key]) element.innerHTML = strings[key];
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        element.getAttribute('data-i18n-attr').split(';').forEach(pair => {
            const [attr, key] = pair.split(':').map(s => s.trim());
            if (attr && strings[key]) element.setAttribute(attr, strings[key]);
        });
    });

    document.querySelectorAll('[data-i18n-href]').forEach(element => {
        element.setAttribute('href', element.getAttribute('data-i18n-href').replace('{LANG}', lang.toUpperCase()));
    });

    if (strings.page_title) document.title = strings.page_title;

    const selector = document.getElementById('languageSelector');
    if (selector) selector.value = lang;
}

function createLanguageSelector() {
    const wrapper = document.createElement('div');
    wrapper.className = 'language-selector';
    const select = document.createElement('select');
    select.id = 'languageSelector';
    select.className = 'language-dropdown';
    select.setAttribute('aria-label', 'Language');
    validLanguages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = languageNames[lang];
        select.appendChild(option);
    });
    select.addEventListener('change', () => switchLanguage(select.value));
    wrapper.appendChild(select);
    document.body.appendChild(wrapper);
}

// Load preferred language on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    let lang;
    if (urlLang && validLanguages.includes(urlLang)) {
        lang = urlLang;
    } else {
        try { lang = localStorage.getItem('preferredLanguage'); } catch (e) {}
    }

    if (!document.getElementById('languageSelector')) createLanguageSelector();
    switchLanguage(lang || 'en');
});
