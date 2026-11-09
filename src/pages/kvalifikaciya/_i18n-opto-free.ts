// src/pages/kvalifikaciya/_i18n-opto-free.ts
// Вкладка «Оптометрист» → переключатель «0 zł · акция»: переписка после лид-формы
// (бесплатная проверка зрения без обязательства покупать очки, для всех клиентов).
// Скрипт «99 zł» остался в _i18n.ts (optoBody) — на случай окончания акции.
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

const C = { ru: 'Консультант', ua: 'Консультант', pl: 'Konsultant' };
const msg = (l: Lang, html: string, gap = false) =>
  `<div class="msg consultant"${gap ? ' style="margin-top:10px;"' : ''}><div class="msg-label">${C[l]}</div>${html}</div>`;
const scenario = (label: string, body: string) =>
  `<div class="scenario"><div class="scenario-header"><span class="scenario-label">${label}</span></div><div class="scenario-body">${body}</div></div>`;
const step = (n: string, title: string, body: string) =>
  `<div class="step"><div class="step-header"><span class="step-num">${n}</span> ${title}</div><div class="step-body">${body}</div></div>`;
const phase = (title: string, goal: string, body: string) =>
  `<div class="phase"><div class="phase-title">${title}</div><div class="phase-goal">${goal}</div><div class="phase-body">${body}</div></div>`;

