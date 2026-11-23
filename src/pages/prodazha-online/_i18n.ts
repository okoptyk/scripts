// src/pages/prodazha-online/_i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

// ---------- Разметка-помощники для вкладок «Примерка», «Заказ с сайта», «Проблемы» ----------
const step = (n: number, title: string, body: string) =>
  `<div class="step"><div class="step-header"><span class="step-num">${n}</span> ${title}</div><div class="step-body"><div class="dialogue">${body}</div></div></div>`;
const cons = (label: string, text: string) =>
  `<div class="msg consultant"><div class="msg-label">${label}</div>${text}</div>`;
const cli = (label: string, text: string) =>
  `<div class="msg client"><div class="msg-label">${label}</div>${text}</div>`;
const scen = (label: string, title: string, body: string) =>
  `<div class="scenario"><div class="scenario-header"><span class="scenario-label">${label}</span>&nbsp; ${title}</div><div class="scenario-body">${body}</div></div>`;
const steps = (...s: string[]) => `<div class="steps">${s.join('')}</div>`;
const scens = (...s: string[]) => `<div class="scenarios">${s.join('')}</div>`;

const SIG = {
  ru: '<br><br>С уважением,<br>Команда OK.OPTYK',
  ua: '<br><br>З повагою,<br>Команда OK.OPTYK',
  pl: '<br><br>Pozdrawiamy serdecznie,<br>Zespół OK.OPTYK',
};
const MAIL = { ru: 'Письмо клиенту', ua: 'Лист клієнту', pl: 'E-mail do klienta' };
const CONS = { ru: 'Консультант', ua: 'Консультант', pl: 'Konsultant' };
const CLI = { ru: 'Клиент', ua: 'Клієнт', pl: 'Klient' };
const m = (l: Lang, text: string) => cons(MAIL[l], text + SIG[l]);

// ---------- Общие тексты про ссылку Polcard by Fiserv, оплату и отслеживание ----------
const SMS = { ru: 'SMS клиенту', ua: 'SMS клієнту', pl: 'SMS do klienta' };
const TRACK = {
  ru: 'Номер отслеживания: [номер]<br>Отследить посылку: [ссылка для отслеживания]',
  ua: 'Номер відстеження: [номер]<br>Відстежити посилку: [посилання для відстеження]',
  pl: 'Numer przesyłki: [numer]<br>Śledzenie przesyłki: [link do śledzenia]',
};
const PAY_REMIND = {
  ru: 'Здравствуйте!<br><br>Напоминаем, что ссылка на оплату заказа ждёт Вас в письме от Polcard by Fiserv и действует до конца сегодняшнего дня. Если письма нет, ответьте нам, и мы пришлём ссылку повторно.',
  ua: 'Доброго дня!<br><br>Нагадуємо, що посилання на оплату замовлення чекає на Вас у листі від Polcard by Fiserv і діє до кінця сьогоднішнього дня. Якщо листа немає, дайте нам відповідь, і ми надішлемо посилання повторно.',
  pl: 'Dzień dobry,<br><br>przypominamy, że link do płatności za zamówienie czeka w wiadomości od Polcard by Fiserv i jest ważny do końca dzisiejszego dnia. Jeśli wiadomość nie dotarła, prosimy o odpowiedź — wyślemy link ponownie.',
};
const PAID = {
  ru: 'Здравствуйте!<br><br>Оплата получена, спасибо! Ваш заказ передан в работу и будет готов в течение [N] рабочих дней.<br><br>Как только отправим посылку, сразу свяжемся с Вами и пришлём данные для отслеживания.',
  ua: 'Доброго дня!<br><br>Оплату отримано, дякуємо! Ваше замовлення передано в роботу і буде готове протягом [N] робочих днів.<br><br>Щойно відправимо посилку, одразу зв’яжемося з Вами та надішлемо дані для відстеження.',
  pl: 'Dzień dobry,<br><br>płatność została zaksięgowana, dziękujemy! Zamówienie zostało przekazane do realizacji i będzie gotowe w ciągu [N] dni roboczych.<br><br>Gdy tylko wyślemy paczkę, od razu skontaktujemy się z Państwem i przekażemy dane do śledzenia przesyłki.',
};

// ---------- Вкладка «Клиент пишет сам»: шаги 6–9 (оплата и отправка) ----------
const mainExtra = {
  ru:
    step(6, 'Ссылка на оплату', cli(CLI.ru, 'Анна Новак, +48 600 000 000, ul. Długa 1, Poznań, anna.nowak@example.com') +
      cons(CONS.ru, 'Спасибо, все данные получила 😊<br><br>Отправила ссылку на оплату на ваш e-mail. Письмо придёт <strong>от платёжного сервиса Polcard by Fiserv</strong>, а не с нашего адреса — проверьте, пожалуйста, «Входящие» и папку «Спам».<br><br>Ссылка действует <strong>до конца сегодняшнего дня</strong>. Сразу после оплаты передадим заказ в работу 👓')) +
    step(7, 'За 2 часа до конца рабочего дня, если не оплачено', cons(CONS.ru, 'Добрый день 😊 Напоминаю про ссылку на оплату заказа — она пришла на ваш e-mail от Polcard by Fiserv и действует до конца сегодняшнего дня. Если письмо не нашлось, напишите — пришлю новую ссылку.')) +
    step(8, 'Оплата принята', cons(CONS.ru, 'Оплата получена, спасибо 😊<br><br>Заказ уже в работе и будет готов в течение [N] рабочих дней. Как только отправим посылку, сразу напишу вам и пришлю данные для отслеживания.')) +
    step(9, 'Заказ отправлен', cons(CONS.ru, 'Ваши очки готовы и отправлены 👓<br><br>' + TRACK.ru + '<br><br>Доставка — за наш счёт. Хорошего ношения!')),
  ua:
    step(6, 'Посилання на оплату', cli(CLI.ua, 'Анна Новак, +48 600 000 000, ul. Długa 1, Poznań, anna.nowak@example.com') +
      cons(CONS.ua, 'Дякую, всі дані отримала 😊<br><br>Надіслала посилання на оплату на ваш e-mail. Лист прийде <strong>від платіжного сервісу Polcard by Fiserv</strong>, а не з нашої адреси — перевірте, будь ласка, «Вхідні» та папку «Спам».<br><br>Посилання діє <strong>до кінця сьогоднішнього дня</strong>. Одразу після оплати передамо замовлення в роботу 👓')) +
    step(7, 'За 2 години до кінця робочого дня, якщо не оплачено', cons(CONS.ua, 'Доброго дня 😊 Нагадую про посилання на оплату замовлення — воно прийшло на ваш e-mail від Polcard by Fiserv і діє до кінця сьогоднішнього дня. Якщо листа не знайшлося, напишіть — надішлю нове посилання.')) +
    step(8, 'Оплату прийнято', cons(CONS.ua, 'Оплату отримано, дякую 😊<br><br>Замовлення вже в роботі й буде готове протягом [N] робочих днів. Щойно відправимо посилку, одразу напишу вам і надішлю дані для відстеження.')) +
    step(9, 'Замовлення відправлено', cons(CONS.ua, 'Ваші окуляри готові та відправлені 👓<br><br>' + TRACK.ua + '<br><br>Доставка — за наш рахунок. Приємного носіння!')),
  pl:
    step(6, 'Link do płatności', cli(CLI.pl, 'Anna Nowak, +48 600 000 000, ul. Długa 1, Poznań, anna.nowak@example.com') +
      cons(CONS.pl, 'Dziękuję, mam już wszystkie dane 😊<br><br>Wysłałam link do płatności na Państwa adres e-mail. Wiadomość przyjdzie <strong>od serwisu płatniczego Polcard by Fiserv</strong>, a nie z naszego adresu — prosimy sprawdzić skrzynkę odbiorczą i folder SPAM.<br><br>Link jest ważny <strong>do końca dzisiejszego dnia</strong>. Zaraz po płatności przekażemy zamówienie do realizacji 👓')) +
    step(7, '2 godziny przed końcem dnia pracy, jeśli brak płatności', cons(CONS.pl, 'Dzień dobry 😊 Przypominam o linku do płatności za zamówienie — przyszedł na Państwa e-mail od Polcard by Fiserv i jest ważny do końca dzisiejszego dnia. Jeśli wiadomość nie dotarła, proszę napisać — wyślę nowy link.')) +
    step(8, 'Płatność przyjęta', cons(CONS.pl, 'Płatność otrzymana, dziękuję 😊<br><br>Zamówienie jest już w realizacji i będzie gotowe w ciągu [N] dni roboczych. Gdy tylko wyślemy paczkę, od razu napiszę i prześlę dane do śledzenia.')) +
    step(9, 'Zamówienie wysłane', cons(CONS.pl, 'Państwa okulary są gotowe i wysłane 👓<br><br>' + TRACK.pl + '<br><br>Dostawa na nasz koszt. Miłego noszenia!')),
};

