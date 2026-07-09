/* ============================================================
   Кнопки «Копировать» на репликах консультанта
   ------------------------------------------------------------
   Автоматически добавляет кнопку в каждую .msg.consultant внутри
   области, указанной в body[data-copy]:
     data-copy="all"            — вся страница
     data-copy="#tab-messenger" — только указанный контейнер
     (селектор может совпасть с несколькими контейнерами — кнопки добавятся во все)
   Подпись кнопки подбирается под язык блока скрипта (ru/ua/pl).
   Не зависит от переключателей языка скриптов и языка сайта.
   ============================================================ */
(function () {
  'use strict';

  var LABELS = { ru: 'Копировать', ua: 'Копіювати', pl: 'Kopiuj' };

  /* Определяем язык по id ближайшего блока-обёртки (lang-ua, msg-pl, main-ru …) */
  function detectLang(el) {
    var p = el;
    while (p && p !== document.body) {
      var id = p.id || '';
      if (/(^|-)ru$/.test(id)) return 'ru';
      if (/(^|-)ua$/.test(id)) return 'ua';
      if (/(^|-)pl$/.test(id)) return 'pl';
      p = p.parentElement;
    }
    return 'ru';
  }

  function copyFrom(msg, btn) {
    var clone = msg.cloneNode(true);
    clone.querySelectorAll('.msg-label, .copy-btn, .note').forEach(function (e) { e.remove(); });
    var text = clone.innerText
      .replace(/ /g, ' ')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    if (!navigator.clipboard) { return; }
    navigator.clipboard.writeText(text).then(function () {
      var orig = btn.getAttribute('data-label') || 'Копировать';
      btn.textContent = '✓';
      setTimeout(function () { btn.textContent = orig; }, 2000);
    });
  }

  function addButtons(root) {
    if (!root) return;
    root.querySelectorAll('.msg.consultant').forEach(function (msg) {
      if (msg.querySelector(':scope > .copy-btn')) return;  // не дублируем
      var label = LABELS[detectLang(msg)] || LABELS.ru;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.textContent = label;
      btn.setAttribute('data-label', label);
      btn.addEventListener('click', function () { copyFrom(msg, btn); });
      msg.appendChild(btn);
    });
  }

  function init() {
    var sel = document.body.getAttribute('data-copy');
    if (!sel) return;
    if (sel === 'all') { addButtons(document); return; }
    // Селектор может совпасть с несколькими контейнерами (несколько вкладок).
    document.querySelectorAll(sel).forEach(addButtons);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
