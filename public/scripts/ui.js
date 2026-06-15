/* Shared per-page UI behaviors, data-attribute driven (no inline scripts).
   - Tabs:        .tabs > .tab-btn[data-tab]  toggles .tab-panel[data-tab] within the same .tab-group
   - Script lang: .lang-tabs > .lang-btn[data-lang] toggles .script-lang[data-lang] within the same .lang-group
   - Copy:        .copy-btn[data-copy-target] copies textContent of #id */
(function () {
  'use strict';

  function group(el, cls) {
    var p = el;
    while (p && !p.classList.contains(cls)) p = p.parentElement;
    return p || document;
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('button') : null;
    if (!t) return;

    // Tabs
    if (t.classList.contains('tab-btn') && t.hasAttribute('data-tab')) {
      var g = group(t, 'tab-group');
      g.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
      g.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
      t.classList.add('active');
      var panel = g.querySelector('.tab-panel[data-tab="' + t.getAttribute('data-tab') + '"]');
      if (panel) panel.classList.add('active');
      return;
    }

    // Script-language switch (independent of site language)
    if (t.classList.contains('lang-btn') && t.hasAttribute('data-lang')) {
      var lg = group(t, 'lang-group');
      lg.querySelectorAll('.lang-btn').forEach(function (b) { b.classList.remove('active'); });
      t.classList.add('active');
      var want = t.getAttribute('data-lang');
      lg.querySelectorAll('.script-lang').forEach(function (s) {
        s.style.display = (s.getAttribute('data-lang') === want) ? 'block' : 'none';
      });
      return;
    }

    // Copy
    if (t.classList.contains('copy-btn') && t.hasAttribute('data-copy-target')) {
      var el = document.getElementById(t.getAttribute('data-copy-target'));
      if (!el || !navigator.clipboard) return;
      navigator.clipboard.writeText(el.innerText).then(function () {
        var orig = t.getAttribute('data-label') || t.textContent;
        t.textContent = '✓';
        setTimeout(function () { t.textContent = orig; }, 2000);
      });
      return;
    }
  });
})();
