// src/pages/reaktivaciya/_i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

export const t = {
  headerTitle: { ru: 'Реактивация', ua: 'Реактивація', pl: 'Reaktywacja' } as T,
  headerSub:   { ru: 'Возвращаем «спящих» клиентов, которые ранее оставляли заявку на проверку зрения', ua: 'Повертаємо «сплячих» клієнтів, які раніше залишали заявку на перевірку зору', pl: 'Odzyskujemy «uśpionych» klientów, którzy wcześniej zostawili zgłoszenie na badanie wzroku' } as T,

  metaCkpLabel:   { ru: 'ЦКП', ua: 'ЦКП', pl: 'Cel etapu' } as T,
  metaCkp:        { ru: 'Клиент повторно вовлечён, время визита согласовано', ua: 'Клієнт повторно залучений, час візиту узгоджено', pl: 'Klient ponownie zaangażowany, termin wizyty ustalony' } as T,
  metaStartLabel: { ru: 'Стартовая точка', ua: 'Початкова точка', pl: 'Punkt startowy' } as T,
  metaStart:      { ru: 'Старая заявка на проверку зрения без записи', ua: 'Стара заявка на перевірку зору без запису', pl: 'Stare zgłoszenie na badanie wzroku bez rejestracji' } as T,
  metaResponsibleLabel: { ru: 'Ответственный', ua: 'Відповідальний', pl: 'Odpowiedzialny' } as T,
  metaResponsible: { ru: 'Продавец-консультант, Менеджер', ua: 'Продавець-консультант, Менеджер', pl: 'Doradca klienta, Menedżer' } as T,
  metaChannelsLabel: { ru: 'Каналы', ua: 'Канали', pl: 'Kanały' } as T,
  metaChannels:    { ru: 'Мессенджер', ua: 'Месенджер', pl: 'Komunikator' } as T,

  sttl:  { ru: '💬 Примеры реактивации старых обращений по проверке зрения', ua: '💬 Приклади реактивації старих звернень щодо перевірки зору', pl: '💬 Przykłady reaktywacji dawnych zgłoszeń na badanie wzroku' } as T,
  intro: { ru: '<strong>Важно:</strong> пишем мягко и без давления. Одно короткое сообщение, один вопрос в конце. Подставьте имя клиента вместо <strong>{Имя}</strong>.', ua: '<strong>Важливо:</strong> пишемо м’яко та без тиску. Одне коротке повідомлення, одне запитання в кінці. Підставте ім’я клієнта замість <strong>{Ім’я}</strong>.', pl: '<strong>Ważne:</strong> piszemy delikatnie i bez presji. Jedna krótka wiadomość, jedno pytanie na końcu. Wstaw imię klienta zamiast <strong>{Imię}</strong>.' } as T,

  var1Title: { ru: 'Вариант 1 · Короткое напоминание', ua: 'Варіант 1 · Коротке нагадування', pl: 'Wariant 1 · Krótkie przypomnienie' } as T,
  var1: {
    ru: `Здравствуйте, {Имя} 😊\n\nВижу, вы ранее оставляли заявку на проверку зрения.\n\nПодскажите, пожалуйста, удалось ли уже решить этот вопрос или можем подобрать для вас удобное время на этой неделе?`,
    ua: `Вітаю, {Ім’я} 😊\n\nБачу, ви раніше залишали заявку на перевірку зору.\n\nПідкажіть, будь ласка, чи вдалося вже вирішити це питання, чи можемо підібрати для вас зручний час цього тижня?`,
    pl: `Dzień dobry, {Imię} 😊\n\nWidzę, że wcześniej zostawili Państwo zgłoszenie na badanie wzroku.\n\nProszę powiedzieć, czy udało się już rozwiązać tę sprawę, czy możemy dobrać dla Państwa dogodny termin w tym tygodniu?`,
  } as T,

  var2Title: { ru: 'Вариант 2 · С заботой о занятости', ua: 'Варіант 2 · Із турботою про зайнятість', pl: 'Wariant 2 · Z troską o zajętość' } as T,
  var2: {
    ru: `Здравствуйте, {Имя} 😊\n\nВижу, что ранее вы интересовались проверкой зрения в нашей оптике.\n\nПонимаю, что в повседневной рутине не всегда находится время, поэтому решила уточнить — возможно, на этой неделе вам будет удобно посетить нашу оптику?\n\nПодскажите, вам удобнее рассмотреть будние дни или выходные?`,
    ua: `Вітаю, {Ім’я} 😊\n\nБачу, що раніше ви цікавилися перевіркою зору в нашій оптиці.\n\nРозумію, що в повсякденній рутині не завжди знаходиться час, тому вирішила уточнити — можливо, цього тижня вам буде зручно завітати до нашої оптики?\n\nПідкажіть, вам зручніше розглянути будні чи вихідні?`,
    pl: `Dzień dobry, {Imię} 😊\n\nWidzę, że wcześniej interesowali się Państwo badaniem wzroku w naszym salonie.\n\nRozumiem, że w codziennym pośpiechu nie zawsze znajduje się czas, dlatego postanowiłam zapytać — może w tym tygodniu byłoby Państwu wygodnie odwiedzić nasz salon?\n\nProszę powiedzieć, wygodniejsze są dni powszednie czy weekend?`,
  } as T,

  var3Title: { ru: 'Вариант 3 · Свободные окошки', ua: 'Варіант 3 · Вільні віконця', pl: 'Wariant 3 · Wolne terminy' } as T,
  var3: {
    ru: `Здравствуйте, {Имя} 😊\n\nНапоминаем о себе. На этой неделе у нас есть несколько свободных окошек, поэтому решила написать вам повторно.\n\nПодскажите, пожалуйста, когда вам удобнее подойти на проверку зрения — в первой половине дня или после работы?`,
    ua: `Вітаю, {Ім’я} 😊\n\nНагадуємо про себе. Цього тижня у нас є кілька вільних віконець, тому вирішила написати вам повторно.\n\nПідкажіть, будь ласка, коли вам зручніше підійти на перевірку зору — у першій половині дня чи після роботи?`,
    pl: `Dzień dobry, {Imię} 😊\n\nPrzypominamy o sobie. W tym tygodniu mamy kilka wolnych terminów, dlatego postanowiłam napisać ponownie.\n\nProszę powiedzieć, kiedy wygodniej byłoby przyjść na badanie wzroku — przed południem czy po pracy?`,
  } as T,

  copyLabel: { ru: 'Копировать', ua: 'Копіювати', pl: 'Kopiuj' } as T,

  tip: {
    ru: `<h4>💡 Лайфхаки на этом этапе</h4><ul><li><strong>Одно сообщение — один вопрос.</strong> Не перегружайте текст: цель первого касания — получить ответ, а не всё объяснить сразу.</li><li style="margin-top:10px;"><strong>Не давите.</strong> Если клиент уже решил вопрос — поблагодарите и мягко предложите вернуться при необходимости. Негатив на этом этапе дороже одной записи.</li><li style="margin-top:10px;"><strong>Давайте выбор без выбора.</strong> «Будни или выходные?», «В первой половине дня или после работы?» — так клиенту легче сделать шаг.</li></ul>`,
    ua: `<h4>💡 Лайфхаки на цьому етапі</h4><ul><li><strong>Одне повідомлення — одне запитання.</strong> Не перевантажуйте текст: мета першого дотику — отримати відповідь, а не все пояснити одразу.</li><li style="margin-top:10px;"><strong>Не тисніть.</strong> Якщо клієнт уже вирішив питання — подякуйте та м’яко запропонуйте повернутися за потреби. Негатив на цьому етапі дорожчий за один запис.</li><li style="margin-top:10px;"><strong>Давайте вибір без вибору.</strong> «Будні чи вихідні?», «У першій половині дня чи після роботи?» — так клієнту легше зробити крок.</li></ul>`,
    pl: `<h4>💡 Wskazówki na tym etapie</h4><ul><li><strong>Jedna wiadomość — jedno pytanie.</strong> Nie przeciążaj tekstu: celem pierwszego kontaktu jest uzyskanie odpowiedzi, a nie wyjaśnienie wszystkiego naraz.</li><li style="margin-top:10px;"><strong>Nie naciskaj.</strong> Jeśli klient już załatwił sprawę — podziękuj i delikatnie zaproponuj powrót w razie potrzeby. Negatywne wrażenie na tym etapie kosztuje więcej niż jedna rejestracja.</li><li style="margin-top:10px;"><strong>Dawaj wybór bez wyboru.</strong> «Dni powszednie czy weekend?», «Przed południem czy po pracy?» — tak klientowi łatwiej zrobić krok.</li></ul>`,
  } as T,

  nextBtn: { ru: '← Вернуться на главную', ua: '← Повернутися на головну', pl: '← Powrót na stronę główną' } as T,
};
