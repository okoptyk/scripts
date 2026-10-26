// src/pages/podtverzdenie/_i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

export const t = {
  headerTitle: { ru: 'Напоминание о визите', ua: 'Нагадування про візит', pl: 'Przypomnienie o wizycie' } as T,
  headerSub:   { ru: 'Напоминаем клиенту о записи, уточняем детали и оперативно переносим при необходимости', ua: 'Нагадуємо клієнту про запис, уточнюємо деталі та оперативно переносимо за потреби', pl: 'Przypominamy klientowi o wizycie, doprecyzowujemy szczegóły i w razie potrzeby szybko przekładamy' } as T,

  metaCkpLabel:   { ru: 'ЦКП', ua: 'ЦКП', pl: 'Cel etapu' } as T,
  metaCkp:        { ru: 'Клиент подтвердил визит (или перенос согласован)', ua: 'Клієнт підтвердив візит (або перенесення узгоджено)', pl: 'Klient potwierdził wizytę (lub ustalono przełożenie)' } as T,
  metaStartLabel: { ru: 'Стартовая точка', ua: 'Початкова точка', pl: 'Punkt startowy' } as T,
  metaStart:      { ru: 'Дата и время согласованы, запись зафиксирована', ua: 'Дата і час узгоджені, запис зафіксований', pl: 'Data i godzina ustalone, rejestracja zapisana' } as T,
  metaDeadlineLabel: { ru: 'Дедлайн', ua: 'Дедлайн', pl: 'Termin' } as T,
  metaDeadline:   { ru: '1 рабочий день', ua: '1 робочий день', pl: '1 dzień roboczy' } as T,
  metaRespLabel:  { ru: 'Ответственный', ua: 'Відповідальний', pl: 'Odpowiedzialny' } as T,
  metaResp:       { ru: 'Продавец-консультант, Менеджер', ua: 'Продавець-консультант, Менеджер', pl: 'Doradca klienta, Menedżer' } as T,

  tabMsg:  { ru: '💬 Мессенджер', ua: '💬 Месенджер', pl: '💬 Komunikator' } as T,
  tabCall: { ru: '📞 Звонок', ua: '📞 Дзвінок', pl: '📞 Telefon' } as T,

  sttlMsg:  { ru: '💬 Шаблон сообщения-напоминания', ua: '💬 Шаблон повідомлення-нагадування', pl: '💬 Szablon wiadomości z przypomnieniem' } as T,
  introMsg: {
    ru: `Отправляется за <strong>1 день до визита</strong>. Вместо <strong>[Время]</strong> вставьте время записи — больше ничего заполнять не нужно.`,
    ua: `Надсилається за <strong>1 день до візиту</strong>. Замість <strong>[Час]</strong> вставте час запису — більше нічого заповнювати не потрібно.`,
    pl: `Wysyłane na <strong>1 dzień przed wizytą</strong>. Zamiast <strong>[Godzina]</strong> wstaw godzinę wizyty — nic więcej nie trzeba uzupełniać.`,
  } as T,

  tmplConfirm: {
    ru: `Добрый день! ✨

Напоминаем, что вы записаны в оптику Ok.Optyk на завтра в [Время].

📍 Наш адрес: Jeleniogórska 1/3 (напротив Aldi)
👁 Услуга: Проверка зрения
🎒 Что взять с собой: очки, которые носите сейчас, или прошлый рецепт (при наличии)

Подскажите, пожалуйста, всё в силе? Удобно будет подойти?`,
    ua: `Доброго дня! ✨

Нагадуємо, що ви записані в оптику Ok.Optyk на завтра о [Час].

📍 Наша адреса: Jeleniogórska 1/3 (навпроти Aldi)
👁 Послуга: Перевірка зору
🎒 Що взяти з собою: окуляри, які носите зараз, або попередній рецепт (за наявності)

Підкажіть, будь ласка, все в силі? Зручно буде прийти?`,
    pl: `Dzień dobry! ✨

Przypominamy, że są Państwo umówieni w salonie optycznym Ok.Optyk na jutro o [Godzina].

📍 Nasz adres: Jeleniogórska 1/3 (naprzeciwko Aldi)
👁 Usługa: Badanie wzroku
🎒 Co zabrać ze sobą: obecnie noszone okulary lub poprzednią receptę (jeśli Państwo posiadają)

Czy wszystko aktualne? Czy będzie Państwu wygodnie przyjść?`,
  } as T,
  copyLabel: { ru: 'Копировать', ua: 'Копіювати', pl: 'Kopiuj' } as T,

  sttlCall: { ru: '📞 Скрипт напоминания о визите по телефону', ua: '📞 Скрипт нагадування про візит телефоном', pl: '📞 Skrypt przypomnienia o wizycie przez telefon' } as T,

  callStep1Title: { ru: 'Звонок клиенту', ua: 'Дзвінок клієнту', pl: 'Telefon do klienta' } as T,
  callStep1: {
    ru: `<div class="dialogue"><div class="msg consultant"><div class="msg-label">Консультант</div>Добрый день! Меня зовут <strong>[Имя]</strong>, оптика Ok.Optyk.</div><div class="msg client"><div class="msg-label">Клиент</div>Да, слушаю.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Звоню напомнить, что вы записаны к нам на завтра в <strong>[Время]</strong> на проверку зрения. Всё в силе, мы вас ждём?</div></div>`,
    ua: `<div class="dialogue"><div class="msg consultant"><div class="msg-label">Консультант</div>Доброго дня! Мене звати <strong>[Ім’я]</strong>, оптика Ok.Optyk.</div><div class="msg client"><div class="msg-label">Клієнт</div>Так, слухаю.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Телефоную нагадати, що ви записані до нас на завтра о <strong>[Час]</strong> на перевірку зору. Все в силі, ми на вас чекаємо?</div></div>`,
    pl: `<div class="dialogue"><div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry! Mam na imię <strong>[Imię]</strong>, salon optyczny Ok.Optyk.</div><div class="msg client"><div class="msg-label">Klient</div>Tak, słucham.</div><div class="msg consultant"><div class="msg-label">Konsultant</div>Dzwonię, żeby przypomnieć, że są Państwo umówieni u nas jutro o <strong>[Godzina]</strong> na badanie wzroku. Czy wszystko aktualne, czekamy na Państwa?</div></div>`,
  } as T,

  callStep2aTitle: { ru: 'Клиент подтверждает', ua: 'Клієнт підтверджує', pl: 'Klient potwierdza' } as T,
  callStep2a: {
    ru: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клиент</div>Да, всё в силе.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Отлично! Напоминаю наш адрес: Jeleniogórska 1/3, напротив Aldi. Возьмите, пожалуйста, с собой очки, которые носите сейчас, или прошлый рецепт, если он есть. До встречи завтра!</div></div>`,
    ua: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клієнт</div>Так, все в силі.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Чудово! Нагадую нашу адресу: Jeleniogórska 1/3, навпроти Aldi. Візьміть, будь ласка, із собою окуляри, які носите зараз, або попередній рецепт, якщо він є. До зустрічі завтра!</div></div>`,
    pl: `<div class="dialogue"><div class="msg client"><div class="msg-label">Klient</div>Tak, wszystko aktualne.</div><div class="msg consultant"><div class="msg-label">Konsultant</div>Świetnie! Przypominam nasz adres: Jeleniogórska 1/3, naprzeciwko Aldi. Prosimy zabrać ze sobą obecnie noszone okulary lub poprzednią receptę, jeśli jest. Do zobaczenia jutro!</div></div>`,
  } as T,

  callStep2bTitle: { ru: 'Клиент не сможет прийти', ua: 'Клієнт не зможе прийти', pl: 'Klient nie może przyjść' } as T,
  callStep2b: {
    ru: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клиент</div>Ой, я забыл(а), я не смогу…</div><div class="msg consultant"><div class="msg-label">Консультант</div>Ничего страшного, хорошо, что созвонились! Давайте прямо сейчас перенесём запись на другой удобный день? Вам лучше подойдёт будний день или выходные?</div></div><div class="info-box" style="margin-top:12px; margin-bottom:0;">Не вешаем трубку — сразу возвращаемся на этап записи и фиксируем новое время.</div>`,
    ua: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клієнт</div>Ой, я забув(ла), я не зможу…</div><div class="msg consultant"><div class="msg-label">Консультант</div>Нічого страшного, добре, що зв’язалися! Давайте просто зараз перенесемо запис на інший зручний день? Вам краще підійде будній день чи вихідні?</div></div><div class="info-box" style="margin-top:12px; margin-bottom:0;">Не кладемо слухавку — одразу повертаємося на етап запису та фіксуємо новий час.</div>`,
    pl: `<div class="dialogue"><div class="msg client"><div class="msg-label">Klient</div>Ojej, zapomniałem/zapomniałam, nie dam rady…</div><div class="msg consultant"><div class="msg-label">Konsultant</div>Nic nie szkodzi, dobrze, że rozmawiamy! Przełóżmy od razu wizytę na inny dogodny dzień. Pasuje Państwu bardziej dzień powszedni czy weekend?</div></div><div class="info-box" style="margin-top:12px; margin-bottom:0;">Nie kończymy rozmowy — od razu wracamy do etapu rejestracji i zapisujemy nowy termin.</div>`,
  } as T,

  tip: {
    ru: `<h4>💡 После подтверждения</h4><ul><li>Перевести сделку в CRM на этап <strong>«Визит подтверждён»</strong>.</li><li>Если клиент не отвечает на звонок — отправить шаблон сообщения.</li><li>Если клиент перенёс — зафиксировать новое время в АРМ и снова перевести на этап «Визит запланирован».</li></ul>`,
    ua: `<h4>💡 Після підтвердження</h4><ul><li>Перевести угоду в CRM на етап <strong>«Візит підтверджено»</strong>.</li><li>Якщо клієнт не відповідає на дзвінок — надіслати шаблон повідомлення.</li><li>Якщо клієнт переніс — зафіксувати новий час в АРМ і знову перевести на етап «Візит заплановано».</li></ul>`,
    pl: `<h4>💡 Po potwierdzeniu</h4><ul><li>Przenieść transakcję w CRM do etapu <strong>«Wizyta potwierdzona»</strong>.</li><li>Jeśli klient nie odbiera — wysłać szablon wiadomości.</li><li>Jeśli klient przełożył — zapisać nowy termin w ARM i ponownie przenieść do etapu «Wizyta zaplanowana».</li></ul>`,
  } as T,

  nextBtn: {
    ru: 'Следующий шаг: В салоне →',
    ua: 'Наступний крок: У салоні →',
    pl: 'Następny krok: W salonie →',
  } as T,
};
