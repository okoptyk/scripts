// src/pages/novye-klienty/_i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

export const t = {
  headerTitle: { ru: 'Новые клиенты', ua: 'Нові клієнти', pl: 'Nowi klienci' } as T,
  headerSub:   { ru: 'Приветствуем нового подписчика, дарим промокод на 50 zł и переводим в запись', ua: 'Вітаємо нового підписника, даруємо промокод на 50 zł і переводимо в запис', pl: 'Witamy nowego subskrybenta, dajemy kod rabatowy 50 zł i prowadzimy do rejestracji' } as T,

  metaCkpLabel:   { ru: 'ЦКП', ua: 'ЦКП', pl: 'Cel etapu' } as T,
  metaCkp:        { ru: 'Клиент получил промокод и записан на визит', ua: 'Клієнт отримав промокод і записаний на візит', pl: 'Klient otrzymał kod rabatowy i jest zapisany na wizytę' } as T,
  metaStartLabel: { ru: 'Стартовая точка', ua: 'Початкова точка', pl: 'Punkt startowy' } as T,
  metaStart:      { ru: 'Клиент подписался на Ok.Optyk', ua: 'Клієнт підписався на Ok.Optyk', pl: 'Klient zasubskrybował Ok.Optyk' } as T,
  metaResponsibleLabel: { ru: 'Ответственный', ua: 'Відповідальний', pl: 'Odpowiedzialny' } as T,
  metaResponsible: { ru: 'Продавец-консультант, Менеджер', ua: 'Продавець-консультант, Менеджер', pl: 'Doradca klienta, Menedżer' } as T,
  metaChannelsLabel: { ru: 'Каналы', ua: 'Канали', pl: 'Kanały' } as T,
  metaChannels:    { ru: 'Мессенджер', ua: 'Месенджер', pl: 'Komunikator' } as T,

  copyLabel: { ru: 'Копировать', ua: 'Копіювати', pl: 'Kopiuj' } as T,

  sttlWelcome:  { ru: '🎁 Приветственное сообщение с промокодом', ua: '🎁 Вітальне повідомлення з промокодом', pl: '🎁 Wiadomość powitalna z kodem rabatowym' } as T,
  introWelcome: { ru: '<strong>Важно:</strong> у каждого клиента свой промокод. Вместо <strong>[ПРОМОКОД]</strong> вставьте персональный код клиента. Отправляйте в день подписки и отметьте дату отправки в CRM — от неё считаются 30 дней.', ua: '<strong>Важливо:</strong> у кожного клієнта свій промокод. Замість <strong>[ПРОМОКОД]</strong> вставте персональний код клієнта. Надсилайте в день підписки та позначте дату надсилання в CRM — від неї рахуються 30 днів.', pl: '<strong>Ważne:</strong> każdy klient ma własny kod. Zamiast <strong>[KOD]</strong> wstaw indywidualny kod klienta. Wysyłaj w dniu subskrypcji i zaznacz datę wysyłki w CRM — od niej liczy się 30 dni.' } as T,
  welcome: {
    ru: `Добрый день💚\n\nСпасибо, что подписались на Ok.Optyk!\n\nМы проводим комплексную диагностику зрения, подбираем очки и индивидуально изготавливаем их по вашему рецепту.\n\n🎁 Для новых клиентов мы дарим персональную скидку 50 zł на очки: [ПРОМОКОД]\n\nПромокод действует 30 дней с момента получения сообщения. Вы можете воспользоваться им сами или подарить близкому человеку ☺️\n\nПодскажите, возможно, уже есть вопрос, с которым мы можем вам помочь?`,
    ua: `Доброго дня💚\n\nДякуємо, що підписалися на Ok.Optyk!\n\nМи проводимо комплексну діагностику зору, підбираємо окуляри та індивідуально виготовляємо їх за вашим рецептом.\n\n🎁 Для нових клієнтів ми даруємо персональну знижку 50 zł на окуляри: [ПРОМОКОД]\n\nПромокод діє 30 днів із моменту отримання повідомлення. Ви можете скористатися ним самі або подарувати близькій людині ☺️\n\nПідкажіть, можливо, вже є питання, з яким ми можемо вам допомогти?`,
    pl: `Dzień dobry💚\n\nDziękujemy za subskrypcję Ok.Optyk!\n\nPrzeprowadzamy kompleksową diagnostykę wzroku, dobieramy okulary i wykonujemy je indywidualnie na podstawie Państwa recepty.\n\n🎁 Nowym klientom oferujemy indywidualną zniżkę w wysokości 50 zł na okulary: [KOD]\n\nKod promocyjny jest ważny przez 30 dni od otrzymania wiadomości. Mogą Państwo skorzystać z niego samodzielnie lub podarować go bliskiej osobie ☺️\n\nCzy mają Państwo już pytanie, w którym możemy pomóc?`,
  } as T,

  sttlReplies:  { ru: '💬 Ответы на частые реакции клиента', ua: '💬 Відповіді на часті реакції клієнта', pl: '💬 Odpowiedzi na częste reakcje klienta' } as T,
  introReplies: { ru: 'Цель каждого ответа — перевести клиента в запись. Если клиент хочет проверить зрение, дальше ведите по странице «Квалификация» → вкладка «🧭 С чего начать».', ua: 'Мета кожної відповіді — перевести клієнта в запис. Якщо клієнт хоче перевірити зір, далі ведіть за сторінкою «Кваліфікація» → вкладка «🧭 З чого почати».', pl: 'Celem każdej odpowiedzi jest zapisanie klienta. Jeśli klient chce sprawdzić wzrok, dalej prowadź według strony «Kwalifikacja» → zakładka «🧭 Od czego zacząć».' } as T,

  reply1Title: { ru: '«Хочу проверить зрение»', ua: '«Хочу перевірити зір»', pl: '«Chcę sprawdzić wzrok»' } as T,
  reply1: {
    ru: `Отлично, с радостью поможем 😊\n\nПодскажите, вы хотите подобрать новые очки или вас что-то беспокоит со зрением?`,
    ua: `Чудово, з радістю допоможемо 😊\n\nПідкажіть, ви хочете підібрати нові окуляри чи вас щось турбує із зором?`,
    pl: `Świetnie, chętnie pomożemy 😊\n\nProszę powiedzieć, czy chcą Państwo dobrać nowe okulary, czy coś niepokoi Państwa ze wzrokiem?`,
  } as T,

  reply2Title: { ru: '«Есть рецепт, хочу очки»', ua: '«Є рецепт, хочу окуляри»', pl: '«Mam receptę, chcę okulary»' } as T,
  reply2: {
    ru: `Прекрасно! Ваша скидка 50 zł как раз пригодится 🎁\n\nПодскажите, когда выписывали рецепт? Если меньше года назад — приходите сразу на подбор оправы, я забронирую для вас время.\n\nВам удобнее в будни или в выходные?`,
    ua: `Чудово! Ваша знижка 50 zł якраз стане в пригоді 🎁\n\nПідкажіть, коли виписували рецепт? Якщо менше року тому — приходьте одразу на підбір оправи, я забронюю для вас час.\n\nВам зручніше в будні чи у вихідні?`,
    pl: `Wspaniale! Zniżka 50 zł właśnie się przyda 🎁\n\nKiedy była wystawiona recepta? Jeśli mniej niż rok temu — zapraszamy od razu na dobór oprawy, zarezerwuję dla Państwa termin.\n\nWygodniej w dzień powszedni czy w weekend?`,
  } as T,

  reply3Title: { ru: '«Как воспользоваться промокодом?»', ua: '«Як скористатися промокодом?»', pl: '«Jak skorzystać z kodu?»' } as T,
  reply3: {
    ru: `Очень просто: назовите промокод консультанту при оформлении заказа очков — скидка 50 zł применится сразу 😊\n\nПромокод действует 30 дней. Подобрать для вас удобное время для визита?`,
    ua: `Дуже просто: назвіть промокод консультанту під час оформлення замовлення окулярів — знижка 50 zł застосується одразу 😊\n\nПромокод діє 30 днів. Підібрати для вас зручний час для візиту?`,
    pl: `To proste: wystarczy podać kod konsultantowi przy składaniu zamówienia na okulary — zniżka 50 zł zostanie naliczona od razu 😊\n\nKod jest ważny 30 dni. Czy dobrać dla Państwa dogodny termin wizyty?`,
  } as T,

  reply4Title: { ru: '«Пока ничего не нужно»', ua: '«Поки нічого не потрібно»', pl: '«Na razie niczego nie potrzebuję»' } as T,
  reply4: {
    ru: `Хорошо, спасибо за ответ! 💚\n\nПромокод будет ждать вас 30 дней — можно воспользоваться им самим или подарить близким. Если появятся вопросы, просто напишите нам сюда.`,
    ua: `Добре, дякуємо за відповідь! 💚\n\nПромокод чекатиме на вас 30 днів — можна скористатися ним самим або подарувати близьким. Якщо з’являться питання, просто напишіть нам сюди.`,
    pl: `Dobrze, dziękujemy za odpowiedź! 💚\n\nKod będzie ważny przez 30 dni — można z niego skorzystać samodzielnie lub podarować bliskim. Jeśli pojawią się pytania, prosimy po prostu napisać tutaj.`,
  } as T,

  sttlReminder:  { ru: '⏰ Напоминание о промокоде', ua: '⏰ Нагадування про промокод', pl: '⏰ Przypomnienie o kodzie' } as T,
  introReminder: { ru: 'Отправляем на <strong>25-й день</strong> после приветствия, если клиент ещё не воспользовался промокодом. Если клиент ответил «пока ничего не нужно» — не отправляем.', ua: 'Надсилаємо на <strong>25-й день</strong> після привітання, якщо клієнт ще не скористався промокодом. Якщо клієнт відповів «поки нічого не потрібно» — не надсилаємо.', pl: 'Wysyłamy <strong>25. dnia</strong> po powitaniu, jeśli klient jeszcze nie skorzystał z kodu. Jeśli klient odpisał «na razie niczego nie potrzebuję» — nie wysyłamy.' } as T,
  reminder: {
    ru: `Здравствуйте! 💚\n\nНапоминаем: ваш промокод на скидку 50 zł на очки — [ПРОМОКОД] — действует ещё 5 дней.\n\nЕсли давно не проверяли зрение, можем записать вас к оптометристу: при заказе очков проверка бесплатная.\n\nПодобрать для вас удобное время?`,
    ua: `Вітаю! 💚\n\nНагадуємо: ваш промокод на знижку 50 zł на окуляри — [ПРОМОКОД] — діє ще 5 днів.\n\nЯкщо давно не перевіряли зір, можемо записати вас до оптометриста: при замовленні окулярів перевірка безкоштовна.\n\nПідібрати для вас зручний час?`,
    pl: `Dzień dobry! 💚\n\nPrzypominamy: Państwa kod na zniżkę 50 zł na okulary — [KOD] — jest ważny jeszcze 5 dni.\n\nJeśli dawno nie badali Państwo wzroku, możemy zapisać Państwa do optometrysty: przy zamówieniu okularów badanie jest bezpłatne.\n\nCzy dobrać dla Państwa dogodny termin?`,
  } as T,

  tip: {
    ru: `<h4>💡 Лайфхаки на этом этапе</h4><ul><li><strong>Отвечайте быстро.</strong> Подписчик «тёплый» в первые часы — чем быстрее ответ, тем выше шанс записи.</li><li style="margin-top:10px;"><strong>Одно сообщение — один вопрос.</strong> Не пересылайте приветствие повторно, если клиент уже ответил.</li><li style="margin-top:10px;"><strong>Промокод — повод, а не цель.</strong> Главное — записать клиента на проверку зрения или подбор оправы. По умолчанию предлагаем оптометриста.</li></ul>`,
    ua: `<h4>💡 Лайфхаки на цьому етапі</h4><ul><li><strong>Відповідайте швидко.</strong> Підписник «теплий» у перші години — що швидша відповідь, то вищий шанс запису.</li><li style="margin-top:10px;"><strong>Одне повідомлення — одне запитання.</strong> Не надсилайте привітання повторно, якщо клієнт уже відповів.</li><li style="margin-top:10px;"><strong>Промокод — привід, а не мета.</strong> Головне — записати клієнта на перевірку зору або підбір оправи. За замовчуванням пропонуємо оптометриста.</li></ul>`,
    pl: `<h4>💡 Wskazówki na tym etapie</h4><ul><li><strong>Odpowiadaj szybko.</strong> Subskrybent jest «ciepły» w pierwszych godzinach — im szybsza odpowiedź, tym większa szansa na rejestrację.</li><li style="margin-top:10px;"><strong>Jedna wiadomość — jedno pytanie.</strong> Nie wysyłaj powitania ponownie, jeśli klient już odpisał.</li><li style="margin-top:10px;"><strong>Kod to pretekst, nie cel.</strong> Najważniejsze — zapisać klienta na badanie wzroku lub dobór oprawy. Domyślnie proponujemy optometrystę.</li></ul>`,
  } as T,

  nextBtn: { ru: 'Следующий шаг: Квалификация →', ua: 'Наступний крок: Кваліфікація →', pl: 'Następny krok: Kwalifikacja →' } as T,
};