// ---------- Вкладка «Примерка дома» ----------
const tryonBody = {
  ru: steps(
    step(1, 'Подтверждение заказа на примерку', m('ru', 'Здравствуйте!<br><br>Спасибо за заказ на примерку оправ дома.<br><br>Как это работает:<br>1. Перед отправкой оправ мы пришлём ссылку на <strong>преавторизацию — 100 zł за каждую оправу</strong>; в Вашем заказе [N] оправ, итого [сумма] zł. Это временная блокировка суммы на карте, а не списание денег.<br>2. Вы примеряете оправы дома <strong>5 дней</strong> с момента получения посылки.<br>3. В посылке будет бланк — в нём можно отметить выбранную оправу.<br>4. Доставку в обе стороны оформляем и оплачиваем мы.<br>5. После окончания примерки блокировку снимаем полностью. Если решите оставить оправу, оплату выставим отдельной ссылкой.<br><br>Пожалуйста, подтвердите, что такие условия Вам подходят.')),
    step(2, 'Ссылка на преавторизацию — только когда оправы готовы к отправке', cli(CLI.ru, 'Да, подходит. Как пройти преавторизацию?') +
      m('ru', 'Оправы собраны и готовы к отправке.<br><br>Мы отправили на Ваш e-mail ссылку для преавторизации на сумму <strong>[сумма] zł</strong>. Письмо придёт <strong>от платёжного сервиса Polcard by Fiserv</strong>, а не с нашего адреса — пожалуйста, проверьте «Входящие» и папку «Спам».<br><br>Ссылка действует <strong>до конца сегодняшнего дня</strong>. Как только блокировка будет подтверждена, сразу отправим посылку.')),
    step(3, 'За 2 часа до конца рабочего дня, если блокировка не подтверждена', m('ru', 'Здравствуйте!<br><br>Напоминаем: оправы для примерки ждут отправки. Осталось подтвердить преавторизацию по ссылке из письма от Polcard by Fiserv — ссылка действует до конца сегодняшнего дня. Если письмо не нашлось, ответьте нам, и мы пришлём новую ссылку.')),
    step(4, 'Оправы отправлены', m('ru', 'Ваши оправы отправлены!<br><br>' + TRACK.ru + '<br><br>В посылке лежит бланк выбора. Отметьте в нём оправу, которая понравилась, и что Вы хотите сделать:<br>☐ оставить оправу без линз<br>☐ установить в неё линзы по рецепту<br>☐ вернуть все оправы<br><br>Срок примерки — 5 дней, до [дата]. Если захотите совета, пришлите фото в оправах — с удовольствием поможем выбрать.')),
    step(5, '3-й день примерки', m('ru', 'Здравствуйте!<br><br>Как Вам оправы? Если сомневаетесь, пришлите фото в каждой из них — подскажем, какая лучше подходит к форме лица. Напоминаем, что срок примерки — до [дата].')),
    step(6, 'Срок примерки вышел, а ответа нет', m('ru', 'Здравствуйте!<br><br>Срок примерки закончился [дата]. Подскажите, пожалуйста, какую оправу Вы выбрали — или ни одна не подошла? Возврат оформим за наш счёт, код для отправки придёт Вам на e-mail от InPost.')),
    step(7, 'Ответ на выбор клиента', scens(
      scen('А', 'Оставляю оправу без линз', m('ru', 'Отличный выбор!<br><br>Остальные оправы, пожалуйста, верните вместе с бланком. Возврат мы оформим и оплатим сами — код для отправки придёт Вам на e-mail от InPost.<br><br>Блокировку [сумма] zł снимем полностью, а для оплаты выбранной оправы [модель] — [цена] zł пришлём отдельную ссылку от Polcard by Fiserv.')),
      scen('Б', 'Хочу линзы в выбранную оправу', m('ru', 'Прекрасно!<br><br>Пожалуйста, верните все оправы вместе с бланком — выбранную тоже: в неё мы установим линзы. Возврат оформим и оплатим сами — код для отправки придёт Вам на e-mail от InPost.<br><br>Пришлите, пожалуйста, рецепт, и мы рассчитаем стоимость линз. Блокировку снимем полностью, а оплату очков выставим отдельной ссылкой.')),
      scen('В', 'Ничего не подошло', m('ru', 'Спасибо, что попробовали!<br><br>Пожалуйста, верните оправы вместе с бланком. Возврат оформим и оплатим сами — код для отправки придёт Вам на e-mail от InPost. Блокировку [сумма] zł снимем полностью сразу после получения посылки.<br><br>Если захотите, подберём другие модели для новой примерки.')),
    )),
    step(8, 'Возврат оформлен', m('ru', 'Здравствуйте!<br><br>Мы оформили возврат оправ, доставка за наш счёт. На Ваш e-mail придёт <strong>отдельное письмо от InPost с кодом для отправки</strong> — пожалуйста, проверьте «Входящие» и папку «Спам».<br><br>Отследить возврат: [ссылка для отслеживания]<br><br>Пожалуйста, вложите в посылку бланк выбора и отправьте её до [дата].') +
      cons(SMS.ru, 'OK.OPTYK: возврат оправ оформлен, доставка за наш счёт. Код для отправки придёт на e-mail от InPost — проверьте «Входящие» и «Спам». Отправьте посылку до [дата].')),
    step(9, 'Оправы вернулись: снимаем блокировку и отправляем ссылку на оплату', scens(
      scen('А', 'Оправа без линз', m('ru', 'Оправы получили, блокировка [сумма] zł снята.<br><br>К оплате:<br>• Оправа [модель] — [цена] zł<br><br>Мы отправили на Ваш e-mail ссылку на оплату от Polcard by Fiserv. Пожалуйста, проверьте «Входящие» и «Спам». Ссылка действует до конца сегодняшнего дня.')),
      scen('Б', 'Оправа с линзами', m('ru', 'Оправы получили, блокировка [сумма] zł снята.<br><br>Пожалуйста, ещё раз проверьте детали заказа:<br>• Оправа [модель] — [цена] zł<br>• Линзы [тип] — [цена] zł<br>• Диоптрии по рецепту: OP [ ], OL [ ], PD [ ] мм<br>• Итого: [сумма] zł<br><br>Если всё верно, оплатите заказ по ссылке от Polcard by Fiserv — мы отправили её на Ваш e-mail. Пожалуйста, проверьте «Входящие» и «Спам». Ссылка действует до конца сегодняшнего дня.')),
    )),
    step(10, 'За 2 часа до конца рабочего дня, если не оплачено', m('ru', PAY_REMIND.ru)),
    step(11, 'Оплата принята', scens(
      scen('А', 'Оправа без линз', m('ru', 'Здравствуйте!<br><br>Оплата получена, спасибо! Оправа [модель] остаётся у Вас. Хорошего ношения!')),
      scen('Б', 'Оправа с линзами', m('ru', PAID.ru)),
    )),
    step(12, 'Очки отправлены (вариант Б)', m('ru', 'Ваши очки готовы и отправлены!<br><br>' + TRACK.ru + '<br><br>Доставка — за наш счёт. Спасибо, что выбрали OK.OPTYK!')),
  ),
  ua: steps(
    step(1, 'Підтвердження замовлення на приміряння', m('ua', 'Доброго дня!<br><br>Дякуємо за замовлення на приміряння оправ удома.<br><br>Як це працює:<br>1. Перед відправкою оправ ми надішлемо посилання на <strong>преавторизацію — 100 zł за кожну оправу</strong>; у Вашому замовленні [N] оправ, разом [сума] zł. Це тимчасове блокування суми на картці, а не списання грошей.<br>2. Ви приміряєте оправи вдома <strong>5 днів</strong> з моменту отримання посилки.<br>3. У посилці буде бланк — у ньому можна позначити обрану оправу.<br>4. Доставку в обидва боки оформлюємо та оплачуємо ми.<br>5. Після завершення приміряння блокування знімаємо повністю. Якщо вирішите залишити оправу, оплату виставимо окремим посиланням.<br><br>Будь ласка, підтвердіть, що такі умови Вам підходять.')),
    step(2, 'Посилання на преавторизацію — лише коли оправи готові до відправки', cli(CLI.ua, 'Так, підходить. Як пройти преавторизацію?') +
      m('ua', 'Оправи зібрані та готові до відправки.<br><br>Ми надіслали на Ваш e-mail посилання для преавторизації на суму <strong>[сума] zł</strong>. Лист прийде <strong>від платіжного сервісу Polcard by Fiserv</strong>, а не з нашої адреси — будь ласка, перевірте «Вхідні» та папку «Спам».<br><br>Посилання діє <strong>до кінця сьогоднішнього дня</strong>. Щойно блокування буде підтверджено, одразу відправимо посилку.')),
    step(3, 'За 2 години до кінця робочого дня, якщо блокування не підтверджено', m('ua', 'Доброго дня!<br><br>Нагадуємо: оправи для приміряння чекають на відправку. Залишилося підтвердити преавторизацію за посиланням з листа від Polcard by Fiserv — посилання діє до кінця сьогоднішнього дня. Якщо листа не знайшлося, дайте нам відповідь, і ми надішлемо нове посилання.')),
    step(4, 'Оправи відправлено', m('ua', 'Ваші оправи відправлено!<br><br>' + TRACK.ua + '<br><br>У посилці лежить бланк вибору. Позначте в ньому оправу, яка сподобалася, і що Ви хочете зробити:<br>☐ залишити оправу без лінз<br>☐ встановити в неї лінзи за рецептом<br>☐ повернути всі оправи<br><br>Термін приміряння — 5 днів, до [дата]. Якщо захочете поради, надішліть фото в оправах — із задоволенням допоможемо обрати.')),
    step(5, '3-й день приміряння', m('ua', 'Доброго дня!<br><br>Як Вам оправи? Якщо вагаєтеся, надішліть фото в кожній з них — підкажемо, яка краще пасує до форми обличчя. Нагадуємо, що термін приміряння — до [дата].')),
    step(6, 'Термін приміряння минув, а відповіді немає', m('ua', 'Доброго дня!<br><br>Термін приміряння закінчився [дата]. Підкажіть, будь ласка, яку оправу Ви обрали — чи жодна не підійшла? Повернення оформимо за наш рахунок, код для відправки прийде Вам на e-mail від InPost.')),
    step(7, 'Відповідь на вибір клієнта', scens(
      scen('А', 'Залишаю оправу без лінз', m('ua', 'Чудовий вибір!<br><br>Решту оправ, будь ласка, поверніть разом із бланком. Повернення ми оформимо та оплатимо самі — код для відправки прийде Вам на e-mail від InPost.<br><br>Блокування [сума] zł знімемо повністю, а для оплати обраної оправи [модель] — [ціна] zł надішлемо окреме посилання від Polcard by Fiserv.')),
      scen('Б', 'Хочу лінзи в обрану оправу', m('ua', 'Чудово!<br><br>Будь ласка, поверніть усі оправи разом із бланком — обрану теж: у неї ми встановимо лінзи. Повернення оформимо та оплатимо самі — код для відправки прийде Вам на e-mail від InPost.<br><br>Надішліть, будь ласка, рецепт, і ми розрахуємо вартість лінз. Блокування знімемо повністю, а оплату окулярів виставимо окремим посиланням.')),
      scen('В', 'Нічого не підійшло', m('ua', 'Дякуємо, що спробували!<br><br>Будь ласка, поверніть оправи разом із бланком. Повернення оформимо та оплатимо самі — код для відправки прийде Вам на e-mail від InPost. Блокування [сума] zł знімемо повністю одразу після отримання посилки.<br><br>Якщо захочете, підберемо інші моделі для нового приміряння.')),
    )),
    step(8, 'Повернення оформлено', m('ua', 'Доброго дня!<br><br>Ми оформили повернення оправ, доставка за наш рахунок. На Ваш e-mail прийде <strong>окремий лист від InPost з кодом для відправки</strong> — будь ласка, перевірте «Вхідні» та папку «Спам».<br><br>Відстежити повернення: [посилання для відстеження]<br><br>Будь ласка, вкладіть у посилку бланк вибору та відправте її до [дата].') +
      cons(SMS.ua, 'OK.OPTYK: повернення оправ оформлено, доставка за наш рахунок. Код для відправки прийде на e-mail від InPost — перевірте «Вхідні» та «Спам». Надішліть посилку до [дата].')),
    step(9, 'Оправи повернулися: знімаємо блокування й надсилаємо посилання на оплату', scens(
      scen('А', 'Оправа без лінз', m('ua', 'Оправи отримали, блокування [сума] zł знято.<br><br>До оплати:<br>• Оправа [модель] — [ціна] zł<br><br>Ми надіслали на Ваш e-mail посилання на оплату від Polcard by Fiserv. Будь ласка, перевірте «Вхідні» та «Спам». Посилання діє до кінця сьогоднішнього дня.')),
      scen('Б', 'Оправа з лінзами', m('ua', 'Оправи отримали, блокування [сума] zł знято.<br><br>Будь ласка, ще раз перевірте деталі замовлення:<br>• Оправа [модель] — [ціна] zł<br>• Лінзи [тип] — [ціна] zł<br>• Діоптрії за рецептом: OP [ ], OL [ ], PD [ ] мм<br>• Разом: [сума] zł<br><br>Якщо все правильно, оплатіть замовлення за посиланням від Polcard by Fiserv — ми надіслали його на Ваш e-mail. Будь ласка, перевірте «Вхідні» та «Спам». Посилання діє до кінця сьогоднішнього дня.')),
    )),
    step(10, 'За 2 години до кінця робочого дня, якщо не оплачено', m('ua', PAY_REMIND.ua)),
    step(11, 'Оплату прийнято', scens(
      scen('А', 'Оправа без лінз', m('ua', 'Доброго дня!<br><br>Оплату отримано, дякуємо! Оправа [модель] залишається у Вас. Приємного носіння!')),
      scen('Б', 'Оправа з лінзами', m('ua', PAID.ua)),
    )),
    step(12, 'Окуляри відправлено (варіант Б)', m('ua', 'Ваші окуляри готові та відправлені!<br><br>' + TRACK.ua + '<br><br>Доставка — за наш рахунок. Дякуємо, що обрали OK.OPTYK!')),
  ),
  pl: steps(
    step(1, 'Potwierdzenie zamówienia na przymiarkę', m('pl', 'Dzień dobry,<br><br>dziękujemy za złożenie zamówienia na przymiarkę opraw w domu.<br><br>Jak to działa:<br>1. Przed wysyłką opraw prześlemy link do <strong>preautoryzacji — 100 zł za każdą oprawę</strong>; w Państwa zamówieniu jest [N] opraw, łącznie [kwota] zł. To tymczasowa blokada środków na karcie, a nie pobranie pieniędzy.<br>2. Przymiarka w domu trwa <strong>5 dni</strong> od otrzymania paczki.<br>3. W paczce znajdzie się formularz, w którym można zaznaczyć wybraną oprawę.<br>4. Wysyłkę w obie strony organizujemy i opłacamy my.<br>5. Po zakończeniu przymiarki blokadę zwalniamy w całości. Jeśli zdecydują się Państwo zatrzymać oprawę, płatność wyślemy osobnym linkiem.<br><br>Prosimy o potwierdzenie, czy takie warunki Państwu odpowiadają.')),
    step(2, 'Link do preautoryzacji — dopiero gdy oprawy są gotowe do wysyłki', cli(CLI.pl, 'Tak, odpowiada. Jak mam zrobić preautoryzację?') +
      m('pl', 'Oprawy są skompletowane i gotowe do wysyłki.<br><br>Na Państwa adres e-mail wysłaliśmy link do preautoryzacji na kwotę <strong>[kwota] zł</strong>. Wiadomość przyjdzie <strong>od serwisu płatniczego Polcard by Fiserv</strong>, a nie z naszego adresu — prosimy o sprawdzenie skrzynki odbiorczej oraz folderu SPAM.<br><br>Link jest ważny <strong>do końca dzisiejszego dnia</strong>. Gdy tylko blokada zostanie potwierdzona, od razu wyślemy paczkę.')),
    step(3, '2 godziny przed końcem dnia pracy, jeśli blokada niepotwierdzona', m('pl', 'Dzień dobry,<br><br>przypominamy: oprawy do przymiarki czekają na wysyłkę. Wystarczy potwierdzić preautoryzację przez link z wiadomości od Polcard by Fiserv — link jest ważny do końca dzisiejszego dnia. Jeśli wiadomość nie dotarła, prosimy o odpowiedź, a wyślemy nowy link.')),
    step(4, 'Oprawy wysłane', m('pl', 'Oprawy zostały wysłane!<br><br>' + TRACK.pl + '<br><br>W paczce znajduje się formularz wyboru. Prosimy zaznaczyć w nim oprawę, która się spodobała, i co chcą Państwo zrobić:<br>☐ zatrzymać oprawę bez soczewek<br>☐ wstawić do niej soczewki według recepty<br>☐ zwrócić wszystkie oprawy<br><br>Przymiarka trwa 5 dni, do [data]. Jeśli potrzebują Państwo porady, prosimy przesłać zdjęcia w oprawach — chętnie pomożemy wybrać.')),
    step(5, '3. dzień przymiarki', m('pl', 'Dzień dobry,<br><br>jak się Państwu podobają oprawy? W razie wątpliwości prosimy przesłać zdjęcie w każdej z nich — podpowiemy, która najlepiej pasuje do kształtu twarzy. Przypominamy, że przymiarka trwa do [data].')),
    step(6, 'Przymiarka minęła, a odpowiedzi brak', m('pl', 'Dzień dobry,<br><br>przymiarka zakończyła się [data]. Prosimy o informację, którą oprawę Państwo wybrali — czy może żadna nie przypadła do gustu? Zwrot zorganizujemy na nasz koszt, kod nadania przyjdzie e-mailem od InPost.')),
    step(7, 'Odpowiedź na wybór klienta', scens(
      scen('A', 'Zatrzymuję oprawę bez soczewek', m('pl', 'Świetny wybór!<br><br>Pozostałe oprawy prosimy odesłać razem z formularzem. Zwrot zorganizujemy i opłacimy sami — kod nadania przyjdzie e-mailem od InPost.<br><br>Blokadę [kwota] zł zwolnimy w całości, a za wybraną oprawę [model] — [cena] zł wyślemy osobny link do płatności od Polcard by Fiserv.')),
      scen('B', 'Chcę soczewki w wybranej oprawie', m('pl', 'Wspaniale!<br><br>Prosimy odesłać wszystkie oprawy razem z formularzem — wybraną również: wstawimy do niej soczewki. Zwrot zorganizujemy i opłacimy sami — kod nadania przyjdzie e-mailem od InPost.<br><br>Prosimy o przesłanie recepty, a wycenimy soczewki. Blokadę zwolnimy w całości, a płatność za okulary wyślemy osobnym linkiem.')),
      scen('C', 'Nic nie pasuje', m('pl', 'Dziękujemy, że Państwo spróbowali!<br><br>Prosimy odesłać oprawy razem z formularzem. Zwrot zorganizujemy i opłacimy sami — kod nadania przyjdzie e-mailem od InPost. Blokadę [kwota] zł zwolnimy w całości zaraz po otrzymaniu paczki.<br><br>Jeśli Państwo zechcą, dobierzemy inne modele do kolejnej przymiarki.')),
    )),
    step(8, 'Zwrot przygotowany', m('pl', 'Dzień dobry,<br><br>przygotowaliśmy zwrot opraw na nasz koszt. Na Państwa adres e-mail przyjdzie <strong>osobna wiadomość od InPost z kodem nadania</strong> — prosimy o sprawdzenie skrzynki odbiorczej oraz folderu SPAM.<br><br>Śledzenie zwrotu: [link do śledzenia]<br><br>Prosimy włożyć do paczki formularz wyboru i nadać ją do [data].') +
      cons(SMS.pl, 'OK.OPTYK: przygotowaliśmy zwrot opraw na nasz koszt. Kod nadania przyjdzie e-mailem od InPost — prosimy sprawdzić skrzynkę odbiorczą i folder SPAM. Prosimy nadać paczkę do [data].')),
    step(9, 'Oprawy wróciły: zwalniamy blokadę i wysyłamy link do płatności', scens(
      scen('A', 'Oprawa bez soczewek', m('pl', 'Otrzymaliśmy oprawy, blokada [kwota] zł została zwolniona.<br><br>Do zapłaty:<br>• Oprawa [model] — [cena] zł<br><br>Na Państwa adres e-mail wysłaliśmy link do płatności od Polcard by Fiserv. Prosimy o sprawdzenie skrzynki odbiorczej oraz folderu SPAM. Link jest ważny do końca dzisiejszego dnia.')),
      scen('B', 'Oprawa z soczewkami', m('pl', 'Otrzymaliśmy oprawy, blokada [kwota] zł została zwolniona.<br><br>Prosimy jeszcze raz sprawdzić szczegóły zamówienia:<br>• Oprawa [model] — [cena] zł<br>• Soczewki [typ] — [cena] zł<br>• Moc według recepty: OP [ ], OL [ ], PD [ ] mm<br>• Razem: [kwota] zł<br><br>Jeśli wszystko się zgadza, prosimy opłacić zamówienie przez link od Polcard by Fiserv — wysłaliśmy go na Państwa adres e-mail. Prosimy o sprawdzenie skrzynki odbiorczej oraz folderu SPAM. Link jest ważny do końca dzisiejszego dnia.')),
    )),
    step(10, '2 godziny przed końcem dnia pracy, jeśli brak płatności', m('pl', PAY_REMIND.pl)),
    step(11, 'Płatność przyjęta', scens(
      scen('A', 'Oprawa bez soczewek', m('pl', 'Dzień dobry,<br><br>płatność została zaksięgowana, dziękujemy! Oprawa [model] zostaje u Państwa. Miłego noszenia!')),
      scen('B', 'Oprawa z soczewkami', m('pl', PAID.pl)),
    )),
    step(12, 'Okulary wysłane (wariant B)', m('pl', 'Państwa okulary są gotowe i zostały wysłane!<br><br>' + TRACK.pl + '<br><br>Dostawa na nasz koszt. Dziękujemy za wybór OK.OPTYK!')),
  ),
};

