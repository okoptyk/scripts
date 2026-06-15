// src/pages/povtornye-prodazhi/_i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

export const t = {
  headerTitle: { ru: 'Повторные продажи', ua: 'Повторні продажі', pl: 'Sprzedaż ponowna' } as T,
  headerSub:   { ru: 'Реализуем потенциал повторной продажи: забота о клиенте после покупки', ua: 'Реалізуємо потенціал повторного продажу: турбота про клієнта після покупки', pl: 'Wykorzystujemy potencjał ponownej sprzedaży: troska o klienta po zakupie' } as T,

  metaCkpLabel:   { ru: 'ЦКП', ua: 'ЦКП', pl: 'Cel etapu' } as T,
  metaCkp:        { ru: 'Максимально реализован потенциал повторной продажи', ua: 'Максимально реалізовано потенціал повторного продажу', pl: 'Maksymalnie wykorzystany potencjał ponownej sprzedaży' } as T,
  metaStartLabel: { ru: 'Стартовая точка', ua: 'Початкова точка', pl: 'Punkt startowy' } as T,
  metaStart:      { ru: 'По клиенту завершена сделка; создана новая заявка в воронке повторной продажи', ua: 'По клієнту завершено угоду; створено нову заявку у воронці повторного продажу', pl: 'Transakcja z klientem zamknięta; utworzono nowe zgłoszenie w lejku ponownej sprzedaży' } as T,
  metaDeadlineLabel: { ru: 'Дедлайн', ua: 'Дедлайн', pl: 'Termin' } as T,
  metaDeadline:   { ru: '30 / 60 / 90 / 120 / 150 / 180 / 180+ дней после покупки', ua: '30 / 60 / 90 / 120 / 150 / 180 / 180+ днів після покупки', pl: '30 / 60 / 90 / 120 / 150 / 180 / 180+ dni po zakupie' } as T,
  metaRespLabel:  { ru: 'Ответственный', ua: 'Відповідальний', pl: 'Odpowiedzialny' } as T,
  metaResp:       { ru: 'Продавец-консультант, Менеджер', ua: 'Продавець-консультант, Менеджер', pl: 'Doradca klienta, Menedżer' } as T,

  intro: {
    ru: `Цель этапа — закрыть клиента в повторную продажу. Работаем в три касания по времени после покупки: сначала заботимся об адаптации, затем предлагаем вторую пару, и наконец приглашаем на плановый осмотр. Каждое касание — это польза для клиента, а не давление.`,
    ua: `Мета етапу — закрити клієнта на повторний продаж. Працюємо в три дотики за часом після покупки: спершу дбаємо про адаптацію, потім пропонуємо другу пару, і нарешті запрошуємо на плановий огляд. Кожен дотик — це користь для клієнта, а не тиск.`,
    pl: `Cel etapu — domknięcie ponownej sprzedaży. Działamy w trzech kontaktach rozłożonych w czasie po zakupie: najpierw dbamy o adaptację, następnie proponujemy drugą parę, a na koniec zapraszamy na badanie okresowe. Każdy kontakt to korzyść dla klienta, a nie presja.`,
  } as T,

  tabS1: { ru: '📅 30 дней · Сервис', ua: '📅 30 днів · Сервіс', pl: '📅 30 dni · Serwis' } as T,
  tabS2: { ru: '📅 3–6 мес · Вторая пара', ua: '📅 3–6 міс · Друга пара', pl: '📅 3–6 mies · Druga para' } as T,
  tabS3: { ru: '📅 1–1.5 года · Осмотр', ua: '📅 1–1.5 року · Огляд', pl: '📅 1–1.5 roku · Badanie' } as T,

  goalS1: {
    ru: `🎯 Цель: проверить адаптацию, проявить заботу и снять возможный негатив. На этом этапе мы закладываем фундамент для будущей продажи.`,
    ua: `🎯 Мета: перевірити адаптацію, проявити турботу та зняти можливий негатив. На цьому етапі ми закладаємо фундамент для майбутнього продажу.`,
    pl: `🎯 Cel: sprawdzenie adaptacji, okazanie troski i zneutralizowanie ewentualnych zastrzeżeń. Na tym etapie budujemy fundament pod przyszłą sprzedaż.`,
  } as T,
  goalS2: {
    ru: `🎯 Цель: предложить альтернативу или специализированное решение (очки для компьютера, солнцезащитные очки с диоптриями, водительские очки).`,
    ua: `🎯 Мета: запропонувати альтернативу або спеціалізоване рішення (окуляри для комп'ютера, сонцезахисні окуляри з діоптріями, окуляри для водіїв).`,
    pl: `🎯 Cel: zaproponowanie alternatywnego lub specjalistycznego rozwiązania (okulary do komputera, przeciwsłoneczne z korekcją, dla kierowców).`,
  } as T,
  goalS3: {
    ru: `🎯 Цель: закрыть на повторную покупку, так как зрение могло измениться, а линзы могли поцарапаться.`,
    ua: `🎯 Мета: закрити на повторну купівлю, оскільки зір міг змінитися, а лінзи могли подряпатися.`,
    pl: `🎯 Cel: domknięcie kolejnej sprzedaży z uwagi na możliwą zmianę wady wzroku lub zużycie (porysowanie) soczewek.`,
  } as T,

  s1Body: {
    ru: `<div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>[Имя клиента], добрый день! Это салон оптики [Название]. Вы у нас пару недель назад проверяли зрение и сделали очки. Звоню узнать, как проходит адаптация? Всё ли комфортно, не давит ли оправа, хорошо ли видите?</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Сценарий А</span> Всё отлично</div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>Супер, я очень рада! Напомню, что у нас действует бесплатный сервис: если нужно будет подтянуть винтики или выровнять посадку — всегда ждём вас. Носите с удовольствием!</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Сценарий Б</span> Есть дискомфорт</div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>Хорошо, что сказали! К новым линзам/оправе бывает нужна адаптация, но давайте мы подстрахуемся. Вам удобно будет заглянуть к нам завтра или в [день недели]? Наш мастер/оптометрист посмотрит и всё подправит, это бесплатно и займёт 5 минут.</div>
      </div>`,
    ua: `<div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>[Ім'я клієнта], доброго дня! Це салон оптики [Назва]. Ви у нас кілька тижнів тому перевіряли зір і замовляли окуляри. Телефоную дізнатися, як минає адаптація? Чи все комфортно, чи не тисне оправа, чи добре бачите?</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Сценарій А</span> Усе чудово</div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>Супер, я дуже рада! Нагадаю, що у нас діє безкоштовний сервіс: якщо потрібно буде підтягнути гвинтики або вирівняти посадку — завжди чекаємо на вас. Носіть із задоволенням!</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Сценарій Б</span> Є дискомфорт</div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>Добре, що сказали! До нових лінз/оправи іноді потрібна адаптація, але давайте ми підстрахуємося. Вам зручно буде завітати до нас завтра чи у [день тижня]? Наш майстер/оптометрист погляне і все підправить, це безкоштовно і займе 5 хвилин.</div>
      </div>`,
    pl: `<div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry, Panie [Imię] / Pani [Imię]! Z tej strony [Twoje imię] z salonu optycznego [Nazwa]. Około miesiąca temu badał(a) Pan/Pani u nas wzrok i zamawiał(a) okulary. Dzwonię, aby zapytać, jak przebiega adaptacja? Czy wszystko jest wygodnie, czy oprawa nigdzie nie uciska i czy dobrze Pan/Pani widzi?</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Scenariusz A</span> Wszystko jest super</div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Konsultant</div>Doskonale, bardzo się cieszę! Przypominam tylko, że oferujemy bezpłatny serwis: gdyby z czasem trzeba było dokręcić śrubki lub wyregulować zauszniki – zawsze zapraszamy. Życzę miłego użytkowania!</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Scenariusz B</span> Pojawił się dyskomfort</div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Konsultant</div>Dobrze, że Pan/Pani o tym mówi! Przyzwyczajenie się do nowych soczewek lub oprawy czasem wymaga czasu, ale dla pewności chętnie to sprawdzimy. Czy dogodnie byłoby Panu/Pani wpaść do nas jutro, czy może w [dzień tygodnia]? Nasz optyk/optometrysta rzuci okiem i wszystko skoryguje. To bezpłatne i zajmie tylko 5 minut.</div>
      </div>`,
  } as T,

  sttlLens: { ru: '👁 Для пользователей контактных линз', ua: '👁 Для користувачів контактних лінз', pl: '👁 Dla użytkowników soczewek kontaktowych' } as T,
  introLens: {
    ru: `За 10 дней до того, как у клиента должны закончиться линзы (например, если он брал упаковку на 1 или 3 месяца), пишем в мессенджер.`,
    ua: `За 10 днів до того, як у клієнта мають закінчитися лінзи (наприклад, якщо він брав упаковку на 1 або 3 місяці), пишемо в месенджер.`,
    pl: `Na 10 dni przed tym, jak klientowi powinny skończyć się soczewki (na przykład jeśli kupił opakowanie na 1 lub 3 miesiące), piszemy w komunikatorze.`,
  } as T,
  tmplLens: {
    ru: `[Имя], добрый день! У вас ориентировочно через неделю заканчивается запас линз. Заказать вам точно такие же, чтобы успели приехать вовремя? Можем оформить доставку.`,
    ua: `[Ім'я], доброго дня! У вас орієнтовно за тиждень закінчується запас лінз. Замовити вам точно такі самі, щоб встигли приїхати вчасно? Можемо оформити доставку.`,
    pl: `[Imię], dzień dobry! Orientacyjnie za tydzień skończy się Panu/Pani zapas soczewek. Czy zamówić dokładnie takie same, aby zdążyły dotrzeć na czas? Możemy zorganizować dostawę.`,
  } as T,
  copyLabel: { ru: 'Копировать', ua: 'Копіювати', pl: 'Kopiuj' } as T,

  s2Body: {
    ru: `<div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>[Имя клиента], здравствуйте! Это из оптики [Название]. Вы у нас заказывали очки. Помню, вы говорили, что много времени проводите [за рулём / за компьютером / на солнце].<br><br>У нас как раз сейчас [поступили новые линзы с защитой от синего света / началась акция на солнцезащитные оправы]. Хотела предложить вам сделать вторую пару, специализированную, чтобы глаза вообще не уставали. Тем более, у вас как у нашего постоянного клиента есть [скидка Х% / бонусные баллы]. Интересно было бы посмотреть варианты?</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Если «Да»</span></div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>Отлично! Тогда подберём удобное время для визита — посмотрим варианты вживую и подберём то, что подойдёт именно вам.</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Если «Пока не нужно»</span></div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>Поняла! Знайте, что мы сможем помочь с выбором новой оправы или записать вас на приём к офтальмологу, когда будет необходимость.</div>
      </div>`,
    ua: `<div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>[Ім'я клієнта], вітаю! Це з оптики [Назва]. Ви у нас замовляли окуляри. Пам'ятаю, ви казали, що багато часу проводите [за кермом / за комп'ютером / на сонці].<br><br>У нас якраз зараз [надійшли нові лінзи із захистом від синього світла / почалася акція на сонцезахисні оправи]. Хотіла запропонувати вам зробити другу пару, спеціалізовану, щоб очі взагалі не втомлювалися. Тим паче, у вас як у нашого постійного клієнта є [знижка Х% / бонусні бали]. Цікаво було б подивитися варіанти?</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Якщо «Так»</span></div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>Чудово! Тоді підберемо зручний час для візиту — подивимося варіанти наживо та підберемо те, що підійде саме вам.</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Якщо «Поки не потрібно»</span></div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>Зрозуміла! Знайте, що ми зможемо допомогти з вибором нової оправи або записати вас на прийом до офтальмолога, коли виникне потреба.</div>
      </div>`,
    pl: `<div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry, Panie [Imię] / Pani [Imię]! Z tej strony [Twoje imię] z optyka [Nazwa]. Zamawiał(a) Pan/Pani u nas okulary do codziennego chodzenia. Pamiętam, że wspominał(a) Pan/Pani, że spędza dużo czasu [za kierownicą / przed komputerem / na słońcu].<br><br>Właśnie otrzymaliśmy [nowe soczewki z ochroną przed światłem niebieskim / rozpoczęliśmy promocję na oprawy przeciwsłoneczne]. Chciałam zaproponować wykonanie drugiej, specjalistycznej pary, aby maksymalnie odciążyć wzrok. Dodatkowo, jako nasz stały klient, ma Pan/Pani u nas [rabat X% / punkty bonusowe]. Czy chciał(a)by Pan/Pani rzucić okiem na dostępne opcje?</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Jeśli «Tak»</span></div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Konsultant</div>Świetnie! W takim razie ustalimy dogodny termin wizyty — obejrzymy opcje na żywo i dobierzemy to, co będzie pasować właśnie Panu/Pani.</div>
      </div>
      <div class="scenario-header"><span class="scenario-label">Jeśli «Na razie nie potrzebuję»</span></div>
      <div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Konsultant</div>Rozumiem! W razie czego proszę pamiętać, że chętnie pomożemy w doborze nowej oprawy lub zapiszemy Pana/Panią na wizytę do okulisty/optometrysty, gdy tylko pojawi się taka potrzeba.</div>
      </div>`,
  } as T,

  s3Body: {
    ru: `<div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>[Имя клиента], добрый день! Это [Ваше имя], оптика [Название]. Проверила по нашей системе — вы проверяли зрение и обновляли очки ровно год назад.<br><br>По медицинским стандартам, проверку зрения нужно проходить раз в год, даже если кажется, что всё в порядке (глаза адаптируются и мы можем не замечать ухудшений). Плюс за год на линзах появляются микроцарапины.<br><br>Наш оптометрист [Имя врача] принимает на этой неделе. Записать вас на комфортное время, проверим, изменились ли показатели?</div>
      </div>`,
    ua: `<div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Менеджер</div>[Ім'я клієнта], доброго дня! Це [Ваше ім'я], оптика [Назва]. Перевірила за нашою системою — ви перевіряли зір та оновлювали окуляри рівно рік тому.<br><br>За медичними стандартами, перевірку зору потрібно проходити раз на рік, навіть якщо здається, що все гаразд (очі адаптуються і ми можемо не помічати погіршень). Плюс за рік на лінзах з'являються мікроподряпини.<br><br>Наш оптометрист [Ім'я лікаря] приймає цього тижня. Записати вас на зручний час, перевіримо, чи змінилися показники?</div>
      </div>`,
    pl: `<div class="dialogue">
        <div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry, Panie [Imię] / Pani [Imię]! Z tej strony [Twoje imię], salon optyczny [Nazwa]. Sprawdzałam w naszym systemie, że dokładnie rok temu badał(a) Pan/Pani u nas wzrok i wymieniał(a) okulary.<br><br>Zgodnie ze standardami medycznymi, profilaktyczne badanie wzroku warto wykonywać raz w roku – nawet jeśli wydaje się, że wszystko jest w porządku, ponieważ oczy adaptują się do zmian i możemy nie zauważyć pogorszenia widzenia. Ponadto po roku na soczewkach często pojawiają się już mikrozarysowania.<br><br>Nasz optometrysta [Imię lekarza/specjalisty] przyjmuje w tym tygodniu. Czy zapisać Pana/Panią na dogodną godzinę, abyśmy sprawdzili, czy parametry wzroku się nie zmieniły?</div>
      </div>`,
  } as T,

  tip: {
    ru: `<h4>💡 Лайфхаки для менеджера (как повысить конверсию)</h4>
      <ul>
        <li><strong>Ведите CRM.</strong> Если клиент при первой покупке обмолвился, что любит рыбалку, работает в ИТ или часто ездит ночью — запишите это. Скрипт «Вы говорили, что часто за рулём ночью, у нас вышли классные антибликовые линзы…» работает в 3 раза лучше общего шаблона.</li>
        <li style="margin-top:10px;"><strong>Дарите пользу, а не продавайте.</strong> Клиент не хочет покупать новые очки просто так. Но он хочет «снять усталость с глаз», «безопасно водить в тумане» или «выглядеть стильно на летних фото».</li>
      </ul>`,
    ua: `<h4>💡 Лайфхаки для менеджера (як підвищити конверсію)</h4><ul><li><strong>Ведіть CRM.</strong> Якщо клієнт під час першої покупки обмовився, що любить рибалку, працює в ІТ або часто їздить уночі — запишіть це. Скрипт «Ви казали, що часто за кермом уночі, у нас вийшли класні антиблікові лінзи…» працює в 3 рази краще за загальний шаблон.</li><li style="margin-top:10px;"><strong>Даруйте користь, а не продавайте.</strong> Клієнт не хоче купувати нові окуляри просто так. Але він хоче «зняти втому з очей», «безпечно кермувати в тумані» або «виглядати стильно на літніх фото».</li></ul>`,
    pl: `<h4>💡 Wskazówki dla menedżera (jak zwiększyć konwersję)</h4><ul><li><strong>Prowadź CRM.</strong> Jeśli klient przy pierwszym zakupie wspomniał, że lubi wędkarstwo, pracuje w IT lub często jeździ nocą — zapisz to. Skrypt «Wspominał Pan, że często jeździ nocą, mamy świetne soczewki antyrefleksyjne…» działa 3 razy lepiej niż ogólny szablon.</li><li style="margin-top:10px;"><strong>Dawaj wartość, nie sprzedawaj.</strong> Klient nie chce kupować nowych okularów ot tak. Ale chce «zdjąć zmęczenie z oczu», «bezpiecznie prowadzić we mgle» lub «wyglądać stylowo na letnich zdjęciach».</li></ul>`,
  } as T,

  nextBtn: { ru: '← Вернуться на главную', ua: '← Повернутися на головну', pl: '← Powrót na stronę główną' } as T,
};
