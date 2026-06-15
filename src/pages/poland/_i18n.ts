// src/pages/poland/_i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

export const t = {
  headerTitle: { ru: 'Запись на визит', ua: 'Запис на візит', pl: 'Rejestracja na wizytę' } as T,
  headerSub:   { ru: 'Запись клиентов на комплексную проверку зрения', ua: 'Запис клієнтів на комплексну перевірку зору', pl: 'Rejestracja klientów na kompleksowe badanie wzroku' } as T,

  metaCkpLabel:   { ru: 'ЦКП', ua: 'ЦКП', pl: 'Cel etapu' } as T,
  metaCkp:        { ru: 'Дата и время согласованы, запись в АРМ зафиксирована', ua: 'Дата і час узгоджені, запис в АРМ зафіксований', pl: 'Data i godzina ustalone, rejestracja w systemie zapisana' } as T,
  metaPriceGlassesLabel: { ru: 'Стоимость (с очками)', ua: 'Вартість (з окулярами)', pl: 'Koszt (z okularami)' } as T,
  metaPriceGlasses:      { ru: '99 zł', ua: '99 zł', pl: '99 zł' } as T,
  metaPriceConsultLabel: { ru: 'Стоимость (только консультация)', ua: 'Вартість (лише консультація)', pl: 'Koszt (tylko konsultacja)' } as T,
  metaPriceConsult:      { ru: '199 zł', ua: '199 zł', pl: '199 zł' } as T,
  metaAddressLabel: { ru: 'Адрес', ua: 'Адреса', pl: 'Adres' } as T,
  metaAddress:      { ru: 'Jeleniogórska 1/3 (напротив Aldi)', ua: 'Jeleniogórska 1/3 (навпроти Aldi)', pl: 'Jeleniogórska 1/3 (naprzeciwko Aldi)' } as T,
  metaPhoneLabel:   { ru: 'Телефон', ua: 'Телефон', pl: 'Telefon' } as T,
  metaPhone:        { ru: '+48 732 432 925', ua: '+48 732 432 925', pl: '+48 732 432 925' } as T,
  metaDeadlineLabel: { ru: 'Дедлайн', ua: 'Дедлайн', pl: 'Termin' } as T,
  metaDeadline:   { ru: '1 рабочий день', ua: '1 робочий день', pl: '1 dzień roboczy' } as T,

  intro: {
    ru: `<strong>Комплексная проверка зрения включает:</strong> компьютерную диагностику (близорукость, дальнозоркость, астигматизм) · осмотр глазного дна · проверку остроты зрения · заключение офтальмолога · при необходимости — рецепт и план лечения.`,
    ua: `<strong>Комплексна перевірка зору включає:</strong> комп'ютерну діагностику (короткозорість, далекозорість, астигматизм) · огляд очного дна · перевірку гостроти зору · висновок офтальмолога · за потреби — рецепт і план лікування.`,
    pl: `<strong>Kompleksowe badanie wzroku obejmuje:</strong> diagnostykę komputerową (krótkowzroczność, dalekowzroczność, astygmatyzm) · badanie dna oka · sprawdzenie ostrości wzroku · orzeczenie okulisty · w razie potrzeby — receptę i plan leczenia.`,
  } as T,

  scriptTitle: {
    ru: '📋 Скрипт записи клиента на визит (русский язык)',
    ua: '📋 Скрипт запису клієнта на візит (українська мова)',
    pl: '📋 Skrypt rejestracji klienta na wizytę (język polski)',
  } as T,

  step1Title: {
    ru: 'Приветствие и информирование об услуге',
    ua: 'Привітання та інформування про послугу',
    pl: 'Powitanie i informacja o usłudze',
  } as T,
  step1: {
    ru: `<div class="msg consultant"><div class="msg-label">Консультант</div>Здравствуйте! Спасибо, что выбрали нашу оптику 💚<br><br><strong>Комплексная проверка зрения включает:</strong><br>— компьютерную диагностику (выявление близорукости, дальнозоркости, астигматизма);<br>— осмотр глазного дна (оценка состояния сетчатки и сосудов глаз);<br>— проверку остроты зрения;<br>— заключение офтальмолога.<br><br>При необходимости врач выпишет рецепт и составит план лечения.<br><br><strong>Стоимость:</strong> 99 zł (при заказе очков) или 199 zł, если нужна только консультация.<br><br>Доступные термины:<br>—<br>—<br><br>Подходит ли вам это время? 😊</div>`,
    ua: `<div class="msg consultant"><div class="msg-label">Консультант</div>Вітаємо! Дякуємо, що обрали нашу оптику 💚<br><br><strong>Комплексна перевірка зору включає:</strong><br>— комп'ютерну діагностику (виявлення короткозорості, далекозорості, астигматизму);<br>— огляд очного дна (оцінка стану сітківки та судин ока);<br>— перевірку гостроти зору;<br>— висновок офтальмолога.<br><br>За потреби лікар випише рецепт та складе план лікування.<br><br><strong>Вартість:</strong> 99 zł (при замовленні окулярів) або 199 zł, якщо потрібна лише консультація.<br><br>Доступний час для запису:<br>—<br>—<br><br>Чи підходить для вас час? 😊</div>`,
    pl: `<div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry! Dziękujemy za wybranie naszego salonu optycznego 💚<br><br><strong>Kompleksowe badanie wzroku obejmuje:</strong><br>— komputerową diagnostykę (wykrycie krótkowzroczności, dalekowzroczności, astygmatyzmu);<br>— badanie dna oka (ocena stanu siatkówki i naczyń krwionośnych oka);<br>— sprawdzenie ostrości wzroku;<br>— orzeczenie okulistyczne.<br><br>W razie potrzeby lekarz wystawi receptę i opracuje plan leczenia.<br><br><strong>Koszt:</strong> 99 zł (przy zamówieniu okularów) lub 199 zł, jeśli potrzebna jest tylko konsultacja.<br><br>Dostępne terminy:<br>—<br>—<br><br>Czy odpowiada Państwu taki termin? 😊</div>`,
  } as T,

  step2Title: {
    ru: 'Запрос данных пациента',
    ua: 'Запит даних пацієнта',
    pl: 'Pobranie danych pacjenta',
  } as T,
  step2: {
    ru: `<div class="msg consultant"><div class="msg-label">Консультант</div>Отлично. Для подтверждения записи, пожалуйста, укажите:<br><br>— Фамилию и имя (латиницей)<br>— Дату рождения<br>— Контактный номер телефона</div>`,
    ua: `<div class="msg consultant"><div class="msg-label">Консультант</div>Чудово. Для підтвердження запису, будь ласка, вкажіть:<br><br>— Прізвище та ім'я (латиницею);<br>— Дату народження;<br>— Контактний номер телефону.</div>`,
    pl: `<div class="msg consultant"><div class="msg-label">Konsultant</div>Świetnie. W celu potwierdzenia wizyty prosimy o podanie:<br><br>— Nazwiska i imienia (łacinką)<br>— Daty urodzenia<br>— Kontaktowego numeru telefonu</div>`,
  } as T,

  step3Title: {
    ru: 'Подтверждение записи',
    ua: 'Підтвердження запису',
    pl: 'Potwierdzenie wizyty',
  } as T,
  step3: {
    ru: `<div class="msg consultant"><div class="msg-label">Консультант</div>Спасибо, ваш визит подтверждён на (дата/время).<br><br>Ждём вас по адресу:<br>📍 Jeleniogórska 1/3 (напротив Aldi)<br><br>Если ваши планы изменятся, пожалуйста, сообщите нам заранее здесь или по номеру:<br>📲 +48 732 432 925</div>`,
    ua: `<div class="msg consultant"><div class="msg-label">Консультант</div>Дякуємо, ваш візит підтверджено на (дата/час).<br><br>Чекаємо на вас за адресою:<br>📍 Jeleniogórska 1/3 (вхід з боку Aldi)<br><br>Якщо ваші плани зміняться, будь ласка, повідомте нам заздалегідь тут або за номером:<br>📲 +48 732 432 925</div>`,
    pl: `<div class="msg consultant"><div class="msg-label">Konsultant</div>Dziękujemy, Państwa wizyta została potwierdzona na (data/godzina).<br><br>Zapraszamy pod adres:<br>📍 Jeleniogórska 1/3 (wejście boczne Aldi)<br><br>Jeśli Państwa plany się zmienią, prosimy o wcześniejsze poinformowanie nas tutaj lub pod numerem:<br>📲 +48 732 432 925</div>`,
  } as T,

  tip: {
    ru: `<h4>💡 Важно после записи</h4><ul><li>Зафиксировать запись в системе АРМ и карточке CRM.</li><li>Перевести сделку на этап <strong>«Визит запланирован»</strong>.</li><li>За день до визита отправить подтверждение — перевести на этап <strong>«Визит подтверждён»</strong>.</li></ul>`,
    ua: `<h4>💡 Важливо після запису</h4><ul><li>Зафіксувати запис у системі АРМ та картці CRM.</li><li>Перевести угоду на етап <strong>«Візит заплановано»</strong>.</li><li>За день до візиту надіслати підтвердження — перевести на етап <strong>«Візит підтверджено»</strong>.</li></ul>`,
    pl: `<h4>💡 Ważne po rejestracji</h4><ul><li>Zapisać rejestrację w systemie ARM i karcie CRM.</li><li>Przenieść transakcję do etapu <strong>«Wizyta zaplanowana»</strong>.</li><li>Dzień przed wizytą wysłać potwierdzenie — przenieść do etapu <strong>«Wizyta potwierdzona»</strong>.</li></ul>`,
  } as T,

  nextBtn: {
    ru: 'Следующий шаг: Подтверждение визита →',
    ua: 'Наступний крок: Підтвердження візиту →',
    pl: 'Następny krok: Potwierdzenie wizyty →',
  } as T,
};
