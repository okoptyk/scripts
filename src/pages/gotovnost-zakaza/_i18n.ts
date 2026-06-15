// src/pages/gotovnost-zakaza/i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

export const t = {
  headerTitle: { ru: 'Уведомление о готовности заказа', ua: 'Повідомлення про готовність замовлення', pl: 'Powiadomienie o gotowości zamówienia' } as T,
  headerSub:   { ru: 'Сообщаем клиенту, что очки готовы, и согласовываем удобное время для визита', ua: 'Повідомляємо клієнту, що окуляри готові, та узгоджуємо зручний час для візиту', pl: 'Informujemy klienta, że okulary są gotowe, i ustalamy dogodny termin wizyty' } as T,

  metaCkpLabel:   { ru: 'ЦКП', ua: 'ЦКП', pl: 'Cel etapu' } as T,
  metaCkp:        { ru: 'Клиент уведомлён, время визита согласовано', ua: 'Клієнт повідомлений, час візиту узгоджено', pl: 'Klient powiadomiony, termin wizyty ustalony' } as T,
  metaStartLabel: { ru: 'Стартовая точка', ua: 'Початкова точка', pl: 'Punkt startowy' } as T,
  metaStart:      { ru: 'Готовое изделие передано в салон', ua: 'Готовий виріб передано в салон', pl: 'Gotowy wyrób przekazany do salonu' } as T,
  metaCrmLabel:   { ru: 'Этап CRM', ua: 'Етап CRM', pl: 'Etap CRM' } as T,
  metaCrm:        { ru: '«Клиент уведомлён»', ua: '«Клієнт повідомлений»', pl: '«Klient powiadomiony»' } as T,
  metaDeadlineLabel: { ru: 'Дедлайн', ua: 'Дедлайн', pl: 'Termin' } as T,
  metaDeadline:   { ru: '1 рабочий день', ua: '1 робочий день', pl: '1 dzień roboczy' } as T,

  tabMsg:  { ru: '💬 Мессенджер', ua: '💬 Месенджер', pl: '💬 Komunikator' } as T,
  tabCall: { ru: '📞 Звонок', ua: '📞 Дзвінок', pl: '📞 Telefon' } as T,

  sttlMsg:  { ru: '💬 Шаблон сообщения о готовности заказа', ua: '💬 Шаблон повідомлення про готовність замовлення', pl: '💬 Szablon wiadomości o gotowości zamówienia' } as T,
  introMsg: { ru: '<strong>Важно:</strong> сообщение должно содержать всю техническую информацию — где, до скольки и что иметь при себе.', ua: '<strong>Важливо:</strong> повідомлення має містити всю технічну інформацію — де, до котрої години та що мати при собі.', pl: '<strong>Ważne:</strong> wiadomość powinna zawierać wszystkie informacje techniczne — gdzie, do której godziny i co mieć przy sobie.' } as T,

  tmplReady: {
    ru: `Добрый день, [Имя клиента]! 🎉\n\nВаш заказ в оптике [Название] полностью готов и ждёт вас! 👓✨\n\n📍 Где забрать: Jeleniogórska 1/3 (напротив Aldi)\n⏰ Режим работы: ежедневно с [Время] до [Время]\n📄 Что взять с собой: бланк заказа (квитанцию) или паспорт\n\nПри получении мы обязательно примерим очки вместе с вами, чтобы убедиться, что посадка идеальна.\n\nПодскажите, пожалуйста, в какой день планируете подойти? 😊`,
    ua: `Доброго дня, [Ім'я клієнта]! 🎉\n\nВаше замовлення в оптиці [Назва] повністю готове і чекає на вас! 👓✨\n\n📍 Де забрати: Jeleniogórska 1/3 (вхід з боку Aldi)\n⏰ Режим роботи: щодня з [Час] до [Час]\n📄 Що взяти з собою: бланк замовлення (квитанцію) або паспорт\n\nПри отриманні ми обов'язково приміряємо окуляри разом з вами, щоб переконатися, що посадка ідеальна.\n\nПідкажіть, будь ласка, в який день плануєте підійти? 😊`,
    pl: `Dzień dobry, [Imię Klienta]! 🎉\n\nPaństwa zamówienie w salonie optycznym [Nazwa] jest gotowe i czeka na Państwa! 👓✨\n\n📍 Gdzie odebrać: Jeleniogórska 1/3 (wejście boczne Aldi)\n⏰ Godziny otwarcia: codziennie od [Godzina] do [Godzina]\n📄 Co zabrać ze sobą: dowód zamówienia (paragon) lub dowód osobisty\n\nPrzy odbiorze wspólnie przymierzymy okulary, aby upewnić się, że siedzą idealnie.\n\nProszę powiedzieć, w którym dniu planują Państwo przyjść? 😊`,
  } as T,
  copyLabel: { ru: 'Копировать', ua: 'Копіювати', pl: 'Kopiuj' } as T,

  tipMsg: {
    ru: `<h4>💡 Лайфхаки на этом этапе</h4><ul><li><strong>Ценность примерки при выдаче.</strong> Оправы часто требуют мелкой выправки (подогнуть заушники, поправить носоупоры). Если клиент просто заберёт пакет и уйдёт — он может столкнуться с дискомфортом дома.</li><li style="margin-top:10px;"><strong>Допродажа сопутствующих товаров.</strong> «Кстати, к вашим новым линзам с защитным покрытием мы рекомендуем взять спрей-антифог и салфетку из микрофибры. Показать вам?»</li></ul>`,
    ua: `<h4>💡 Лайфхаки на цьому етапі</h4><ul><li><strong>Цінність примірки при видачі.</strong> Оправи часто потребують дрібного підлаштування (підігнути завушники, поправити носоупори). Якщо клієнт просто забере пакет і піде — він може зіткнутися з дискомфортом удома.</li><li style="margin-top:10px;"><strong>Допродаж супутніх товарів.</strong> «До речі, до ваших нових лінз із захисним покриттям рекомендуємо взяти спрей-антифог та серветку з мікрофібри. Показати вам?»</li></ul>`,
    pl: `<h4>💡 Wskazówki na tym etapie</h4><ul><li><strong>Wartość przymiarki przy odbiorze.</strong> Oprawy często wymagają drobnej regulacji (dogięcie zauszników, poprawienie nosków). Jeśli klient po prostu zabierze paczkę i wyjdzie — może odczuwać dyskomfort w domu.</li><li style="margin-top:10px;"><strong>Dosprzedaż produktów uzupełniających.</strong> «Przy okazji, do nowych soczewek z powłoką polecamy spray przeciw zaparowaniu i ściereczkę z mikrofibry. Pokazać?»</li></ul>`,
  } as T,

  sttlCall: { ru: '📞 Скрипт уведомления клиента по телефону', ua: '📞 Скрипт повідомлення клієнта по телефону', pl: '📞 Skrypt powiadomienia klienta przez telefon' } as T,

  callStep1Title: { ru: 'Приветствие и хорошая новость', ua: 'Привітання та хороша новина', pl: 'Powitanie i dobra wiadomość' } as T,
  callStep1: {
    ru: `<div class="dialogue"><div class="msg consultant"><div class="msg-label">Консультант</div>Добрый день, <strong>[Имя клиента]</strong>! Меня зовут <strong>[Имя]</strong>, салон оптики <strong>[Название]</strong>.</div><div class="msg client"><div class="msg-label">Клиент</div>Да, здравствуйте / Слушаю вас.</div><div class="msg consultant"><div class="msg-label">Консультант</div><strong>[Имя]</strong>, спешу поделиться отличной новостью — ваши очки готовы! Мастер всё сделал, они прошли проверку качества и уже ждут вас в салоне.</div></div>`,
    ua: `<div class="dialogue"><div class="msg consultant"><div class="msg-label">Консультант</div>Доброго дня, <strong>[Ім'я клієнта]</strong>! Мене звати <strong>[Ім'я]</strong>, салон оптики <strong>[Назва]</strong>.</div><div class="msg client"><div class="msg-label">Клієнт</div>Так, вітаю / Слухаю вас.</div><div class="msg consultant"><div class="msg-label">Консультант</div><strong>[Ім'я]</strong>, поспішаю поділитися чудовою новиною — ваші окуляри готові! Майстер усе зробив, вони пройшли перевірку якості і вже чекають на вас у салоні.</div></div>`,
    pl: `<div class="dialogue"><div class="msg consultant"><div class="msg-label">Doradca</div>Dzień dobry, <strong>[Imię Klienta]</strong>! Nazywam się <strong>[Imię]</strong>, salon optyczny <strong>[Nazwa]</strong>.</div><div class="msg client"><div class="msg-label">Klient</div>Tak, dzień dobry / Słucham.</div><div class="msg consultant"><div class="msg-label">Doradca</div><strong>[Imię]</strong>, śpieszę z dobrą wiadomością — Państwa okulary są gotowe! Wszystko zostało wykonane, przeszły kontrolę jakości i czekają w salonie.</div></div>`,
  } as T,
  callStep2Title: { ru: 'Согласование времени визита', ua: 'Узгодження часу візиту', pl: 'Ustalenie terminu wizyty' } as T,
  callStep2: {
    ru: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клиент</div>О, отлично, спасибо.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Подскажите, пожалуйста, когда вам было бы удобно подъехать? Мы находимся по адресу <strong>Jeleniogórska 1/3 (напротив Aldi)</strong> и работаем ежедневно с <strong>[Время]</strong> до <strong>[Время]</strong>.</div></div>`,
    ua: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клієнт</div>О, чудово, дякую.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Підкажіть, будь ласка, коли вам було б зручно під'їхати? Ми знаходимося за адресою <strong>Jeleniogórska 1/3 (навпроти Aldi)</strong> і працюємо щодня з <strong>[Час]</strong> до <strong>[Час]</strong>.</div></div>`,
    pl: `<div class="dialogue"><div class="msg client"><div class="msg-label">Klient</div>O, świetnie, dziękuję.</div><div class="msg consultant"><div class="msg-label">Doradca</div>Proszę powiedzieć, kiedy byłoby Państwu wygodnie przyjechać? Jesteśmy pod adresem <strong>Jeleniogórska 1/3 (naprzeciwko Aldi)</strong> i pracujemy codziennie od <strong>[Godzina]</strong> do <strong>[Godzina]</strong>.</div></div>`,
  } as T,
  callStep3Title: { ru: 'Подтверждение и напоминание', ua: 'Підтвердження та нагадування', pl: 'Potwierdzenie i przypomnienie' } as T,
  callStep3: {
    ru: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клиент</div>Думаю, завтра после работы зайду.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Прекрасно, будем вас ждать! Когда придёте, мы обязательно примерим очки вместе с вами. Не забудьте взять с собой бланк заказа (квитанцию). Хорошего вам дня!</div></div>`,
    ua: `<div class="dialogue"><div class="msg client"><div class="msg-label">Клієнт</div>Думаю, завтра після роботи зайду.</div><div class="msg consultant"><div class="msg-label">Консультант</div>Чудово, будемо вас чекати! Коли прийдете, ми обов'язково приміряємо окуляри разом з вами. Не забудьте взяти бланк замовлення (квитанцію). Гарного вам дня!</div></div>`,
    pl: `<div class="dialogue"><div class="msg client"><div class="msg-label">Klient</div>Myślę, że jutro po pracy wpadnę.</div><div class="msg consultant"><div class="msg-label">Doradca</div>Wspaniale, będziemy czekać! Gdy Państwo przyjdą, wspólnie przymierzymy okulary. Proszę nie zapomnieć dowodu zamówienia (paragonu). Miłego dnia!</div></div>`,
  } as T,

  tipCall: {
    ru: `<h4>💡 Лайфхаки на этом этапе</h4><ul><li><strong>Ценность примерки при выдаче.</strong> Оправы часто требуют мелкой выправки. Если клиент просто заберёт пакет и уйдёт — он может столкнуться с дискомфортом дома и решит, что очки сделаны плохо.</li><li style="margin-top:10px;"><strong>Допродажа сопутствующих товаров.</strong> «Кстати, к вашим новым линзам рекомендуем взять спрей-антифог и салфетку из микрофибры. Показать вам?»</li></ul>`,
    ua: `<h4>💡 Лайфхаки на цьому етапі</h4><ul><li><strong>Цінність примірки при видачі.</strong> Оправи часто потребують дрібного підлаштування. Якщо клієнт просто забере пакет і піде — він може зіткнутися з дискомфортом удома і вирішить, що окуляри зроблено погано.</li><li style="margin-top:10px;"><strong>Допродаж супутніх товарів.</strong> «До речі, до ваших нових лінз рекомендуємо взяти спрей-антифог та серветку з мікрофібри. Показати вам?»</li></ul>`,
    pl: `<h4>💡 Wskazówki na tym etapie</h4><ul><li><strong>Wartość przymiarki przy odbiorze.</strong> Oprawy często wymagają drobnej regulacji. Jeśli klient po prostu zabierze paczkę i wyjdzie — może odczuwać dyskomfort w domu i uznać, że okulary są źle wykonane.</li><li style="margin-top:10px;"><strong>Dosprzedaż produktów uzupełniających.</strong> «Przy okazji, do nowych soczewek polecamy spray przeciw zaparowaniu i ściereczkę z mikrofibry. Pokazać?»</li></ul>`,
  } as T,

  nextBtn: { ru: 'Следующий шаг: Повторные продажи →', ua: 'Наступний крок: Повторні продажі →', pl: 'Następny krok: Sprzedaż ponowna →' } as T,
};