// ---------- Вкладка «Заказ с сайта» ----------
const siteBody = {
  ru: steps(
    step(1, 'Проверка и подтверждение заказа', scens(
      scen('С линзами', 'Оправа + линзы по рецепту', m('ru', 'Здравствуйте!<br><br>Спасибо за заказ в нашем магазине. Пожалуйста, проверьте детали:<br><br>• Оправа [модель] — [цена] zł<br>• Линзы [тип] — [цена] zł<br>• Изготовление по рецепту: OP [ ], OL [ ], PD [ ] мм<br>• Доставка — бесплатно<br><br>Подтвердите, пожалуйста, что всё указано верно. Заказ оплачивается онлайн по ссылке, которую мы пришлём после подтверждения.')),
      scen('Без линз', 'Только оправа', m('ru', 'Здравствуйте!<br><br>Спасибо за заказ в нашем магазине. Пожалуйста, проверьте детали:<br><br>• Оправа [модель] — [цена] zł<br>• Доставка — бесплатно<br><br>Подтвердите, пожалуйста, что всё указано верно. Заказ оплачивается онлайн по ссылке, которую мы пришлём после подтверждения.')),
    )),
    step(2, 'Ссылка на оплату', cli(CLI.ru, 'Да, всё верно.') +
      m('ru', 'Спасибо за подтверждение!<br><br>Мы отправили ссылку на оплату на Ваш e-mail. Письмо придёт <strong>от платёжного сервиса Polcard by Fiserv</strong>, а не с нашего адреса — пожалуйста, проверьте «Входящие» и папку «Спам».<br><br>Ссылка действует до конца сегодняшнего дня. Сразу после оплаты передадим заказ в работу.')),
    step(3, 'За 2 часа до конца рабочего дня, если не оплачено', m('ru', PAY_REMIND.ru)),
    step(4, 'Оплата принята', m('ru', PAID.ru)),
    step(5, 'Заказ отправлен', m('ru', 'Ваш заказ отправлен!<br><br>' + TRACK.ru + '<br><br>Доставка — за наш счёт. Спасибо, что выбрали OK.OPTYK!')),
  ),
  ua: steps(
    step(1, 'Перевірка та підтвердження замовлення', scens(
      scen('З лінзами', 'Оправа + лінзи за рецептом', m('ua', 'Доброго дня!<br><br>Дякуємо за замовлення в нашому магазині. Будь ласка, перевірте деталі:<br><br>• Оправа [модель] — [ціна] zł<br>• Лінзи [тип] — [ціна] zł<br>• Виготовлення за рецептом: OP [ ], OL [ ], PD [ ] мм<br>• Доставка — безкоштовно<br><br>Підтвердіть, будь ласка, що все вказано правильно. Замовлення оплачується онлайн за посиланням, яке ми надішлемо після підтвердження.')),
      scen('Без лінз', 'Лише оправа', m('ua', 'Доброго дня!<br><br>Дякуємо за замовлення в нашому магазині. Будь ласка, перевірте деталі:<br><br>• Оправа [модель] — [ціна] zł<br>• Доставка — безкоштовно<br><br>Підтвердіть, будь ласка, що все вказано правильно. Замовлення оплачується онлайн за посиланням, яке ми надішлемо після підтвердження.')),
    )),
    step(2, 'Посилання на оплату', cli(CLI.ua, 'Так, усе правильно.') +
      m('ua', 'Дякуємо за підтвердження!<br><br>Ми надіслали посилання на оплату на Ваш e-mail. Лист прийде <strong>від платіжного сервісу Polcard by Fiserv</strong>, а не з нашої адреси — будь ласка, перевірте «Вхідні» та папку «Спам».<br><br>Посилання діє до кінця сьогоднішнього дня. Одразу після оплати передамо замовлення в роботу.')),
    step(3, 'За 2 години до кінця робочого дня, якщо не оплачено', m('ua', PAY_REMIND.ua)),
    step(4, 'Оплату прийнято', m('ua', PAID.ua)),
    step(5, 'Замовлення відправлено', m('ua', 'Ваше замовлення відправлено!<br><br>' + TRACK.ua + '<br><br>Доставка — за наш рахунок. Дякуємо, що обрали OK.OPTYK!')),
  ),
  pl: steps(
    step(1, 'Sprawdzenie i potwierdzenie zamówienia', scens(
      scen('Z soczewkami', 'Oprawa + soczewki według recepty', m('pl', 'Dzień dobry,<br><br>dziękujemy za złożenie zamówienia w naszym sklepie. Prosimy o sprawdzenie szczegółów:<br><br>• Oprawa [model] — [cena] zł<br>• Soczewki [typ] — [cena] zł<br>• Wykonanie według recepty: OP [ ], OL [ ], PD [ ] mm<br>• Dostawa — bezpłatna<br><br>Prosimy o potwierdzenie, czy wszystkie dane są prawidłowe. Płatność odbywa się online przez link, który wyślemy po potwierdzeniu.')),
      scen('Bez soczewek', 'Sama oprawa', m('pl', 'Dzień dobry,<br><br>dziękujemy za złożenie zamówienia w naszym sklepie. Prosimy o sprawdzenie szczegółów:<br><br>• Oprawa [model] — [cena] zł<br>• Dostawa — bezpłatna<br><br>Prosimy o potwierdzenie, czy wszystkie dane są prawidłowe. Płatność odbywa się online przez link, który wyślemy po potwierdzeniu.')),
    )),
    step(2, 'Link do płatności', cli(CLI.pl, 'Tak, wszystko się zgadza.') +
      m('pl', 'Dziękujemy za potwierdzenie!<br><br>Link do płatności został wysłany na Państwa adres e-mail. Wiadomość przyjdzie <strong>od serwisu płatniczego Polcard by Fiserv</strong>, a nie z naszego adresu — prosimy o sprawdzenie skrzynki odbiorczej oraz folderu SPAM.<br><br>Link jest ważny do końca dzisiejszego dnia. Zaraz po płatności przekażemy zamówienie do realizacji.')),
    step(3, '2 godziny przed końcem dnia pracy, jeśli brak płatności', m('pl', PAY_REMIND.pl)),
    step(4, 'Płatność przyjęta', m('pl', PAID.pl)),
    step(5, 'Zamówienie wysłane', m('pl', 'Państwa zamówienie zostało wysłane!<br><br>' + TRACK.pl + '<br><br>Dostawa na nasz koszt. Dziękujemy za wybór OK.OPTYK!')),
  ),
};

