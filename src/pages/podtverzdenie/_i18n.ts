// src/pages/podtverzdenie/_i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

export const t = {
  headerTitle: { ru: 'Подтверждение визита', ua: 'Підтвердження візиту', pl: 'Potwierdzenie wizyty' } as T,
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

  sttlMsg:  { ru: '💬 Шаблон сообщения подтверждения', ua: '💬 Шаблон повідомлення-підтвердження', pl: '💬 Szablon wiadomości z potwierdzeniem' } as T,
  introMsg: {
    ru: `Отправляется за <strong>1 день до визита</strong>. Сообщение должно содержать все детали, чтобы у клиента не возникало лишних вопросов.`,
    ua: `Надсилається за <strong>1 день до візиту</strong>. Повідомлення має містити всі деталі, щоб у клієнта не виникало зайвих запитань.`,
    pl: `Wysyłane na <strong>1 dzień przed wizytą</strong>. Wiadomość powinna zawierać wszystkie szczegóły, aby klient nie miał dodatkowych pytań.`,
  } as T,

  tmplConfirm: {
    ru: `Добрый день, [Имя клиента]! ✨\n\nНапоминаем, что вы записаны в оптику [Название] на завтра, [Дата] в [Время].\n\n📍 Наш адрес: Jeleniogórska 1/3 (напротив Aldi)\n👁 Услуга: Диагностика зрения и подбор очков\n🎒 Что взять с собой: Старые очки или прошлый рецепт (при наличии)\n\nПодскажите, пожалуйста, всё ли в силе, ваши планы не изменились? Удобно будет подойти?`,
    ua: `Доброго дня, [Ім'я клієнта]! ✨\n\nНагадуємо, що ви записані в оптику [Назва] на завтра, [Дата] о [Час].\n\n📍 Наша адреса: Jeleniogórska 1/3 (вхід з боку Aldi)\n👁 Послуга: Діагностика зору та підбір окулярів\n🎒 Що взяти з собою: Старі окуляри або попередній рецепт (за наявності)\n\nПідкажіть, будь ласка, все в силі, ваші плани не змінилися? Зручно буде прийти?`,
    pl: `Dzień dobry, [Imię Klienta]! ✨\n\nPrzypominamy, że są Państwo umówieni w salonie optycznym [Nazwa] na jutro, [Data] o [Godzina].\n\n📍 Nasz adres: Jeleniogórska 1/3 (wejście boczne Aldi)\n👁 Usługa: Badanie wzroku i dobór okularów\n🎒 Co zabrać ze sobą: Stare okulary lub poprzednią receptę (jeśli Państwo posiadają)\n\nProsimy potwierdzić, czy plany się nie zmieniły? Czy mogą Państwo przyjść?`,
  } as T,
  copyLabel: { ru: 'Копировать', ua: 'Копіювати', pl: 'Kopiuj' } as T,

  sttlCall: { ru: '📞 Скрипт подтверждения визита по телефону', ua: '📞 Скрипт підтвердження візиту по телефону', pl: '📞 Skrypt potwierdzenia wizyty przez telefon' } as T,

  // Call steps: legacy had RU only (no translations in pages.podtv) → fallback-to-RU for ua/pl.
  callStep1Title: { ru: 'Звонок клиенту', ua: 'Звонок клиенту', pl: 'Звонок клиенту' } as T,
  callStep1: {
    ru: `<div class="dialogue"><div class="msg consultant"><div class="msg-label">Консультант</div>Добрый день, <strong>[Имя клиента]</strong>! Меня зовут <strong>[Имя]</strong>, салон оптики <strong>[Название]</strong></div><div class="msg client"><div class="msg-label">Клиент</div>Да, что вы хотели?</div><div class="msg consultant"><div class="msg-label">Консультант</div><strong>[Имя]</strong>, звоню напомнить, что вы записаны к нам на завтра, <strong>[Дата]</strong>, к <strong>[Время]</strong> на диагностику зрения и подбор очков. Всё в силе, мы вас ждём?</div></div>`,
    ua: `<div class="dialogue"><div class="msg consultant"><div class="msg-label">Консультант</div>Добрый день, <strong>[Имя клиента]</strong>! Меня зовут <strong>[Имя]</strong>, салон оптики <strong>[Название]</strong></div><div class="msg client"><div class="msg-label">Клиент</div>Да, что вы хотели?</div><div class="msg consultant"><div class="msg-label">Консультант</div><strong>[Имя]</strong>, звоню напомнить, что вы записаны к нам на завтра, <strong>[Дата]</strong>, к <strong>[Время]</strong> на диагностику зрения и подбор очков. Всё в силе, мы вас ждём?</div></div>`,
    pl: `<div class="dialogue"><div class="msg consultant"><div class="msg-label">Консультант</div>Добрый день, <strong>[Имя клиента]</strong>! Меня зовут <strong>[Имя]</strong>, салон оптики <strong>[Название]</strong></div><div class="msg client"><div class="msg-label">Клиент</div>Да, что вы хотели?</div><div class="msg consultant"><div class="msg-label">Консультант</div><strong>[Имя]</strong>, звоню напомнить, что вы записаны к нам на завтра, <strong>[Дата]</strong>, к <strong>[Время]</strong> на диагностику зрения и подбор очков. Всё в силе, мы вас ждём?</div></div>`,
  } as T,

  callStep2aTitle: { ru: 'Клиент подтверждает', ua: 'Клиент подтверждает', pl: 'Клиент подтверждает' } as T,
  callStep2a: {
    ru: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клиент</div>Да, всё в силе.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Отлично! Напоминаю, что наш салон находится по адресу: <strong>[Адрес, ориентиры если нужно]</strong>. И не забудьте, пожалуйста, взять с собой старые очки или прошлый рецепт, если они есть у вас с собой. До встречи завтра!</div></div>`,
    ua: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клиент</div>Да, всё в силе.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Отлично! Напоминаю, что наш салон находится по адресу: <strong>[Адрес, ориентиры если нужно]</strong>. И не забудьте, пожалуйста, взять с собой старые очки или прошлый рецепт, если они есть у вас с собой. До встречи завтра!</div></div>`,
    pl: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клиент</div>Да, всё в силе.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Отлично! Напоминаю, что наш салон находится по адресу: <strong>[Адрес, ориентиры если нужно]</strong>. И не забудьте, пожалуйста, взять с собой старые очки или прошлый рецепт, если они есть у вас с собой. До встречи завтра!</div></div>`,
  } as T,

  callStep2bTitle: { ru: 'Клиент говорит, что не сможет прийти', ua: 'Клиент говорит, что не сможет прийти', pl: 'Клиент говорит, что не сможет прийти' } as T,
  callStep2b: {
    ru: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клиент</div>Ой, я забыл, я не смогу…</div><div class="msg consultant"><div class="msg-label">Консультант</div>Ничего страшного, хорошо, что созвонились! Давайте прямо сейчас перенесём запись на другой удобный день? Вам лучше подойдёт будний день или выходные?</div></div><div class="info-box" style="margin-top:12px; margin-bottom:0;">Не вешаем трубку — сразу возвращаемся на этап записи и фиксируем новое время.</div>`,
    ua: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клиент</div>Ой, я забыл, я не смогу…</div><div class="msg consultant"><div class="msg-label">Консультант</div>Ничего страшного, хорошо, что созвонились! Давайте прямо сейчас перенесём запись на другой удобный день? Вам лучше подойдёт будний день или выходные?</div></div><div class="info-box" style="margin-top:12px; margin-bottom:0;">Не вешаем трубку — сразу возвращаемся на этап записи и фиксируем новое время.</div>`,
    pl: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клиент</div>Ой, я забыл, я не смогу…</div><div class="msg consultant"><div class="msg-label">Консультант</div>Ничего страшного, хорошо, что созвонились! Давайте прямо сейчас перенесём запись на другой удобный день? Вам лучше подойдёт будний день или выходные?</div></div><div class="info-box" style="margin-top:12px; margin-bottom:0;">Не вешаем трубку — сразу возвращаемся на этап записи и фиксируем новое время.</div>`,
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
