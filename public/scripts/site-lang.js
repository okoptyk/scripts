/* Site-language switcher (RU/UA/PL).
   Pages render all three languages; this toggles visibility + chrome.
   Data for nav/title/footer is injected per page via <body data-*> and
   the global window.__I18N__ object emitted by BaseLayout. */
(function () {
  'use strict';
  var LANGS = ['ru', 'ua', 'pl'];

  function apply(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'ru';
    document.documentElement.setAttribute('data-site-lang', lang);
    document.documentElement.lang = (lang === 'ua') ? 'uk' : lang;

    var I = window.__I18N__ || {};
    // nav labels
    document.querySelectorAll('.nav-links a[data-slug]').forEach(function (a) {
      var slug = a.getAttribute('data-slug');
      var ru = a.getAttribute('data-ru');
      if (lang === 'ru') { a.textContent = ru; return; }
      var dict = (I.nav && I.nav[lang]) || {};
      a.textContent = dict[slug] != null ? dict[slug] : ru;
    });
    // title
    if (I.titles && I.titles[lang]) document.title = I.titles[lang];
    // footer
    var note = document.querySelector('.site-footer-note');
    if (note && I.footer && I.footer[lang]) note.textContent = I.footer[lang];
    // active button
    document.querySelectorAll('.site-lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem('siteLang', lang); } catch (e) {}
  }

  window.setSiteLang = apply;

  function init() {
    var saved = 'ru';
    try { saved = localStorage.getItem('siteLang') || 'ru'; } catch (e) {}
    apply(saved);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