// ---------- Вкладка «Проблемы с заказом» (сначала — самые частые) ----------
const issuesBody = {
  ru: scens(
    scen('Линзы', 'Выбраны линзы без диоптрий', m('ru', 'Здравствуйте!<br><br>В заказе выбраны линзы без диоптрий. Так и задумано?<br><br>После Вашего подтверждения передадим заказ в работу.')),
    scen('Примерка', 'Клиент спрашивает, что такое преавторизация', m('ru', 'Преавторизация — это временная блокировка суммы на карте на время примерки. Деньги не списываются. Мы пришлём Вам ссылку для подтверждения — она придёт на e-mail от Polcard by Fiserv. После окончания примерки блокировку снимем полностью.')),
    scen('Нет в наличии', 'Выбранной оправы уже нет', m('ru', 'Здравствуйте!<br><br>Спасибо за заказ. К сожалению, [одной / двух] из выбранных оправ уже нет в наличии. Вместо них предлагаем такие модели:<br>[ссылка]<br>[ссылка]<br><br>Подойдёт ли Вам какая-нибудь из них?')),
    scen('Ошибка цены', 'На сайте показана неверная цена', m('ru', 'Здравствуйте!<br><br>Из-за технической ошибки на нашем сайте цена оправы [модель] отображалась как [x] zł. Её правильная цена — [y] zł.<br><br>Приносим извинения за неудобства. Пожалуйста, подтвердите, хотите ли Вы оформить заказ на этих условиях.')),
    scen('Примерка', 'Клиент отказался от одной из оправ', m('ru', 'Конечно, учтём это и не будем отправлять оправу [модель]. Сумма преавторизации составит [новая сумма] zł.')),
  ),
  ua: scens(
    scen('Лінзи', 'Обрано лінзи без діоптрій', m('ua', 'Доброго дня!<br><br>У замовленні обрано лінзи без діоптрій. Так і задумано?<br><br>Після Вашого підтвердження передамо замовлення в роботу.')),
    scen('Приміряння', 'Клієнт питає, що таке преавторизація', m('ua', 'Преавторизація — це тимчасове блокування суми на картці на час приміряння. Гроші не списуються. Ми надішлемо Вам посилання для підтвердження — воно прийде на e-mail від Polcard by Fiserv. Після завершення приміряння блокування знімемо повністю.')),
    scen('Немає в наявності', 'Обраної оправи вже немає', m('ua', 'Доброго дня!<br><br>Дякуємо за замовлення. На жаль, [однієї / двох] з обраних оправ уже немає в наявності. Замість них пропонуємо такі моделі:<br>[посилання]<br>[посилання]<br><br>Чи підійде Вам якась із них?')),
    scen('Помилка ціни', 'На сайті показано неправильну ціну', m('ua', 'Доброго дня!<br><br>Через технічну помилку на нашому сайті ціна оправи [модель] відображалася як [x] zł. Її правильна ціна — [y] zł.<br><br>Перепрошуємо за незручності. Будь ласка, підтвердіть, чи бажаєте Ви оформити замовлення на цих умовах.')),
    scen('Приміряння', 'Клієнт відмовився від однієї з оправ', m('ua', 'Звісно, врахуємо це й не відправлятимемо оправу [модель]. Сума преавторизації становитиме [нова сума] zł.')),
  ),
  pl: scens(
    scen('Soczewki', 'Wybrano soczewki bez mocy', m('pl', 'Dzień dobry,<br><br>w zamówieniu została wybrana soczewka bez mocy. Czy jest to zamierzone?<br><br>Po potwierdzeniu przekażemy zamówienie do realizacji.')),
    scen('Przymiarka', 'Klient pyta, czym jest preautoryzacja', m('pl', 'Preautoryzacja polega na czasowej blokadzie kwoty na karcie płatniczej na czas przymiarki. Nie jest to pobranie pieniędzy. Prześlemy Państwu link do jej potwierdzenia — przyjdzie e-mailem od Polcard by Fiserv. Po zakończeniu przymiarki blokada zostanie zwolniona w całości.')),
    scen('Brak w magazynie', 'Wybranej oprawy już nie ma', m('pl', 'Dzień dobry,<br><br>dziękujemy za zamówienie. Niestety [jedna / dwie] z wybranych opraw nie są już dostępne. W zamian proponujemy następujące modele:<br>[link]<br>[link]<br><br>Czy któraś z tych propozycji przypadnie Państwu do gustu?')),
    scen('Błąd ceny', 'Na stronie wyświetliła się zła cena', m('pl', 'Dzień dobry,<br><br>z powodu błędu technicznego na naszej stronie cena oprawy [model] została wyświetlona jako [x] zł. Jej prawidłowa cena wynosi [y] zł.<br><br>Przepraszamy za niedogodności i prosimy o potwierdzenie, czy podtrzymują Państwo chęć realizacji zamówienia na tych warunkach.')),
    scen('Przymiarka', 'Klient rezygnuje z jednej z opraw', m('pl', 'Oczywiście, uwzględnimy tę informację i nie będziemy wysyłać oprawy [model]. Kwota preautoryzacji wyniesie [nowa kwota] zł.')),
  ),
};