export const tFree = {
  subFree: { ru: '0 zł · акция', ua: '0 zł · акція', pl: '0 zł · promocja' } as T,
  sub99:   { ru: '99 zł', ua: '99 zł', pl: '99 zł' } as T,

  optoFreeBody: {
    ru: `<div class="info-box">
        <strong>🎁 Акция:</strong> проверка зрения у оптометриста <strong>за 0 zł</strong>, без обязательства покупать очки. Действует для всех клиентов.<br>
        <strong>Когда писать:</strong> в течение 15 минут после заявки (в рабочие часы) — чем быстрее, тем выше шанс записи.<br>
        <strong>Цель:</strong> клиент выбрал одно из предложенных окон. Продажу очков ведём в салоне, в переписке о ней не говорим.<br>
        <strong>Перед отправкой:</strong> посмотрите в графике 2 ближайших свободных окна — лучше в разные дни или разное время суток.
      </div>`
      + phase('Этап 1 · Разбор заявки (30 секунд)', 'По ответу на вопрос о жалобах выбираем, какое первое сообщение отправить.',
        `<div class="scenarios">`
        + scenario('1А · Оптометрист 0 zł', 'Обычные жалобы: слезятся глаза, усталость глаз, жжение, сухость, нечёткое зрение, хуже видно вдаль / вблизи, головная боль при чтении / за компьютером — а также «ничего» или пустое поле.')
        + scenario('1Б · Офтальмолог', 'Красные флаги: боль в глазу, резкое ухудшение зрения, вспышки / мушки перед глазами, двоение, сильное покраснение с выделениями, травма глаза — а также ребёнок до 7 лет впервые.')
        + `</div>`)
      + phase('Этап 2 · Первое сообщение с окнами', 'Пишем сразу, не дожидаясь звонка. Жалобу клиента в сообщении не называем.',
        `<div class="scenarios">`
        + scenario('1А · Оптометрист 0 zł', msg('ru', 'Добрый день! Пишем вам из салона оптики Ok.Optyk 💚 Спасибо за заявку.<br><br>Приглашаем вас на проверку зрения у оптометриста за 0 zł — без обязательства покупать очки.<br><br>Что входит в приём (около 20 минут):<br>— компьютерная диагностика зрения<br>— проверка остроты зрения вдаль и вблизи<br>— подбор линз на пробной оправе: сразу увидите, как будете видеть<br>— рекомендации специалиста по вашему зрению<br>— рецепт на очки, если они нужны<br><br>Есть свободное время:<br>— [день, время]<br>— [день, время]<br><br>Какое вам удобнее? 😊'))
        + scenario('1Б · Офтальмолог', msg('ru', 'Добрый день! Пишем вам из салона оптики Ok.Optyk 💚 Спасибо за заявку.<br><br>С симптомами, которые вы описали, лучше сразу показаться офтальмологу: он осмотрит глаза и глазное дно и при необходимости назначит лечение. Стоимость консультации — 219 zł.<br><br>Ближайшее время:<br>— [день, время]<br>— [день, время]<br><br>Записать вас? 🙏')
          + `<em class="note">Травма глаза или внезапная потеря зрения — сразу советуем ехать на SOR, не ждать записи.</em>`)
        + `</div>`)
      + phase('Этап 3 · Клиент ответил', 'Выбрал время — сразу подтверждаем. Не подошло — ищем другое окно.',
        `<div class="scenarios">`
        + scenario('Выбрал окно → подтверждение', msg('ru', 'Отлично, записали вас на проверку зрения за 0 zł ✅<br><br>📅 [день, время]<br>📍 Ok.Optyk, Jeleniogórska 1/3 (напротив Aldi) — [ссылка на карту]<br><br>Если носите очки или линзы — возьмите их с собой. Если планы изменятся, просто напишите, перенесём 😊'))
        + scenario('Окна не подходят', msg('ru', 'Без проблем! Подскажите, когда вам удобнее — будни или выходные, утро или вечер? Подберу ближайшее свободное окно.'))
        + scenario('«Что входит в проверку?»', msg('ru', 'Приём около 20 минут: компьютерная диагностика зрения, проверка вдаль и вблизи, подбор линз на пробной оправе и рекомендации. Если понадобятся очки — получите рецепт. Всё это за 0 zł. Вам удобнее [день, время] или [день, время]?'))
        + scenario('Хочет записать кого-то из семьи', msg('ru', 'Конечно, можем записать вас друг за другом — проверка зрения тоже за 0 zł. Сколько человек будет? Предлагаю [время] и [время].'))
        + `</div>`)
      + phase('Этап 4 · Клиент не отвечает', 'Три касания за 3 дня, потом закрываем заявку.',
        `<div class="steps">`
        + step('1', 'Через 3–4 часа — напоминание', msg('ru', 'Подскажите, удалось посмотреть время? Если эти варианты неудобны, предложу другие 😊'))
        + step('2', 'На следующий день — звонок, затем сообщение', `<em class="note">Звоним в удобное время из заявки: утром — 9:00–12:00, днём — 12:00–16:00, вечером — 16:00–19:00. Не дозвонились — пишем:</em>` + msg('ru', 'Пытались до вас дозвониться по заявке на проверку зрения за 0 zł. Удобнее договориться здесь или перезвонить [вечером]?', true))
        + step('3', 'Через 3 дня — последнее сообщение', msg('ru', 'Не хотим надоедать 🙂 Если проверка зрения станет актуальной — просто напишите, подберём удобное время. Проверка за 0 zł, без обязательств.'))
        + `</div>`)
      + phase('Этап 5 · Возражения', 'Отвечаем коротко и каждый раз заканчиваем выбором времени.',
        `<div class="scenarios">`
        + scenario('«В чём подвох? Почему бесплатно?»', msg('ru', 'Никакого подвоха 😊 Проверка зрения за 0 zł действительно бесплатная, покупать ничего не нужно. Мы просто хотим, чтобы вы познакомились с нашим салоном и специалистом. Вам удобнее [день, время] или [день, время]?'))
        + scenario('«Будете навязывать очки?»', msg('ru', 'Нет. Оптометрист расскажет, что показала проверка, и даст рекомендации — решение только за вами. Многие приходят просто узнать, как сейчас видят 😊'))
        + scenario('«Мне нужен врач, а не оптометрист»', msg('ru', 'Оптометрист — специалист по проверке зрения. Если он заметит что-то, что требует внимания врача, порекомендует офтальмолога. Можно и сразу записаться к офтальмологу — стоимость 219 zł. Как вам удобнее?'))
        + scenario('«Я не оставлял(а) заявку»', msg('ru', 'Извините за беспокойство! Заявка пришла с этого номера через форму в Facebook / Instagram. Если вам неинтересно — больше не напишем 🙏'))
        + scenario('«Нет времени / далеко»', msg('ru', 'Приём занимает всего около 20 минут. Есть время и [вечером / в выходные] — например, [день, время]. Подойдёт?'))
        + scenario('«Подумаю»', msg('ru', 'Конечно! Если хотите, предварительно оставлю за вами [день, время]. Если планы изменятся — просто напишите, перенесём.'))
        + `</div>`),

    ua: `<div class="info-box">
        <strong>🎁 Акція:</strong> перевірка зору в оптометриста <strong>за 0 zł</strong>, без зобов’язання купувати окуляри. Діє для всіх клієнтів.<br>
        <strong>Коли писати:</strong> протягом 15 хвилин після заявки (у робочі години) — що швидше, то вищий шанс запису.<br>
        <strong>Мета:</strong> клієнт обрав одне із запропонованих вікон. Продаж окулярів ведемо в салоні, у листуванні про нього не говоримо.<br>
        <strong>Перед відправкою:</strong> перегляньте в графіку 2 найближчі вільні вікна — краще в різні дні або різний час доби.
      </div>`
      + phase('Етап 1 · Розбір заявки (30 секунд)', 'За відповіддю на питання про скарги обираємо, яке перше повідомлення надіслати.',
        `<div class="scenarios">`
        + scenario('1А · Оптометрист 0 zł', 'Звичайні скарги: сльозяться очі, втома очей, печіння, сухість, нечіткий зір, гірше видно вдалину / зблизька, головний біль під час читання / за комп’ютером — а також «нічого» або порожнє поле.')
        + scenario('1Б · Офтальмолог', 'Червоні прапорці: біль в оці, різке погіршення зору, спалахи / мушки перед очима, двоїння, сильне почервоніння з виділеннями, травма ока — а також дитина до 7 років уперше.')
        + `</div>`)
      + phase('Етап 2 · Перше повідомлення з вікнами', 'Пишемо одразу, не чекаючи дзвінка. Скаргу клієнта в повідомленні не називаємо.',
        `<div class="scenarios">`
        + scenario('1А · Оптометрист 0 zł', msg('ua', 'Добрий день! Пишемо вам із салону оптики Ok.Optyk 💚 Дякуємо за заявку.<br><br>Запрошуємо вас на перевірку зору в оптометриста за 0 zł — без зобов’язання купувати окуляри.<br><br>Що входить у прийом (близько 20 хвилин):<br>— комп’ютерна діагностика зору<br>— перевірка гостроти зору вдалину та зблизька<br>— підбір лінз на пробній оправі: одразу побачите, як бачитимете<br>— рекомендації спеціаліста щодо вашого зору<br>— рецепт на окуляри, якщо вони потрібні<br><br>Є вільний час:<br>— [день, час]<br>— [день, час]<br><br>Який вам зручніший? 😊'))
        + scenario('1Б · Офтальмолог', msg('ua', 'Добрий день! Пишемо вам із салону оптики Ok.Optyk 💚 Дякуємо за заявку.<br><br>З симптомами, які ви описали, краще одразу показатися офтальмологу: він огляне очі та очне дно і за потреби призначить лікування. Вартість консультації — 219 zł.<br><br>Найближчий час:<br>— [день, час]<br>— [день, час]<br><br>Записати вас? 🙏')
          + `<em class="note">Травма ока або раптова втрата зору — одразу радимо їхати на SOR, не чекати запису.</em>`)
        + `</div>`)
      + phase('Етап 3 · Клієнт відповів', 'Обрав час — одразу підтверджуємо. Не підійшло — шукаємо інше вікно.',
        `<div class="scenarios">`
        + scenario('Обрав вікно → підтвердження', msg('ua', 'Чудово, записали вас на перевірку зору за 0 zł ✅<br><br>📅 [день, час]<br>📍 Ok.Optyk, Jeleniogórska 1/3 (навпроти Aldi) — [посилання на карту]<br><br>Якщо носите окуляри чи лінзи — візьміть їх із собою. Якщо плани зміняться, просто напишіть, перенесемо 😊'))
        + scenario('Вікна не підходять', msg('ua', 'Без проблем! Підкажіть, коли вам зручніше — будні чи вихідні, ранок чи вечір? Підберу найближче вільне вікно.'))
        + scenario('«Що входить у перевірку?»', msg('ua', 'Прийом близько 20 хвилин: комп’ютерна діагностика зору, перевірка вдалину та зблизька, підбір лінз на пробній оправі та рекомендації. Якщо знадобляться окуляри — отримаєте рецепт. Усе це за 0 zł. Вам зручніше [день, час] чи [день, час]?'))
        + scenario('Хоче записати когось із родини', msg('ua', 'Звісно, можемо записати вас одне за одним — перевірка зору теж за 0 zł. Скільки буде людей? Пропоную [час] і [час].'))
        + `</div>`)
      + phase('Етап 4 · Клієнт не відповідає', 'Три дотики за 3 дні, потім закриваємо заявку.',
        `<div class="steps">`
        + step('1', 'Через 3–4 години — нагадування', msg('ua', 'Підкажіть, чи вдалося подивитися час? Якщо ці варіанти незручні, запропоную інші 😊'))
        + step('2', 'Наступного дня — дзвінок, потім повідомлення', `<em class="note">Дзвонимо в зручний час із заявки: зранку — 9:00–12:00, удень — 12:00–16:00, увечері — 16:00–19:00. Не додзвонилися — пишемо:</em>` + msg('ua', 'Намагалися до вас додзвонитися щодо заявки на перевірку зору за 0 zł. Зручніше домовитися тут чи передзвонити [увечері]?', true))
        + step('3', 'Через 3 дні — останнє повідомлення', msg('ua', 'Не хочемо набридати 🙂 Якщо перевірка зору стане актуальною — просто напишіть, підберемо зручний час. Перевірка за 0 zł, без зобов’язань.'))
        + `</div>`)
      + phase('Етап 5 · Заперечення', 'Відповідаємо коротко й щоразу завершуємо вибором часу.',
        `<div class="scenarios">`
        + scenario('«У чому підступ? Чому безкоштовно?»', msg('ua', 'Жодного підступу 😊 Перевірка зору за 0 zł справді безкоштовна, купувати нічого не потрібно. Ми просто хочемо, щоб ви познайомилися з нашим салоном і спеціалістом. Вам зручніше [день, час] чи [день, час]?'))
        + scenario('«Будете нав’язувати окуляри?»', msg('ua', 'Ні. Оптометрист розповість, що показала перевірка, і дасть рекомендації — рішення лише за вами. Багато хто приходить просто дізнатися, як зараз бачить 😊'))
        + scenario('«Мені потрібен лікар, а не оптометрист»', msg('ua', 'Оптометрист — спеціаліст із перевірки зору. Якщо він помітить щось, що потребує уваги лікаря, порекомендує офтальмолога. Можна й одразу записатися до офтальмолога — вартість 219 zł. Як вам зручніше?'))
        + scenario('«Я не залишав(ла) заявку»', msg('ua', 'Вибачте за турботу! Заявка надійшла з цього номера через форму у Facebook / Instagram. Якщо вам нецікаво — більше не напишемо 🙏'))
        + scenario('«Немає часу / далеко»', msg('ua', 'Прийом займає лише близько 20 хвилин. Є час і [увечері / у вихідні] — наприклад, [день, час]. Підійде?'))
        + scenario('«Подумаю»', msg('ua', 'Звісно! Якщо хочете, попередньо залишу за вами [день, час]. Якщо плани зміняться — просто напишіть, перенесемо.'))
        + `</div>`),

    pl: `<div class="info-box">
        <strong>🎁 Promocja:</strong> badanie wzroku u optometrysty <strong>za 0 zł</strong>, bez obowiązku zakupu okularów. Obowiązuje wszystkich klientów.<br>
        <strong>Kiedy pisać:</strong> w ciągu 15 minut od zgłoszenia (w godzinach pracy) — im szybciej, tym większa szansa na zapis.<br>
        <strong>Cel:</strong> klient wybrał jeden z zaproponowanych terminów. Sprzedaż okularów prowadzimy w salonie, w wiadomościach o niej nie mówimy.<br>
        <strong>Przed wysłaniem:</strong> sprawdź w grafiku 2 najbliższe wolne terminy — najlepiej w różne dni lub o różnych porach.
      </div>`
      + phase('Etap 1 · Analiza zgłoszenia (30 sekund)', 'Na podstawie odpowiedzi o dolegliwości wybieramy pierwszą wiadomość.',
        `<div class="scenarios">`
        + scenario('1A · Optometrysta 0 zł', 'Zwykłe dolegliwości: łzawienie, zmęczenie oczu, pieczenie, suchość, nieostre widzenie, gorzej widzę z daleka / z bliska, ból głowy przy czytaniu / komputerze — a także «nic» lub puste pole.')
        + scenario('1B · Okulista', 'Czerwone flagi: ból oka, nagłe pogorszenie wzroku, błyski / mroczki, podwójne widzenie, silne zaczerwienienie z wydzieliną, uraz — a także dziecko poniżej 7 lat po raz pierwszy.')
        + `</div>`)
      + phase('Etap 2 · Pierwsza wiadomość z terminami', 'Piszemy od razu, nie czekając na telefon. Nie nazywamy w wiadomości dolegliwości klienta.',
        `<div class="scenarios">`
        + scenario('1A · Optometrysta 0 zł', msg('pl', 'Dzień dobry! Piszemy z salonu optycznego Ok.Optyk 💚 Dziękujemy za zgłoszenie.<br><br>Zapraszamy na badanie wzroku u optometrysty za 0 zł — bez obowiązku zakupu okularów.<br><br>Co obejmuje wizyta (ok. 20 minut):<br>— komputerowe badanie wzroku<br>— badanie ostrości wzroku do dali i do bliży<br>— dobór soczewek w oprawie próbnej: od razu zobaczą Państwo, jak będą widzieć<br>— zalecenia specjalisty dotyczące Państwa wzroku<br>— receptę na okulary, jeśli będą potrzebne<br><br>Wolne terminy:<br>— [dzień, godzina]<br>— [dzień, godzina]<br><br>Który termin Państwu odpowiada? 😊'))
        + scenario('1B · Okulista', msg('pl', 'Dzień dobry! Piszemy z salonu optycznego Ok.Optyk 💚 Dziękujemy za zgłoszenie.<br><br>Przy objawach, które Państwo opisali, najlepiej od razu skonsultować się z okulistą: zbada oczy i dno oka, a w razie potrzeby zaleci leczenie. Koszt konsultacji — 219 zł.<br><br>Najbliższe terminy:<br>— [dzień, godzina]<br>— [dzień, godzina]<br><br>Czy mamy Państwa zapisać? 🙏')
          + `<em class="note">Uraz oka lub nagła utrata wzroku — od razu doradzamy SOR, bez czekania na wizytę.</em>`)
        + `</div>`)
      + phase('Etap 3 · Klient odpisał', 'Wybrał termin — od razu potwierdzamy. Nie pasuje — szukamy innego.',
        `<div class="scenarios">`
        + scenario('Wybrał termin → potwierdzenie', msg('pl', 'Świetnie, zapisaliśmy Państwa na badanie wzroku za 0 zł ✅<br><br>📅 [dzień, godzina]<br>📍 Ok.Optyk, Jeleniogórska 1/3 (naprzeciwko Aldi) — [link do mapy]<br><br>Jeśli nosi Pan/Pani okulary lub soczewki — prosimy zabrać je ze sobą. Jeśli plany się zmienią, wystarczy napisać, przełożymy wizytę 😊'))
        + scenario('Terminy nie pasują', msg('pl', 'Nie ma problemu! Kiedy Państwu wygodniej — w tygodniu czy w weekend, rano czy wieczorem? Znajdę najbliższy wolny termin.'))
        + scenario('«Co obejmuje badanie?»', msg('pl', 'Wizyta trwa ok. 20 minut: komputerowe badanie wzroku, badanie do dali i do bliży, dobór soczewek w oprawie próbnej i zalecenia. Jeśli okulary będą potrzebne — otrzymają Państwo receptę. Wszystko za 0 zł. Pasuje [dzień, godzina] czy [dzień, godzina]?'))
        + scenario('Chce zapisać kogoś z rodziny', msg('pl', 'Oczywiście, możemy zapisać Państwa jedno po drugim — badanie wzroku również za 0 zł. Ile osób przyjdzie? Proponuję [godzina] i [godzina].'))
        + `</div>`)
      + phase('Etap 4 · Klient nie odpowiada', 'Trzy kontakty w ciągu 3 dni, potem zamykamy zgłoszenie.',
        `<div class="steps">`
        + step('1', 'Po 3–4 godzinach — przypomnienie', msg('pl', 'Czy udało się Państwu sprawdzić terminy? Jeśli te nie pasują, zaproponuję inne 😊'))
        + step('2', 'Następnego dnia — telefon, potem wiadomość', `<em class="note">Dzwonimy w porze ze zgłoszenia: Rano — 9:00–12:00, Po południu — 12:00–16:00, Wieczorem — 16:00–19:00. Brak odpowiedzi — piszemy:</em>` + msg('pl', 'Próbowaliśmy się do Państwa dodzwonić w sprawie zgłoszenia na badanie wzroku za 0 zł. Wygodniej umówić się tutaj czy oddzwonić [wieczorem]?', true))
        + step('3', 'Po 3 dniach — ostatnia wiadomość', msg('pl', 'Nie chcemy się narzucać 🙂 Jeśli badanie wzroku stanie się aktualne — wystarczy napisać, a dobierzemy wygodny termin. Badanie za 0 zł, bez zobowiązań.'))
        + `</div>`)
      + phase('Etap 5 · Obiekcje', 'Odpowiadamy krótko i zawsze kończymy wyborem terminu.',
        `<div class="scenarios">`
        + scenario('«Gdzie jest haczyk? Dlaczego za darmo?»', msg('pl', 'Nie ma żadnego haczyka 😊 Badanie wzroku za 0 zł jest naprawdę bezpłatne i nie trzeba nic kupować. Chcemy po prostu, żeby poznali Państwo nasz salon i specjalistę. Pasuje [dzień, godzina] czy [dzień, godzina]?'))
        + scenario('«Będziecie wciskać okulary?»', msg('pl', 'Nie. Optometrysta omówi wyniki badania i przekaże zalecenia — decyzja należy wyłącznie do Państwa. Wiele osób przychodzi po prostu sprawdzić, jak teraz widzi 😊'))
        + scenario('«Potrzebuję lekarza, nie optometrysty»', msg('pl', 'Optometrysta to specjalista od badania wzroku. Jeśli zauważy coś, co wymaga uwagi lekarza, zaleci wizytę u okulisty. Można też od razu zapisać się do okulisty — koszt 219 zł. Co Państwu bardziej odpowiada?'))
        + scenario('«Nie zostawiałem/am zgłoszenia»', msg('pl', 'Przepraszamy za kłopot! Zgłoszenie przyszło z tego numeru przez formularz na Facebooku / Instagramie. Jeśli nie są Państwo zainteresowani — nie będziemy więcej pisać 🙏'))
        + scenario('«Nie mam czasu / daleko»', msg('pl', 'Wizyta trwa tylko ok. 20 minut. Mamy też terminy [wieczorem / w weekend] — na przykład [dzień, godzina]. Pasuje?'))
        + scenario('«Zastanowię się»', msg('pl', 'Oczywiście! Jeśli Państwo chcą, wstępnie zarezerwuję [dzień, godzina]. Jeśli plany się zmienią — wystarczy napisać, przełożymy.'))
        + `</div>`),
  } as T,
};
