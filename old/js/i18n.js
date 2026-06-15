/* ============================================================
   Общесайтовый переключатель языка (RU / UA / PL)
   ------------------------------------------------------------
   Переводит ИНТЕРФЕЙС и описательные тексты сайта:
   навигацию, заголовки, метки, инфо-блоки, подсказки, кнопки,
   футер и тексты главной страницы.

   НЕ трогает блоки скриптов (диалоги): у них собственные кнопки
   RU/UA/PL (switchLang*, switchTab и т.п.). Этот модуль работает
   только с элементами, помеченными [data-i18n], а также с
   навигацией и <title>. Состояние хранится в localStorage.siteLang.
   Русская версия восстанавливается из исходного DOM (снимок при
   загрузке), поэтому в словаре заданы только ua и pl.
   ============================================================ */
(function () {
  'use strict';

  var I18N = {

    /* ── Навигация (по href). RU берётся из исходного DOM ── */
    nav: {
      ua: {
        'index.html': 'Головна',
        'kvалификация.html': 'Кваліфікація',
        'poland.html': 'Запис',
        'podtverzdenie.html': 'Підтвердження',
        'kommunikaciya.html': 'У салоні',
        'prodazha-online.html': 'Онлайн-продажі',
        'gotovnost-zakaza.html': 'Готовність замовлення',
        'povtornye-prodazhi.html': 'Повторні продажі'
      },
      pl: {
        'index.html': 'Strona główna',
        'kvалификация.html': 'Kwalifikacja',
        'poland.html': 'Rejestracja',
        'podtverzdenie.html': 'Potwierdzenie',
        'kommunikaciya.html': 'W salonie',
        'prodazha-online.html': 'Sprzedaż online',
        'gotovnost-zakaza.html': 'Gotowość zamówienia',
        'povtornye-prodazhi.html': 'Sprzedaż ponowna'
      }
    },

    /* ── Подпись в футере ── */
    footerNote: {
      ru: '© OkOptyk · Скрипты для менеджеров',
      ua: '© OkOptyk · Скрипти для менеджерів',
      pl: '© OkOptyk · Skrypty dla menedżerów'
    },

    /* ── <title> по страницам. RU берётся из исходного DOM ── */
    titles: {
      index:   { ua: 'Скрипти · OkOptyk', pl: 'Skrypty · OkOptyk' },
      poland:  { ua: 'Запис на візит · OkOptyk', pl: 'Rejestracja na wizytę · OkOptyk' },
      kval:    { ua: 'Кваліфікація клієнта · Скрипти', pl: 'Kwalifikacja klienta · Skrypty' },
      podtv:   { ua: 'Підтвердження візиту · Скрипти', pl: 'Potwierdzenie wizyty · Skrypty' },
      komm:    { ua: 'Первинна комунікація в салоні · Скрипти', pl: 'Pierwszy kontakt w salonie · Skrypty' },
      prod:    { ua: 'Продаж окулярів онлайн · Скрипти', pl: 'Sprzedaż okularów online · Skrypty' },
      gotov:   { ua: 'Готовність замовлення · Скрипти', pl: 'Gotowość zamówienia · Skrypty' },
      povtor:  { ua: 'Повторні продажі · Скрипти', pl: 'Sprzedaż ponowna · Skrypty' }
    },

    /* ── Тексты по страницам и ключам [data-i18n] ── */
    pages: {

      /* ═══════════ ГЛАВНАЯ ═══════════ */
      index: {
        hero: {
          ua: `<h1>Скрипти для менеджерів</h1><p>Посібник із роботи з клієнтами для мережі оптик<br><strong>OkOptyk</strong></p>`,
          pl: `<h1>Skrypty dla menedżerów</h1><p>Przewodnik po obsłudze klientów dla sieci salonów optycznych<br><strong>OkOptyk</strong></p>`
        },
        intro: {
          ua: `<strong>Чому скрипти такі важливі?</strong><br><br>За кожним дзвінком чи повідомленням — жива людина. Хтось хоче краще бачити своїх дітей. Хтось нарешті наважився подбати про очі після довгих років відкладання. Хтось хвилюється, бо не знає, що на нього чекає в салоні.<br><br>Скрипти — це не жорсткий сценарій, а інструмент уваги. Вони допомагають одразу задати правильний тон: не квапити клієнта, не губитися в його запитаннях, показати, що ви поруч і готові допомогти. Коли клієнт відчуває, що його розуміють — він довіряє. А довіра — це основа тривалих стосунків із кожною людиною, яка переступає поріг нашого салону.<br><br><em>Використовуйте скрипти як орієнтир. Додавайте тепло, чуйність і свою особистість — саме це перетворює добре спілкування на незабутнє.</em>`,
          pl: `<strong>Dlaczego skrypty są tak ważne?</strong><br><br>Za każdym telefonem czy wiadomością stoi żywy człowiek. Ktoś chce lepiej widzieć swoje dzieci. Ktoś wreszcie zdecydował się zadbać o wzrok po latach odkładania. Ktoś się denerwuje, bo nie wie, co czeka go w salonie.<br><br>Skrypty to nie sztywny scenariusz, lecz narzędzie uważności. Pomagają od razu nadać właściwy ton: nie poganiać klienta, nie gubić się w jego pytaniach, pokazać, że jesteśmy obok i gotowi pomóc. Gdy klient czuje, że jest rozumiany — ufa. A zaufanie to podstawa długiej relacji z każdym, kto przekracza próg naszego salonu.<br><br><em>Traktuj skrypty jako drogowskaz. Dodawaj ciepło, wrażliwość i własną osobowość — to właśnie zamienia dobrą rozmowę w niezapomnianą.</em>`
        },
        slogan: {
          ua: `Зроблене з любов'ю — носи з гордістю!`,
          pl: `Zrobione z miłością — noś z dumą!`
        },
        razdely: { ua: `Розділи`, pl: `Sekcje` },
        subtitle: {
          ua: `Оберіть потрібний етап роботи з клієнтом:`,
          pl: `Wybierz odpowiedni etap pracy z klientem:`
        },
        cards: {
          ua: `<a class="nav-card" href="kvалификация.html"><div class="nav-card-icon">🔍</div><div class="nav-card-title">Кваліфікація клієнта</div><div class="nav-card-desc">Визначаємо потребу клієнта та спрямовуємо його правильним шляхом.</div></a>
    <a class="nav-card" href="poland.html"><div class="nav-card-icon"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="30" height="27" rx="4" fill="#f3f7db" stroke="#8a9e09" stroke-width="2"/><rect x="3" y="12" width="30" height="4" fill="#8a9e09"/><rect x="10" y="2" width="3" height="8" rx="1.5" fill="#8a9e09"/><rect x="23" y="2" width="3" height="8" rx="1.5" fill="#8a9e09"/><rect x="9" y="20" width="5" height="5" rx="1" fill="#AFCA0B" opacity=".7"/><rect x="16" y="20" width="5" height="5" rx="1" fill="#AFCA0B" opacity=".7"/><rect x="23" y="20" width="5" height="5" rx="1" fill="#AFCA0B" opacity=".7"/></svg></div><div class="nav-card-title">Запис на візит</div><div class="nav-card-desc">Узгоджуємо дату, час та адресу салону.</div></a>
    <a class="nav-card" href="podtverzdenie.html"><div class="nav-card-icon">✅</div><div class="nav-card-title">Підтвердження візиту</div><div class="nav-card-desc">Нагадуємо клієнту про запис, уточнюємо деталі та оперативно переносимо за потреби.</div></a>
    <a class="nav-card" href="kommunikaciya.html"><div class="nav-card-icon">🏪</div><div class="nav-card-title">Первинна комунікація в салоні</div><div class="nav-card-desc">Зустрічаємо клієнта, виявляємо потребу та спрямовуємо до потрібного сценарію обслуговування.</div></a>
    <a class="nav-card" href="prodazha-online.html"><div class="nav-card-icon">💻</div><div class="nav-card-title">Продаж окулярів онлайн</div><div class="nav-card-desc">Допомагаємо клієнту обрати та оформити замовлення дистанційно.</div></a>
    <a class="nav-card" href="gotovnost-zakaza.html"><div class="nav-card-icon">📦</div><div class="nav-card-title">Повідомлення про готовність замовлення</div><div class="nav-card-desc">Повідомляємо клієнту, що окуляри готові, та узгоджуємо зручний час для візиту.</div></a>
    <a class="nav-card" href="povtornye-prodazhi.html"><div class="nav-card-icon">🔁</div><div class="nav-card-title">Повторні продажі</div><div class="nav-card-desc">Дбаємо про клієнта після покупки та реалізуємо потенціал повторного продажу.</div></a>`,
          pl: `<a class="nav-card" href="kvалификация.html"><div class="nav-card-icon">🔍</div><div class="nav-card-title">Kwalifikacja klienta</div><div class="nav-card-desc">Ustalamy potrzebę klienta i kierujemy go właściwą ścieżką.</div></a>
    <a class="nav-card" href="poland.html"><div class="nav-card-icon"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="30" height="27" rx="4" fill="#f3f7db" stroke="#8a9e09" stroke-width="2"/><rect x="3" y="12" width="30" height="4" fill="#8a9e09"/><rect x="10" y="2" width="3" height="8" rx="1.5" fill="#8a9e09"/><rect x="23" y="2" width="3" height="8" rx="1.5" fill="#8a9e09"/><rect x="9" y="20" width="5" height="5" rx="1" fill="#AFCA0B" opacity=".7"/><rect x="16" y="20" width="5" height="5" rx="1" fill="#AFCA0B" opacity=".7"/><rect x="23" y="20" width="5" height="5" rx="1" fill="#AFCA0B" opacity=".7"/></svg></div><div class="nav-card-title">Rejestracja na wizytę</div><div class="nav-card-desc">Ustalamy datę, godzinę i adres salonu.</div></a>
    <a class="nav-card" href="podtverzdenie.html"><div class="nav-card-icon">✅</div><div class="nav-card-title">Potwierdzenie wizyty</div><div class="nav-card-desc">Przypominamy klientowi o wizycie, doprecyzowujemy szczegóły i w razie potrzeby szybko przekładamy.</div></a>
    <a class="nav-card" href="kommunikaciya.html"><div class="nav-card-icon">🏪</div><div class="nav-card-title">Pierwszy kontakt w salonie</div><div class="nav-card-desc">Witamy klienta, ustalamy potrzebę i kierujemy do właściwego scenariusza obsługi.</div></a>
    <a class="nav-card" href="prodazha-online.html"><div class="nav-card-icon">💻</div><div class="nav-card-title">Sprzedaż okularów online</div><div class="nav-card-desc">Pomagamy klientowi wybrać i złożyć zamówienie zdalnie.</div></a>
    <a class="nav-card" href="gotovnost-zakaza.html"><div class="nav-card-icon">📦</div><div class="nav-card-title">Powiadomienie o gotowości zamówienia</div><div class="nav-card-desc">Informujemy klienta, że okulary są gotowe, i ustalamy dogodny termin wizyty.</div></a>
    <a class="nav-card" href="povtornye-prodazhi.html"><div class="nav-card-icon">🔁</div><div class="nav-card-title">Sprzedaż ponowna</div><div class="nav-card-desc">Dbamy o klienta po zakupie i wykorzystujemy potencjał ponownej sprzedaży.</div></a>`
        },
        principles: {
          ua: `<h3 style="font-size:1rem; color:var(--primary-dark); margin-bottom:12px;">💡 Три принципи роботи з клієнтом</h3><div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; text-align:center;"><div><strong style="font-size:.9rem;">Слухай, не продавай</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">Спершу зрозуміти задачу клієнта — потім пропонувати рішення. Не навпаки.</p></div><div><strong style="font-size:.9rem;">Продавай візит, а не товар</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">Телефоном і в чаті неможливо приміряти оправу. Мета — привести людину в салон.</p></div><div><strong style="font-size:.9rem;">Давай вибір без вибору</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">«Вам зручніше в будній чи у вихідний?» — так клієнту легше ухвалити рішення.</p></div></div>`,
          pl: `<h3 style="font-size:1rem; color:var(--primary-dark); margin-bottom:12px;">💡 Trzy zasady pracy z klientem</h3><div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; text-align:center;"><div><strong style="font-size:.9rem;">Słuchaj, nie sprzedawaj</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">Najpierw zrozum potrzebę klienta — potem zaproponuj rozwiązanie. Nie odwrotnie.</p></div><div><strong style="font-size:.9rem;">Sprzedawaj wizytę, nie towar</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">Przez telefon i czat nie da się przymierzyć oprawy. Cel — sprowadzić osobę do salonu.</p></div><div><strong style="font-size:.9rem;">Dawaj wybór bez wyboru</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">«Wygodniej w dzień powszedni czy w weekend?» — tak klientowi łatwiej podjąć decyzję.</p></div></div>`
        }
      },

      /* ═══════════ ЗАПИСЬ (PL) ═══════════ */
      poland: {
        header: {
          ua: `<h1>Запис на візит</h1><p>Запис клієнтів на комплексну перевірку зору</p>`,
          pl: `<h1>Rejestracja na wizytę</h1><p>Rejestracja klientów na kompleksowe badanie wzroku</p>`
        },
        meta: {
          ua: `<div class="meta-item"><span class="meta-label">ЦКП</span><span class="meta-value">Дата і час узгоджені, запис в АРМ зафіксований</span></div><div class="meta-item"><span class="meta-label">Вартість (з окулярами)</span><span class="meta-value">99 zł</span></div><div class="meta-item"><span class="meta-label">Вартість (лише консультація)</span><span class="meta-value">199 zł</span></div><div class="meta-item"><span class="meta-label">Адреса</span><span class="meta-value">Jeleniogórska 1/3 (навпроти Aldi)</span></div><div class="meta-item"><span class="meta-label">Телефон</span><span class="meta-value">+48 732 432 925</span></div><div class="meta-item"><span class="meta-label">Дедлайн</span><span class="meta-value">1 робочий день</span></div>`,
          pl: `<div class="meta-item"><span class="meta-label">Cel etapu</span><span class="meta-value">Data i godzina ustalone, rejestracja w systemie zapisana</span></div><div class="meta-item"><span class="meta-label">Koszt (z okularami)</span><span class="meta-value">99 zł</span></div><div class="meta-item"><span class="meta-label">Koszt (tylko konsultacja)</span><span class="meta-value">199 zł</span></div><div class="meta-item"><span class="meta-label">Adres</span><span class="meta-value">Jeleniogórska 1/3 (naprzeciwko Aldi)</span></div><div class="meta-item"><span class="meta-label">Telefon</span><span class="meta-value">+48 732 432 925</span></div><div class="meta-item"><span class="meta-label">Termin</span><span class="meta-value">1 dzień roboczy</span></div>`
        },
        intro: {
          ua: `<strong>Комплексна перевірка зору включає:</strong> комп'ютерну діагностику (короткозорість, далекозорість, астигматизм) · огляд очного дна · перевірку гостроти зору · висновок офтальмолога · за потреби — рецепт і план лікування.`,
          pl: `<strong>Kompleksowe badanie wzroku obejmuje:</strong> diagnostykę komputerową (krótkowzroczność, dalekowzroczność, astygmatyzm) · badanie dna oka · sprawdzenie ostrości wzroku · orzeczenie okulisty · w razie potrzeby — receptę i plan leczenia.`
        },
        tip: {
          ua: `<h4>💡 Важливо після запису</h4><ul><li>Зафіксувати запис у системі АРМ та картці CRM.</li><li>Перевести угоду на етап <strong>«Візит заплановано»</strong>.</li><li>За день до візиту надіслати підтвердження — перевести на етап <strong>«Візит підтверджено»</strong>.</li></ul>`,
          pl: `<h4>💡 Ważne po rejestracji</h4><ul><li>Zapisać rejestrację w systemie ARM i karcie CRM.</li><li>Przenieść transakcję do etapu <strong>«Wizyta zaplanowana»</strong>.</li><li>Dzień przed wizytą wysłać potwierdzenie — przenieść do etapu <strong>«Wizyta potwierdzona»</strong>.</li></ul>`
        },
        nextbtn: {
          ua: `Наступний крок: Підтвердження візиту →`,
          pl: `Następny krok: Potwierdzenie wizyty →`
        }
      },

      /* ═══════════ КВАЛИФИКАЦИЯ ═══════════ */
      kval: {
        header: {
          ua: `<h1>Кваліфікація клієнта</h1><p>Перший контакт — визначаємо потребу клієнта та обираємо подальший сценарій роботи</p>`,
          pl: `<h1>Kwalifikacja klienta</h1><p>Pierwszy kontakt — ustalamy potrzebę klienta i wybieramy dalszy scenariusz pracy</p>`
        },
        meta: {
          ua: `<div class="meta-item"><span class="meta-label">ЦКП</span><span class="meta-value">Потреба визначена, сценарій обрано</span></div><div class="meta-item"><span class="meta-label">Дедлайн</span><span class="meta-value">1 робочий день</span></div><div class="meta-item"><span class="meta-label">Відповідальний</span><span class="meta-value">Продавець-консультант, Менеджер</span></div><div class="meta-item"><span class="meta-label">Канали</span><span class="meta-value">Дзвінок · Месенджер</span></div>`,
          pl: `<div class="meta-item"><span class="meta-label">Cel etapu</span><span class="meta-value">Potrzeba ustalona, scenariusz wybrany</span></div><div class="meta-item"><span class="meta-label">Termin</span><span class="meta-value">1 dzień roboczy</span></div><div class="meta-item"><span class="meta-label">Odpowiedzialny</span><span class="meta-value">Doradca klienta, Menedżer</span></div><div class="meta-item"><span class="meta-label">Kanały</span><span class="meta-value">Telefon · Komunikator</span></div>`
        },
        'tab-msg':   { ua: `💬 Месенджер`, pl: `💬 Komunikator` },
        'tab-phone': { ua: `📞 Дзвінок`, pl: `📞 Telefon` },
        rules: {
          ua: `<strong>Головні правила онлайн-спілкування:</strong><ul style="margin-top:8px;"><li><strong>Короткі повідомлення:</strong> жодних «простирадл» тексту. Одне повідомлення — одна думка та одне запитання в кінці.</li><li><strong>Візуалізація та посилання:</strong> активно використовуйте посилання на карту, онлайн-запис і фото/відео.</li><li><strong>Швидкість та залучення:</strong> чат легко закрити й забути, тому кожна відповідь має спонукати до дії.</li></ul>`,
          pl: `<strong>Główne zasady komunikacji online:</strong><ul style="margin-top:8px;"><li><strong>Krótkie wiadomości:</strong> żadnych «ścian» tekstu. Jedna wiadomość — jedna myśl i jedno pytanie na końcu.</li><li><strong>Wizualizacja i linki:</strong> aktywnie korzystaj z linków do mapy, rejestracji online i zdjęć/wideo.</li><li><strong>Szybkość i zaangażowanie:</strong> czat łatwo zamknąć i zapomnieć, dlatego każda odpowiedź powinna zachęcać do działania.</li></ul>`
        },
        next: {
          ua: `<div class="stage-path"><span class="stage-current">Кваліфікація</span> → <span>Запис → Підтвердження → У салоні → Готовність замовлення</span></div><a class="next-stage-btn" href="poland.html">Наступний крок: Запис на візит →</a>`,
          pl: `<div class="stage-path"><span class="stage-current">Kwalifikacja</span> → <span>Rejestracja → Potwierdzenie → W salonie → Gotowość zamówienia</span></div><a class="next-stage-btn" href="poland.html">Następny krok: Rejestracja na wizytę →</a>`
        }
      },

      /* ═══════════ ПОДТВЕРЖДЕНИЕ ═══════════ */
      podtv: {
        header: {
          ua: `<h1>Підтвердження візиту</h1><p>Нагадуємо клієнту про запис, уточнюємо деталі та оперативно переносимо за потреби</p>`,
          pl: `<h1>Potwierdzenie wizyty</h1><p>Przypominamy klientowi o wizycie, doprecyzowujemy szczegóły i w razie potrzeby szybko przekładamy</p>`
        },
        meta: {
          ua: `<div class="meta-item"><span class="meta-label">ЦКП</span><span class="meta-value">Клієнт підтвердив візит (або перенесення узгоджено)</span></div><div class="meta-item"><span class="meta-label">Початкова точка</span><span class="meta-value">Дата і час узгоджені, запис зафіксований</span></div><div class="meta-item"><span class="meta-label">Дедлайн</span><span class="meta-value">1 робочий день</span></div><div class="meta-item"><span class="meta-label">Відповідальний</span><span class="meta-value">Продавець-консультант, Менеджер</span></div>`,
          pl: `<div class="meta-item"><span class="meta-label">Cel etapu</span><span class="meta-value">Klient potwierdził wizytę (lub ustalono przełożenie)</span></div><div class="meta-item"><span class="meta-label">Punkt startowy</span><span class="meta-value">Data i godzina ustalone, rejestracja zapisana</span></div><div class="meta-item"><span class="meta-label">Termin</span><span class="meta-value">1 dzień roboczy</span></div><div class="meta-item"><span class="meta-label">Odpowiedzialny</span><span class="meta-value">Doradca klienta, Menedżer</span></div>`
        },
        'tab-msg':  { ua: `💬 Месенджер`, pl: `💬 Komunikator` },
        'tab-call': { ua: `📞 Дзвінок`, pl: `📞 Telefon` },
        'sttl-msg':  { ua: `💬 Шаблон повідомлення-підтвердження`, pl: `💬 Szablon wiadomości z potwierdzeniem` },
        'intro-msg': {
          ua: `Надсилається за <strong>1 день до візиту</strong>. Повідомлення має містити всі деталі, щоб у клієнта не виникало зайвих запитань.`,
          pl: `Wysyłane na <strong>1 dzień przed wizytą</strong>. Wiadomość powinna zawierać wszystkie szczegóły, aby klient nie miał dodatkowych pytań.`
        },
        'sttl-call': { ua: `📞 Скрипт підтвердження візиту по телефону`, pl: `📞 Skrypt potwierdzenia wizyty przez telefon` },
        tip: {
          ua: `<h4>💡 Після підтвердження</h4><ul><li>Перевести угоду в CRM на етап <strong>«Візит підтверджено»</strong>.</li><li>Якщо клієнт не відповідає на дзвінок — надіслати шаблон повідомлення.</li><li>Якщо клієнт переніс — зафіксувати новий час в АРМ і знову перевести на етап «Візит заплановано».</li></ul>`,
          pl: `<h4>💡 Po potwierdzeniu</h4><ul><li>Przenieść transakcję w CRM do etapu <strong>«Wizyta potwierdzona»</strong>.</li><li>Jeśli klient nie odbiera — wysłać szablon wiadomości.</li><li>Jeśli klient przełożył — zapisać nowy termin w ARM i ponownie przenieść do etapu «Wizyta zaplanowana».</li></ul>`
        },
        next: {
          ua: `<div class="stage-path"><span class="stage-done">Кваліфікація → Запис →</span><span class="stage-current"> Підтвердження</span><span> → У салоні → Готовність замовлення</span></div><a class="next-stage-btn" href="kommunikaciya.html">Наступний крок: У салоні →</a>`,
          pl: `<div class="stage-path"><span class="stage-done">Kwalifikacja → Rejestracja →</span><span class="stage-current"> Potwierdzenie</span><span> → W salonie → Gotowość zamówienia</span></div><a class="next-stage-btn" href="kommunikaciya.html">Następny krok: W salonie →</a>`
        }
      },

      /* ═══════════ В САЛОНЕ ═══════════ */
      komm: {
        header: {
          ua: `<h1>Первинна комунікація в салоні</h1><p>Зустрічаємо клієнта, виявляємо потребу та спрямовуємо до потрібного сценарію обслуговування</p>`,
          pl: `<h1>Pierwszy kontakt w salonie</h1><p>Witamy klienta, ustalamy potrzebę i kierujemy do właściwego scenariusza obsługi</p>`
        },
        meta: {
          ua: `<div class="meta-item"><span class="meta-label">ЦКП</span><span class="meta-value">Потреба визначена, клієнта переведено на етап «Виріб підібрано»</span></div><div class="meta-item"><span class="meta-label">Початкова точка</span><span class="meta-value">Особистий візит клієнта в салон</span></div><div class="meta-item"><span class="meta-label">Дедлайн</span><span class="meta-value">1 робочий день</span></div><div class="meta-item"><span class="meta-label">Відповідальний</span><span class="meta-value">Продавець-консультант, Менеджер</span></div>`,
          pl: `<div class="meta-item"><span class="meta-label">Cel etapu</span><span class="meta-value">Potrzeba ustalona, klient przeniesiony do etapu «Wyrób dobrany»</span></div><div class="meta-item"><span class="meta-label">Punkt startowy</span><span class="meta-value">Osobista wizyta klienta w salonie</span></div><div class="meta-item"><span class="meta-label">Termin</span><span class="meta-value">1 dzień roboczy</span></div><div class="meta-item"><span class="meta-label">Odpowiedzialny</span><span class="meta-value">Doradca klienta, Menedżer</span></div>`
        },
        intro: {
          ua: `Цей скрипт застосовується у двох випадках: клієнт прийшов за записом (після воронки «Візит / консультація») або зайшов до салону без запису. В обох випадках завдання одне — зрозуміти потребу та перейти до одного з 5 сценаріїв.`,
          pl: `Ten skrypt stosuje się w dwóch sytuacjach: klient przyszedł umówiony (po lejku «Wizyta / konsultacja») lub wszedł do salonu bez rejestracji. W obu przypadkach cel jest jeden — zrozumieć potrzebę i przejść do jednego z 5 scenariuszy.`
        },
        checklist: {
          ua: `<h3>✅ Чек-лист для продавця-консультанта</h3><ul><li>Вислухати клієнта, <strong>не перебиваючи</strong>.</li><li>Чітко визначити один з 5 сценаріїв.</li><li>Отримати від клієнта чітке «Так, давайте підбирати» (ЦКП етапу).</li><li>Перевести статус угоди в CRM на етап <strong>«Виріб підібрано»</strong>.</li></ul>`,
          pl: `<h3>✅ Lista kontrolna dla doradcy klienta</h3><ul><li>Wysłuchać klienta, <strong>nie przerywając</strong>.</li><li>Jasno określić jeden z 5 scenariuszy.</li><li>Uzyskać od klienta wyraźne «Tak, dobierajmy» (cel etapu).</li><li>Zmienić status transakcji w CRM na etap <strong>«Wyrób dobrany»</strong>.</li></ul>`
        },
        next: {
          ua: `<div class="stage-path"><span class="stage-done">Кваліфікація → Запис → Підтвердження →</span><span class="stage-current"> У салоні</span><span> → Готовність замовлення</span></div><a class="next-stage-btn" href="gotovnost-zakaza.html">Наступний крок: Готовність замовлення →</a>`,
          pl: `<div class="stage-path"><span class="stage-done">Kwalifikacja → Rejestracja → Potwierdzenie →</span><span class="stage-current"> W salonie</span><span> → Gotowość zamówienia</span></div><a class="next-stage-btn" href="gotovnost-zakaza.html">Następny krok: Gotowość zamówienia →</a>`
        }
      },

      /* ═══════════ ОНЛАЙН-ПРОДАЖИ ═══════════ */
      prod: {
        header: {
          ua: `<h1>Продаж окулярів онлайн</h1><p>Допомагаємо клієнту обрати та оформити замовлення дистанційно — з доставкою по Польщі</p>`,
          pl: `<h1>Sprzedaż okularów online</h1><p>Pomagamy klientowi wybrać i złożyć zamówienie zdalnie — z dostawą na terenie Polski</p>`
        },
        'tab-main': { ua: `🛍 Основний сценарій`, pl: `🛍 Główny scenariusz` },
        'tab-lost': { ua: `😶 Клієнт зник`, pl: `😶 Klient zniknął` },
        'intro-main': {
          ua: `Клієнт пише сам і хоче замовити окуляри з доставкою. Завдання — допомогти підібрати оправу та оформити замовлення, не кваплячи клієнта.`,
          pl: `Klient pisze sam i chce zamówić okulary z dostawą. Zadanie — pomóc dobrać oprawę i złożyć zamówienie, nie poganiając klienta.`
        },
        'intro-lost': {
          ua: `Клієнт надіслав рецепт і перестав відповідати. Не тиснемо, але нагадуємо — м'яко та з користю для клієнта.`,
          pl: `Klient przysłał receptę i przestał odpowiadać. Nie naciskamy, ale przypominamy — delikatnie i z korzyścią dla klienta.`
        },
        'tip-lost': {
          ua: `<h4>💡 Принцип роботи з клієнтом, що «зник»</h4><ul><li>Не тиснемо й не квапимо — людина може бути зайнята або обмірковує.</li><li>Кожне нагадування додає цінність: добірка, розрахунок, запитання про вподобання.</li><li>Після 4-го дотику без відповіді — переносимо у відкладені та повертаємося за місяць.</li></ul>`,
          pl: `<h4>💡 Zasada pracy z «zaginionym» klientem</h4><ul><li>Nie naciskamy i nie poganiamy — osoba może być zajęta lub się zastanawia.</li><li>Każde przypomnienie wnosi wartość: propozycje, wycena, pytanie o preferencje.</li><li>Po 4. kontakcie bez odpowiedzi — przenosimy do odłożonych i wracamy za miesiąc.</li></ul>`
        },
        next: {
          ua: `<div class="stage-path"><span class="stage-done">Кваліфікація → Запис → Підтвердження → У салоні →</span><span class="stage-current"> Онлайн-продажі</span><span> → Готовність замовлення</span></div><a class="next-stage-btn" href="gotovnost-zakaza.html">Наступний крок: Готовність замовлення →</a>`,
          pl: `<div class="stage-path"><span class="stage-done">Kwalifikacja → Rejestracja → Potwierdzenie → W salonie →</span><span class="stage-current"> Sprzedaż online</span><span> → Gotowość zamówienia</span></div><a class="next-stage-btn" href="gotovnost-zakaza.html">Następny krok: Gotowość zamówienia →</a>`
        }
      },

      /* ═══════════ ГОТОВНОСТЬ ЗАКАЗА ═══════════ */
      gotov: {
        header: {
          ua: `<h1>Повідомлення про готовність замовлення</h1><p>Повідомляємо клієнту, що окуляри готові, та узгоджуємо зручний час для візиту</p>`,
          pl: `<h1>Powiadomienie o gotowości zamówienia</h1><p>Informujemy klienta, że okulary są gotowe, i ustalamy dogodny termin wizyty</p>`
        },
        meta: {
          ua: `<div class="meta-item"><span class="meta-label">ЦКП</span><span class="meta-value">Клієнт повідомлений, час візиту узгоджено</span></div><div class="meta-item"><span class="meta-label">Початкова точка</span><span class="meta-value">Готовий виріб передано в салон</span></div><div class="meta-item"><span class="meta-label">Етап CRM</span><span class="meta-value">«Клієнт повідомлений»</span></div><div class="meta-item"><span class="meta-label">Дедлайн</span><span class="meta-value">1 робочий день</span></div>`,
          pl: `<div class="meta-item"><span class="meta-label">Cel etapu</span><span class="meta-value">Klient powiadomiony, termin wizyty ustalony</span></div><div class="meta-item"><span class="meta-label">Punkt startowy</span><span class="meta-value">Gotowy wyrób przekazany do salonu</span></div><div class="meta-item"><span class="meta-label">Etap CRM</span><span class="meta-value">«Klient powiadomiony»</span></div><div class="meta-item"><span class="meta-label">Termin</span><span class="meta-value">1 dzień roboczy</span></div>`
        },
        'tab-msg':  { ua: `💬 Месенджер`, pl: `💬 Komunikator` },
        'tab-call': { ua: `📞 Дзвінок`, pl: `📞 Telefon` },
        'sttl-msg':  { ua: `💬 Шаблон повідомлення про готовність замовлення`, pl: `💬 Szablon wiadomości o gotowości zamówienia` },
        'intro-msg': {
          ua: `<strong>Важливо:</strong> повідомлення має містити всю технічну інформацію — де, до котрої години та що мати при собі.`,
          pl: `<strong>Ważne:</strong> wiadomość powinna zawierać wszystkie informacje techniczne — gdzie, do której godziny i co mieć przy sobie.`
        },
        'tip-msg': {
          ua: `<h4>💡 Лайфхаки на цьому етапі</h4><ul><li><strong>Цінність примірки при видачі.</strong> Оправи часто потребують дрібного підлаштування (підігнути завушники, поправити носоупори). Якщо клієнт просто забере пакет і піде — він може зіткнутися з дискомфортом удома.</li><li style="margin-top:10px;"><strong>Допродаж супутніх товарів.</strong> «До речі, до ваших нових лінз із захисним покриттям рекомендуємо взяти спрей-антифог та серветку з мікрофібри. Показати вам?»</li></ul>`,
          pl: `<h4>💡 Wskazówki na tym etapie</h4><ul><li><strong>Wartość przymiarki przy odbiorze.</strong> Oprawy często wymagają drobnej regulacji (dogięcie zauszników, poprawienie nosków). Jeśli klient po prostu zabierze paczkę i wyjdzie — może odczuwać dyskomfort w domu.</li><li style="margin-top:10px;"><strong>Dosprzedaż produktów uzupełniających.</strong> «Przy okazji, do nowych soczewek z powłoką polecamy spray przeciw zaparowaniu i ściereczkę z mikrofibry. Pokazać?»</li></ul>`
        },
        'sttl-call': { ua: `📞 Скрипт повідомлення клієнта по телефону`, pl: `📞 Skrypt powiadomienia klienta przez telefon` },
        'tip-call': {
          ua: `<h4>💡 Лайфхаки на цьому етапі</h4><ul><li><strong>Цінність примірки при видачі.</strong> Оправи часто потребують дрібного підлаштування. Якщо клієнт просто забере пакет і піде — він може зіткнутися з дискомфортом удома і вирішить, що окуляри зроблено погано.</li><li style="margin-top:10px;"><strong>Допродаж супутніх товарів.</strong> «До речі, до ваших нових лінз рекомендуємо взяти спрей-антифог та серветку з мікрофібри. Показати вам?»</li></ul>`,
          pl: `<h4>💡 Wskazówki na tym etapie</h4><ul><li><strong>Wartość przymiarki przy odbiorze.</strong> Oprawy często wymagają drobnej regulacji. Jeśli klient po prostu zabierze paczkę i wyjdzie — może odczuwać dyskomfort w domu i uznać, że okulary są źle wykonane.</li><li style="margin-top:10px;"><strong>Dosprzedaż produktów uzupełniających.</strong> «Przy okazji, do nowych soczewek polecamy spray przeciw zaparowaniu i ściereczkę z mikrofibry. Pokazać?»</li></ul>`
        },
        next: {
          ua: `<div class="stage-path"><span class="stage-done">Кваліфікація → Запис → Підтвердження → У салоні → Онлайн-продажі →</span><span class="stage-current"> Готовність замовлення</span><span> → Повторні продажі</span></div><a class="next-stage-btn" href="povtornye-prodazhi.html">Наступний крок: Повторні продажі →</a>`,
          pl: `<div class="stage-path"><span class="stage-done">Kwalifikacja → Rejestracja → Potwierdzenie → W salonie → Sprzedaż online →</span><span class="stage-current"> Gotowość zamówienia</span><span> → Sprzedaż ponowna</span></div><a class="next-stage-btn" href="povtornye-prodazhi.html">Następny krok: Sprzedaż ponowna →</a>`
        }
      },

      /* ═══════════ ПОВТОРНЫЕ ПРОДАЖИ ═══════════ */
      povtor: {
        header: {
          ua: `<h1>Повторні продажі</h1><p>Реалізуємо потенціал повторного продажу: турбота про клієнта після покупки</p>`,
          pl: `<h1>Sprzedaż ponowna</h1><p>Wykorzystujemy potencjał ponownej sprzedaży: troska o klienta po zakupie</p>`
        },
        meta: {
          ua: `<div class="meta-item"><span class="meta-label">ЦКП</span><span class="meta-value">Максимально реалізовано потенціал повторного продажу</span></div><div class="meta-item"><span class="meta-label">Початкова точка</span><span class="meta-value">По клієнту завершено угоду; створено нову заявку у воронці повторного продажу</span></div><div class="meta-item"><span class="meta-label">Дедлайн</span><span class="meta-value">30 / 60 / 90 / 120 / 150 / 180 / 180+ днів після покупки</span></div><div class="meta-item"><span class="meta-label">Відповідальний</span><span class="meta-value">Продавець-консультант, Менеджер</span></div>`,
          pl: `<div class="meta-item"><span class="meta-label">Cel etapu</span><span class="meta-value">Maksymalnie wykorzystany potencjał ponownej sprzedaży</span></div><div class="meta-item"><span class="meta-label">Punkt startowy</span><span class="meta-value">Transakcja z klientem zamknięta; utworzono nowe zgłoszenie w lejku ponownej sprzedaży</span></div><div class="meta-item"><span class="meta-label">Termin</span><span class="meta-value">30 / 60 / 90 / 120 / 150 / 180 / 180+ dni po zakupie</span></div><div class="meta-item"><span class="meta-label">Odpowiedzialny</span><span class="meta-value">Doradca klienta, Menedżer</span></div>`
        },
        intro: {
          ua: `Мета етапу — закрити клієнта на повторний продаж. Працюємо в три дотики за часом після покупки: спершу дбаємо про адаптацію, потім пропонуємо другу пару, і нарешті запрошуємо на плановий огляд. Кожен дотик — це користь для клієнта, а не тиск.`,
          pl: `Cel etapu — domknięcie ponownej sprzedaży. Działamy w trzech kontaktach rozłożonych w czasie po zakupie: najpierw dbamy o adaptację, następnie proponujemy drugą parę, a na koniec zapraszamy na badanie okresowe. Każdy kontakt to korzyść dla klienta, a nie presja.`
        },
        'tab-s1': { ua: `📅 30 днів · Сервіс`, pl: `📅 30 dni · Serwis` },
        'tab-s2': { ua: `📅 3–6 міс · Друга пара`, pl: `📅 3–6 mies · Druga para` },
        'tab-s3': { ua: `📅 1–1.5 року · Огляд`, pl: `📅 1–1.5 roku · Badanie` },
        'goal-s1': {
          ua: `🎯 Мета: перевірити адаптацію, проявити турботу та зняти можливий негатив. На цьому етапі ми закладаємо фундамент для майбутнього продажу.`,
          pl: `🎯 Cel: sprawdzenie adaptacji, okazanie troski i zneutralizowanie ewentualnych zastrzeżeń. Na tym etapie budujemy fundament pod przyszłą sprzedaż.`
        },
        'goal-s2': {
          ua: `🎯 Мета: запропонувати альтернативу або спеціалізоване рішення (окуляри для комп'ютера, сонцезахисні окуляри з діоптріями, окуляри для водіїв).`,
          pl: `🎯 Cel: zaproponowanie alternatywnego lub specjalistycznego rozwiązania (okulary do komputera, przeciwsłoneczne z korekcją, dla kierowców).`
        },
        'goal-s3': {
          ua: `🎯 Мета: закрити на повторну купівлю, оскільки зір міг змінитися, а лінзи могли подряпатися.`,
          pl: `🎯 Cel: domknięcie kolejnej sprzedaży z uwagi na możliwą zmianę wady wzroku lub zużycie (porysowanie) soczewek.`
        },
        'sttl-lens': { ua: `👁 Для користувачів контактних лінз`, pl: `👁 Dla użytkowników soczewek kontaktowych` },
        'intro-lens': {
          ua: `За 10 днів до того, як у клієнта мають закінчитися лінзи (наприклад, якщо він брав упаковку на 1 або 3 місяці), пишемо в месенджер.`,
          pl: `Na 10 dni przed tym, jak klientowi powinny skończyć się soczewki (na przykład jeśli kupił opakowanie na 1 lub 3 miesiące), piszemy w komunikatorze.`
        },
        tip: {
          ua: `<h4>💡 Лайфхаки для менеджера (як підвищити конверсію)</h4><ul><li><strong>Ведіть CRM.</strong> Якщо клієнт під час першої покупки обмовився, що любить рибалку, працює в ІТ або часто їздить уночі — запишіть це. Скрипт «Ви казали, що часто за кермом уночі, у нас вийшли класні антиблікові лінзи…» працює в 3 рази краще за загальний шаблон.</li><li style="margin-top:10px;"><strong>Даруйте користь, а не продавайте.</strong> Клієнт не хоче купувати нові окуляри просто так. Але він хоче «зняти втому з очей», «безпечно кермувати в тумані» або «виглядати стильно на літніх фото».</li></ul>`,
          pl: `<h4>💡 Wskazówki dla menedżera (jak zwiększyć konwersję)</h4><ul><li><strong>Prowadź CRM.</strong> Jeśli klient przy pierwszym zakupie wspomniał, że lubi wędkarstwo, pracuje w IT lub często jeździ nocą — zapisz to. Skrypt «Wspominał Pan, że często jeździ nocą, mamy świetne soczewki antyrefleksyjne…» działa 3 razy lepiej niż ogólny szablon.</li><li style="margin-top:10px;"><strong>Dawaj wartość, nie sprzedawaj.</strong> Klient nie chce kupować nowych okularów ot tak. Ale chce «zdjąć zmęczenie z oczu», «bezpiecznie prowadzić we mgle» lub «wyglądać stylowo na letnich zdjęciach».</li></ul>`
        },
        next: {
          ua: `<div class="stage-path"><span class="stage-done">Кваліфікація → Запис → Підтвердження → У салоні → Онлайн-продажі → Готовність замовлення →</span><span class="stage-current"> Повторні продажі</span></div><a class="next-stage-btn" href="index.html">← Повернутися на головну</a>`,
          pl: `<div class="stage-path"><span class="stage-done">Kwalifikacja → Rejestracja → Potwierdzenie → W salonie → Sprzedaż online → Gotowość zamówienia →</span><span class="stage-current"> Sprzedaż ponowna</span></div><a class="next-stage-btn" href="index.html">← Powrót na stronę główną</a>`
        }
      }
    }
  };

  /* ============================================================
     Применение языка
     ============================================================ */
  var navOrig = [];     // [{el, text}]
  var titleOrig = '';
  var snapped = false;

  function snapshot() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.setAttribute('data-i18n-ru', '');   // маркер
      el._ruHTML = el.innerHTML;
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      navOrig.push({ el: a, text: a.textContent });
    });
    titleOrig = document.title;
    snapped = true;
  }

  function applyLang(lang) {
    if (!snapped) snapshot();
    if (lang !== 'ru' && lang !== 'ua' && lang !== 'pl') lang = 'ru';

    var page = document.body.getAttribute('data-page');

    /* — Навигация — */
    navOrig.forEach(function (n) {
      if (lang === 'ru') { n.el.textContent = n.text; return; }
      var href = n.el.getAttribute('href');
      var dict = I18N.nav[lang] || {};
      n.el.textContent = (dict[href] != null) ? dict[href] : n.text;
    });

    /* — <title> — */
    if (lang === 'ru') {
      document.title = titleOrig;
    } else if (I18N.titles[page] && I18N.titles[page][lang]) {
      document.title = I18N.titles[page][lang];
    }

    /* — Контент страницы — */
    var pdata = (I18N.pages && I18N.pages[page]) || {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (lang === 'ru') { el.innerHTML = el._ruHTML; return; }
      var key = el.getAttribute('data-i18n');
      var entry = pdata[key];
      el.innerHTML = (entry && entry[lang] != null) ? entry[lang] : el._ruHTML;
    });

    /* — Язык документа — */
    document.documentElement.lang = (lang === 'ua') ? 'uk' : lang;

    /* — Футер: подпись и активная кнопка — */
    var note = document.querySelector('.site-footer-note');
    if (note && I18N.footerNote[lang]) note.innerHTML = I18N.footerNote[lang];
    document.querySelectorAll('.site-lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem('siteLang', lang); } catch (e) {}
  }

  /* Глобальная функция для кнопок футера */
  window.setSiteLang = function (lang) { applyLang(lang); };

  function init() {
    var saved = 'ru';
    try { saved = localStorage.getItem('siteLang') || 'ru'; } catch (e) {}
    applyLang(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