export const t = {
  headerTitle: { ru: 'Продажа очков онлайн', ua: 'Продаж окулярів онлайн', pl: 'Sprzedaż okularów online' } as T,
  headerSub:   { ru: 'Помогаем клиенту выбрать и оформить заказ дистанционно — с доставкой по Польше', ua: 'Допомагаємо клієнту обрати та оформити замовлення дистанційно — з доставкою по Польщі', pl: 'Pomagamy klientowi wybrać i złożyć zamówienie zdalnie — z dostawą na terenie Polski' } as T,

  tabMain:   { ru: '💬 Клиент пишет сам', ua: '💬 Клієнт пише сам', pl: '💬 Klient pisze sam' } as T,
  tabTryon:  { ru: '📦 Примерка дома', ua: '📦 Приміряння вдома', pl: '📦 Przymiarka w domu' } as T,
  tabSite:   { ru: '🛒 Заказ с сайта', ua: '🛒 Замовлення з сайту', pl: '🛒 Zamówienie ze strony' } as T,
  tabIssues: { ru: '⚠️ Проблемы с заказом', ua: '⚠️ Проблеми із замовленням', pl: '⚠️ Problemy z zamówieniem' } as T,
  tabLost:   { ru: '😶 Клиент пропал', ua: '😶 Клієнт зник', pl: '😶 Klient zniknął' } as T,

  introMain: {
    ru: `Клиент пишет сам в личные сообщения и хочет заказать очки с доставкой. Задача — помочь подобрать оправу и оформить заказ, не торопя клиента. Ссылка на оплату приходит на e-mail от Polcard by Fiserv, поэтому e-mail спрашиваем вместе с данными для доставки.`,
    ua: `Клієнт пише сам в особисті повідомлення і хоче замовити окуляри з доставкою. Завдання — допомогти підібрати оправу та оформити замовлення, не кваплячи клієнта. Посилання на оплату приходить на e-mail від Polcard by Fiserv, тому e-mail питаємо разом з даними для доставки.`,
    pl: `Klient sam pisze w wiadomości prywatnej i chce zamówić okulary z dostawą. Zadanie — pomóc dobrać oprawę i złożyć zamówienie, nie poganiając klienta. Link do płatności przychodzi e-mailem od Polcard by Fiserv, dlatego o e-mail pytamy razem z danymi do dostawy.`,
  } as T,
  introTryon: {
    ru: `Клиент оформил на сайте примерку до 5 оправ дома. Переписка — по e-mail, на «Вы». Преавторизация 100 zł за оправу, срок примерки 5 дней, все пересылки за наш счёт.`,
    ua: `Клієнт оформив на сайті приміряння до 5 оправ удома. Листування — e-mail, на «Ви». Преавторизація 100 zł за оправу, термін приміряння 5 днів, усі пересилання за наш рахунок.`,
    pl: `Klient zamówił na stronie przymiarkę do 5 opraw w domu. Korespondencja — e-mailem, w formie grzecznościowej. Preautoryzacja 100 zł za oprawę, przymiarka 5 dni, wszystkie przesyłki na nasz koszt.`,
  } as T,
  introSite: {
    ru: `Клиент сразу выбрал на сайте оправу — с линзами или без. Проверяем детали, отправляем ссылку на оплату, после оплаты — отправляем заказ. Доставка за наш счёт.`,
    ua: `Клієнт одразу обрав на сайті оправу — з лінзами чи без. Перевіряємо деталі, надсилаємо посилання на оплату, після оплати — відправляємо замовлення. Доставка за наш рахунок.`,
    pl: `Klient od razu wybrał na stronie oprawę — z soczewkami lub bez. Sprawdzamy szczegóły, wysyłamy link do płatności, po płatności — wysyłamy zamówienie. Dostawa na nasz koszt.`,
  } as T,
  introIssues: {
    ru: `С заказом с сайта что-то не так: оправы нет, ошиблась цена, странные параметры линз. Пишем клиенту до того, как отправить ссылку на оплату или преавторизацию.`,
    ua: `Із замовленням із сайту щось не так: оправи немає, помилка в ціні, дивні параметри лінз. Пишемо клієнту до того, як надіслати посилання на оплату чи преавторизацію.`,
    pl: `Coś jest nie tak z zamówieniem ze strony: brak oprawy, błąd ceny, dziwne parametry soczewek. Piszemy do klienta, zanim wyślemy link do płatności lub preautoryzacji.`,
  } as T,
  tipTryon: {
    ru: `<h4>💡 Важно при примерке</h4><ul><li><strong>Ссылку на преавторизацию отправляем только тогда, когда оправы собраны и готовы к отправке.</strong> Банк клиента держит блокировку 7–10 дней, и сократить этот срок мы не можем.</li><li style="margin-top:10px;">Пока блокировка не подтверждена, оправы не отправляем.</li><li style="margin-top:10px;">После возврата снимаем блокировку <strong>целиком</strong> в панели Polcard, а оплату выбранного выставляем <strong>отдельной ссылкой</strong>.</li><li style="margin-top:10px;">Возврат оправ оформляем и оплачиваем мы: создаём код в приложении InPost, он уходит клиенту на e-mail.</li><li style="margin-top:10px;">Ссылки на преавторизацию и на оплату действуют до конца текущего дня, напоминаем за 2 часа до конца рабочего дня.</li></ul>`,
    ua: `<h4>💡 Важливо під час приміряння</h4><ul><li><strong>Посилання на преавторизацію надсилаємо лише тоді, коли оправи зібрані та готові до відправки.</strong> Банк клієнта тримає блокування 7–10 днів, і скоротити цей термін ми не можемо.</li><li style="margin-top:10px;">Поки блокування не підтверджено, оправи не відправляємо.</li><li style="margin-top:10px;">Після повернення знімаємо блокування <strong>повністю</strong> в панелі Polcard, а оплату обраного виставляємо <strong>окремим посиланням</strong>.</li><li style="margin-top:10px;">Повернення оправ оформлюємо та оплачуємо ми: створюємо код у застосунку InPost, він надходить клієнту на e-mail.</li><li style="margin-top:10px;">Посилання на преавторизацію та на оплату діють до кінця поточного дня, нагадуємо за 2 години до кінця робочого дня.</li></ul>`,
    pl: `<h4>💡 Ważne przy przymiarce</h4><ul><li><strong>Link do preautoryzacji wysyłamy dopiero wtedy, gdy oprawy są skompletowane i gotowe do wysyłki.</strong> Bank klienta utrzymuje blokadę 7–10 dni i nie możemy tego skrócić.</li><li style="margin-top:10px;">Dopóki blokada nie jest potwierdzona, nie wysyłamy opraw.</li><li style="margin-top:10px;">Po zwrocie zwalniamy blokadę <strong>w całości</strong> w panelu Polcard, a płatność za wybrany produkt wysyłamy <strong>osobnym linkiem</strong>.</li><li style="margin-top:10px;">Zwrot opraw organizujemy i opłacamy my: tworzymy kod w aplikacji InPost, trafia on do klienta e-mailem.</li><li style="margin-top:10px;">Linki do preautoryzacji i do płatności są ważne do końca bieżącego dnia, przypominamy 2 godziny przed końcem dnia pracy.</li></ul>`,
  } as T,

  tryonBody: tryonBody as T,
  siteBody: siteBody as T,
  issuesBody: issuesBody as T,
  introLost: {
    ru: `Клиент прислал рецепт и перестал отвечать. Не давим, но напоминаем — мягко и с пользой для клиента.`,
    ua: `Клієнт надіслав рецепт і перестав відповідати. Не тиснемо, але нагадуємо — м'яко та з користю для клієнта.`,
    pl: `Klient przysłał receptę i przestał odpowiadać. Nie naciskamy, ale przypominamy — delikatnie i z korzyścią dla klienta.`,
  } as T,

  mainBody: {
    ru: `<div class="steps">
        <div class="step">
          <div class="step-header"><span class="step-num">1</span> Приветствие и запрос рецепта</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Клиент</div>Здравствуйте. Хочу заказать очки по своему рецепту с доставкой по Польше.</div>
              <div class="msg consultant"><div class="msg-label">Консультант</div>Здравствуйте 😊<br><br>С удовольствием поможем подобрать для вас очки.<br><br>Пришлите, пожалуйста, рецепт на очки, а также подскажите:<br>• уже носите очки сейчас?<br>• нужна только замена очков или хотите попробовать новую форму оправы?</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">2</span> Уточнение предпочтений по оправе</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Клиент</div>Да, ношу очки постоянно. Хочу новые.</div>
              <div class="msg consultant"><div class="msg-label">Консультант</div>Отлично 😊<br><br>Тогда помогу подобрать вариант, который будет комфортным именно для вас.<br><br>Подскажите, пожалуйста:<br>• какая форма оправ вам нравится — более классическая или современная?<br>• предпочитаете металл или пластик?<br>• есть ли пожелания по цвету?</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">3</span> Уточнение бюджета</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Клиент</div>Люблю металлические оправы. Что-то универсальное.</div>
              <div class="msg consultant"><div class="msg-label">Консультант</div>Поняла 😊<br><br>Чтобы подобрать подходящие модели, отправлю вам несколько вариантов оправ.<br><br>Подскажите, пожалуйста, ориентировочный бюджет на готовые очки:<br>• до 500 zł<br>• 500–1000 zł<br>• 1000 zł+</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">4</span> Отправка подборки оправ</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Клиент</div>До 1000 zł.</div>
              <div class="msg consultant"><div class="msg-label">Консультант</div>Отлично.<br><br>Тогда подготовлю несколько вариантов в этом бюджете и сразу рассчитаю стоимость очков с линзами по вашему рецепту 😊<br><br><em class="note">(Отправляем подборку оправ)</em></div>
              <div class="msg consultant" style="background:var(--lime-light);"><div class="msg-label">Консультант — подборка</div>Подготовила для вас несколько вариантов.<br><br>№1 — классическая металлическая оправа<br>№2 — более лёгкая минималистичная модель<br>№3 — универсальная модель для ежедневного ношения<br><br>Какая нравится больше всего?</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">5</span> Расчёт стоимости и оформление заказа</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Клиент</div>Первая.</div>
              <div class="msg consultant"><div class="msg-label">Консультант</div>Хороший выбор 😊<br><br>В данной оправе стоимость очков по вашему рецепту составит <strong>890 zł</strong> вместе с линзами.<br><br>В стоимость входит:<br>✔ изготовление линз по вашему рецепту<br>✔ установка линз в оправу<br>✔ настройка очков перед отправкой<br>✔ доставка по Польше<br><br>Если вариант подходит, могу подготовить заказ 😊<br><br>Для оформления понадобятся:<br>• имя и фамилия<br>• номер телефона<br>• адрес доставки<br>• e-mail (на него придёт ссылка на оплату)</div>
            </div>
          </div>
        </div>
        ${mainExtra.ru}
      </div>`,
    ua: `<div class="steps">
        <div class="step">
          <div class="step-header"><span class="step-num">1</span> Привітання та запит рецепту</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Клієнт</div>Доброго дня. Хочу замовити окуляри за своїм рецептом з доставкою по Польщі.</div>
              <div class="msg consultant"><div class="msg-label">Консультант</div>Доброго дня 😊<br><br>З задоволенням допоможемо підібрати для вас окуляри.<br><br>Пришліть, будь ласка, рецепт на окуляри, а також підкажіть:<br>• вже носите окуляри зараз?<br>• потрібна лише заміна чи хочете спробувати нову форму оправи?</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">2</span> Уточнення побажань щодо оправи</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Клієнт</div>Так, ношу окуляри постійно. Хочу нові.</div>
              <div class="msg consultant"><div class="msg-label">Консультант</div>Чудово 😊<br><br>Тоді допоможу підібрати варіант, який буде комфортним саме для вас.<br><br>Підкажіть, будь ласка:<br>• яка форма оправ вам подобається — класична чи сучасна?<br>• надаєте перевагу металу чи пластику?<br>• є побажання щодо кольору?</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">3</span> Уточнення бюджету</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Клієнт</div>Люблю металеві оправи. Щось універсальне.</div>
              <div class="msg consultant"><div class="msg-label">Консультант</div>Зрозуміла 😊<br><br>Щоб підібрати підходящі моделі, відправлю вам кілька варіантів оправ.<br><br>Підкажіть, будь ласка, орієнтовний бюджет на готові окуляри:<br>• до 500 zł<br>• 500–1000 zł<br>• 1000 zł+</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">4</span> Відправка добірки оправ</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Клієнт</div>До 1000 zł.</div>
              <div class="msg consultant"><div class="msg-label">Консультант</div>Чудово.<br><br>Тоді підготую кілька варіантів у цьому бюджеті та одразу розрахую вартість окулярів з лінзами за вашим рецептом 😊<br><br><em class="note">(Відправляємо добірку оправ)</em></div>
              <div class="msg consultant" style="background:var(--lime-light);"><div class="msg-label">Консультант — добірка</div>Підготувала для вас кілька варіантів.<br><br>№1 — класична металева оправа<br>№2 — легша мінімалістична модель<br>№3 — універсальна модель для щоденного носіння<br><br>Яка подобається найбільше?</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">5</span> Розрахунок вартості та оформлення замовлення</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Клієнт</div>Перша.</div>
              <div class="msg consultant"><div class="msg-label">Консультант</div>Гарний вибір 😊<br><br>В даній оправі вартість окулярів за вашим рецептом складе <strong>890 zł</strong> разом з лінзами.<br><br>В вартість входить:<br>✔ виготовлення лінз за вашим рецептом<br>✔ встановлення лінз в оправу<br>✔ налаштування окулярів перед відправкою<br>✔ доставка по Польщі<br><br>Якщо варіант підходить, можу підготувати замовлення 😊<br><br>Для оформлення потрібні:<br>• ім'я та прізвище<br>• номер телефону<br>• адреса доставки<br>• e-mail (на нього прийде посилання на оплату)</div>
            </div>
          </div>
        </div>
        ${mainExtra.ua}
      </div>`,
    pl: `<div class="steps">
        <div class="step">
          <div class="step-header"><span class="step-num">1</span> Powitanie i prośba o receptę</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Klient</div>Dzień dobry. Chciałbym/Chciałabym zamówić okulary na podstawie recepty z dostawą po Polsce.</div>
              <div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry 😊<br><br>Z przyjemnością pomożemy dobrać dla Państwa okulary.<br><br>Proszę przesłać receptę, a także proszę powiedzieć:<br>• czy noszą już Państwo okulary?<br>• czy potrzebują Państwo tylko wymiany, czy chcieliby Państwo spróbować nowego kształtu oprawy?</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">2</span> Pytania o preferencje dotyczące oprawy</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Klient</div>Tak, noszę okulary na stałe. Chcę nowe.</div>
              <div class="msg consultant"><div class="msg-label">Konsultant</div>Świetnie 😊<br><br>Pomogę dobrać opcję, która będzie komfortowa właśnie dla Państwa.<br><br>Proszę powiedzieć:<br>• jaki kształt opraw Państwu odpowiada — klasyczny czy nowoczesny?<br>• preferują Państwo metal czy plastik?<br>• czy mają Państwo preferencje kolorystyczne?</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">3</span> Pytanie o budżet</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Klient</div>Lubię metalowe oprawy. Coś uniwersalnego.</div>
              <div class="msg consultant"><div class="msg-label">Konsultant</div>Rozumiem 😊<br><br>Aby dobrać odpowiednie modele, wyślę kilka propozycji opraw pasujących do Państwa parametrów.<br><br>Proszę powiedzieć, jaki mają Państwo orientacyjny budżet na gotowe okulary:<br>• do 500 zł<br>• 500–1000 zł<br>• 1000 zł+</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">4</span> Wysłanie propozycji opraw</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Klient</div>Do 1000 zł.</div>
              <div class="msg consultant"><div class="msg-label">Konsultant</div>Świetnie.<br><br>Przygotowuję kilka opcji w tym budżecie i od razu obliczam koszt okularów z soczewkami wg Państwa recepty 😊<br><br><em class="note">(Wysyłamy propozycje opraw)</em></div>
              <div class="msg consultant" style="background:var(--lime-light);"><div class="msg-label">Konsultant — propozycje</div>Przygotowałam/Przygotowałem kilka propozycji.<br><br>№1 — klasyczna metalowa oprawa<br>№2 — lżejszy minimalistyczny model<br>№3 — uniwersalny model na co dzień<br><br>Która podoba się Państwu najbardziej?</div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">5</span> Wycena i złożenie zamówienia</div>
          <div class="step-body">
            <div class="dialogue">
              <div class="msg client"><div class="msg-label">Klient</div>Pierwsza.</div>
              <div class="msg consultant"><div class="msg-label">Konsultant</div>Dobry wybór 😊<br><br>W tej oprawie koszt okularów wg Państwa recepty wyniesie <strong>890 zł</strong> razem z soczewkami.<br><br>W cenie uwzględnione:<br>✔ wykonanie soczewek wg recepty<br>✔ osadzenie soczewek w oprawie<br>✔ regulacja okularów przed wysyłką<br>✔ dostawa po Polsce<br><br>Jeśli opcja odpowiada, mogę przygotować zamówienie 😊<br><br>Do realizacji potrzebne:<br>• imię i nazwisko<br>• numer telefonu<br>• adres dostawy<br>• adres e-mail (przyjdzie na niego link do płatności)</div>
            </div>
          </div>
        </div>
        ${mainExtra.pl}
      </div>`,
  } as T,

  lostBody: {
    ru: `<div class="steps">
        <div class="step">
          <div class="step-header"><span class="step-num">1</span> Сразу после получения рецепта</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Спасибо за рецепт 😊<br><br>Сейчас подготовлю расчёт и помогу подобрать подходящие варианты оправ.<br><br><em class="note">(Отправили расчёт — клиент не ответил)</em></div></div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">2</span> Через 1 день</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Здравствуйте 🤗<br><br>Подготовила для вас расчёт по рецепту.<br><br>Также могу подобрать несколько оправ под ваши параметры и пожелания.<br><br>Подскажите, больше нравятся металлические или пластиковые оправы?</div></div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">3</span> Через 3 дня</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Здравствуйте 🙃<br><br>Если ещё рассматриваете покупку очков, могу показать варианты. Удобно ли сейчас подобрать оправы/линзы?</div></div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">4</span> Через 7 дней</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Здравствуйте 😊<br><br>Подскажите, удалось уже решить вопрос с новыми очками или пока ещё находитесь в поиске?<br><br>Если понадобится помощь — с удовольствием помогу подобрать подходящий вариант.</div></div>
        </div>
      </div>`,
    ua: `<div class="steps">
        <div class="step">
          <div class="step-header"><span class="step-num">1</span> Одразу після отримання рецепту</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Дякую за рецепт 😊<br><br>Зараз підготую розрахунок та допоможу підібрати підходящі варіанти оправ.<br><br><em class="note">(Відправили розрахунок — клієнт не відповів)</em></div></div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">2</span> Через 1 день</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Доброго дня 🤗<br><br>Підготувала для вас розрахунок за рецептом.<br><br>Також можу підібрати кілька оправ під ваші параметри та побажання.<br><br>Підкажіть, більше подобаються металеві чи пластикові оправи?</div></div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">3</span> Через 3 дні</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Доброго дня 🙃<br><br>Якщо ще розглядаєте купівлю окулярів, можу показати варіанти. Зручно зараз підібрати оправи/лінзи?</div></div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">4</span> Через 7 днів</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Доброго дня 😊<br><br>Підкажіть, вдалося вже вирішити питання з новими окулярами чи ще в пошуку?<br><br>Якщо знадобиться допомога — з задоволенням допоможу підібрати підходящий варіант.</div></div>
        </div>
      </div>`,
    pl: `<div class="steps">
        <div class="step">
          <div class="step-header"><span class="step-num">1</span> Zaraz po otrzymaniu recepty</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Dziękujemy za receptę 😊<br><br>Przygotowuję teraz wycenę i pomogę dobrać odpowiednie oprawy.<br><br><em class="note">(Wysłano wycenę — klient nie odpowiedział)</em></div></div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">2</span> Po 1 dniu</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry 🤗<br><br>Przygotowałam/Przygotowałem wycenę wg Państwa recepty.<br><br>Mogę również zaproponować kilka opraw dopasowanych do Państwa parametrów.<br><br>Czy woleliby Państwo metalowe czy plastikowe oprawy?</div></div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">3</span> Po 3 dniach</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry 🙃<br><br>Jeśli nadal rozważają Państwo zakup okularów, mogę pokazać propozycje. Czy jest wygodny moment na dobór?</div></div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">4</span> Po 7 dniach</div>
          <div class="step-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry 😊<br><br>Czy udało się już Państwu podjąć decyzję w sprawie nowych okularów?<br><br>Jeśli będą Państwo potrzebować pomocy — chętnie pomogę dobrać odpowiednią opcję.</div></div>
        </div>
      </div>`,
  } as T,

  tipLost: {
    ru: `<h4>💡 Принцип работы с «потерявшимся» клиентом</h4>
      <ul>
        <li>Не давим и не торопим — человек может быть занят или думает.</li>
        <li>Каждое напоминание добавляет ценность: подборка, расчёт, вопрос о предпочтениях.</li>
        <li>После 4-го касания без ответа — переносим в отложенные и возвращаемся через месяц.</li>
      </ul>`,
    ua: `<h4>💡 Принцип роботи з клієнтом, що «зник»</h4><ul><li>Не тиснемо й не квапимо — людина може бути зайнята або обмірковує.</li><li>Кожне нагадування додає цінність: добірка, розрахунок, запитання про вподобання.</li><li>Після 4-го дотику без відповіді — переносимо у відкладені та повертаємося за місяць.</li></ul>`,
    pl: `<h4>💡 Zasada pracy z «zaginionym» klientem</h4><ul><li>Nie naciskamy i nie poganiamy — osoba może być zajęta lub się zastanawia.</li><li>Każde przypomnienie wnosi wartość: propozycje, wycena, pytanie o preferencje.</li><li>Po 4. kontakcie bez odpowiedzi — przenosimy do odłożonych i wracamy za miesiąc.</li></ul>`,
  } as T,

  nextBtn: { ru: 'Следующий шаг: Готовность заказа →', ua: 'Наступний крок: Готовність замовлення →', pl: 'Następny krok: Gotowość zamówienia →' } as T,
};
