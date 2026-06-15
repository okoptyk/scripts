// src/pages/kvalifikaciya/_i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

export const t = {
  headerTitle: { ru: 'Квалификация клиента', ua: 'Кваліфікація клієнта', pl: 'Kwalifikacja klienta' } as T,
  headerSub: { ru: 'Первый контакт — определяем потребность клиента и выбираем дальнейший сценарий работы', ua: 'Перший контакт — визначаємо потребу клієнта та обираємо подальший сценарій роботи', pl: 'Pierwszy kontakt — ustalamy potrzebę klienta i wybieramy dalszy scenariusz pracy' } as T,

  metaCkpLabel:    { ru: 'ЦКП', ua: 'ЦКП', pl: 'Cel etapu' } as T,
  metaCkp:         { ru: 'Потребность определена, сценарий выбран', ua: 'Потреба визначена, сценарій обрано', pl: 'Potrzeba ustalona, scenariusz wybrany' } as T,
  metaDeadlineLabel: { ru: 'Дедлайн', ua: 'Дедлайн', pl: 'Termin' } as T,
  metaDeadline:    { ru: '1 рабочий день', ua: '1 робочий день', pl: '1 dzień roboczy' } as T,
  metaResponsibleLabel: { ru: 'Ответственный', ua: 'Відповідальний', pl: 'Odpowiedzialny' } as T,
  metaResponsible: { ru: 'Продавец-консультант, Менеджер', ua: 'Продавець-консультант, Менеджер', pl: 'Doradca klienta, Menedżer' } as T,
  metaChannelsLabel: { ru: 'Каналы', ua: 'Канали', pl: 'Kanały' } as T,
  metaChannels:    { ru: 'Звонок · Мессенджер', ua: 'Дзвінок · Месенджер', pl: 'Telefon · Komunikator' } as T,

  tabMsg:   { ru: '💬 Мессенджер', ua: '💬 Месенджер', pl: '💬 Komunikator' } as T,
  tabPhone: { ru: '📞 Звонок', ua: '📞 Дзвінок', pl: '📞 Telefon' } as T,

  rules: {
    ru: `<strong>Главные правила онлайн-общения:</strong>
      <ul style="margin-top:8px;">
        <li><strong>Короткие сообщения:</strong> никаких «простыней» текста. Одно сообщение — одна мысль и один вопрос в конце.</li>
        <li><strong>Визуализация и ссылки:</strong> активно используйте ссылки на карту, онлайн-запись и фото/видео.</li>
        <li><strong>Скорость и вовлечение:</strong> чат легко закрыть и забыть, поэтому каждый ответ должен подталкивать к действию.</li>
      </ul>`,
    ua: `<strong>Головні правила онлайн-спілкування:</strong><ul style="margin-top:8px;"><li><strong>Короткі повідомлення:</strong> жодних «простирадл» тексту. Одне повідомлення — одна думка та одне запитання в кінці.</li><li><strong>Візуалізація та посилання:</strong> активно використовуйте посилання на карту, онлайн-запис і фото/відео.</li><li><strong>Швидкість та залучення:</strong> чат легко закрити й забути, тому кожна відповідь має спонукати до дії.</li></ul>`,
    pl: `<strong>Główne zasady komunikacji online:</strong><ul style="margin-top:8px;"><li><strong>Krótkie wiadomości:</strong> żadnych «ścian» tekstu. Jedna wiadomość — jedna myśl i jedno pytanie na końcu.</li><li><strong>Wizualizacja i linki:</strong> aktywnie korzystaj z linków do mapy, rejestracji online i zdjęć/wideo.</li><li><strong>Szybkość i zaangażowanie:</strong> czat łatwo zamknąć i zapomnieć, dlatego każda odpowiedź powinna zachęcać do działania.</li></ul>`,
  } as T,

  msgBody: {
    ru: `<div class="phase">
        <div class="phase-title">Этап 1 · Приветствие и перехват инициативы</div>
        <div class="phase-goal">Цель: показать, что на связи живой человек, и сразу задать вектор беседы.</div>
        <div class="phase-body">
          <div class="msg consultant">
            <div class="msg-label">Консультант</div>
            Добрый день! Меня зовут [Имя], я консультант оптики [Название]. С удовольствием помогу вам. Подскажите, вы хотите подобрать очки, контактные линзы или вас интересует проверка зрения у врача?
          </div>
        </div>
      </div>
      <div class="phase">
        <div class="phase-title">Этап 2 · Блок квалификации — пошаговый чат-диалог</div>
        <div class="phase-goal">Важно: не задавайте все вопросы одновременно. Двигайтесь пошагово.</div>
        <div class="phase-body">
          <div class="steps">
            <div class="step">
              <div class="step-header"><span class="step-num">1</span> Уточнение по рецепту</div>
              <div class="step-body">
                <div class="dialogue">
                  <div class="msg client"><div class="msg-label">Клиент</div>Хочу заказать очки у вас.</div>
                  <div class="msg consultant"><div class="msg-label">Консультант</div>Отличный выбор, с радостью помогу определиться с формой и линзами! Подскажите, пожалуйста, у вас уже есть готовый рецепт на руках, или нужно будет проверить зрение у нас в салоне?</div>
                </div>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">2</span> Определение формата визита</div>
              <div class="step-body">
                <div class="scenarios" style="gap:12px;">
                  <div class="scenario">
                    <div class="scenario-header"><span class="scenario-label">Рецепта нет</span></div>
                    <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Поняла вас. В таком случае перед подбором оправы лучше пройти диагностику у нашего врача-оптометриста. Это займёт около 20 минут, зато очки будут идеальными для глаз. Вы планируете приехать к нам в салон лично?</div></div>
                  </div>
                  <div class="scenario">
                    <div class="scenario-header"><span class="scenario-label">Рецепт есть</span></div>
                    <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Супер! Подскажите, рецепт свежий (до полугода) или выписывали давно? И планируете ли вы приехать в салон на примерку оправ, или хотите оформить заказ онлайн?</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="phase">
        <div class="phase-title">Этап 3 · Маршрутизация и закрытие на целевое действие</div>
        <div class="phase-goal">В онлайне «закрытие» должно сопровождаться кнопками, ссылками на онлайн-запись или конкретными тайм-слотами.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарий А</span>&nbsp; Рецепт есть + Личный визит → Бронь времени</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Прекрасно! Раз рецепт готов, мы ждём вас на примерку. У нас как раз обновился ассортимент оправ. Чтобы вам не пришлось ждать, я могу забронировать за вами личное время консультанта.<br>В какой салон вам удобнее подъехать: [Адрес 1] или [Адрес 2]? И какой день рассмотреть — будни или выходные?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарий Б</span>&nbsp; Рецепта нет + Личный визит → Запись к врачу</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Тогда давайте начнём с самого важного — точного рецепта. Наш врач принимает по предварительной записи, чтобы вам не пришлось сидеть в очереди.<br>Могу предложить вам ближайшие слоты на завтра: <strong>12:00</strong> или <strong>16:30</strong>. Какое время вам забронировать?<br><em class="note">(Или: «Вы можете выбрать удобное время сами по этой ссылке: [Ссылка на онлайн-запись]»)</em></div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарий В</span>&nbsp; Покупка товара онлайн → Дистанционный заказ</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Принято! Ехать в салон не обязательно, мы можем оформить всё онлайн и отправить курьером.<br>Пришлите, пожалуйста, фото вашего рецепта или напишите параметры ваших линз (диоптрии, радиус кривизны, бренд). Я прямо сейчас проверю их наличие на складе и рассчитаю стоимость ✨</div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="tip-block">
        <h4>🛠 Шаблоны на «сложные» моменты</h4>
        <ul>
          <li><strong>Клиент прислал фото старого/неразборчивого рецепта:</strong><br>«Вижу ваш рецепт, спасибо! Подскажите, а как давно вы его выписывали? Если прошло больше года, параметры могли немного измениться. Чтобы новые очки не вызывали усталость глаз, рекомендую обновить рецепт у нашего врача. Записать вас на диагностику перед подбором оправы?»</li>
          <li style="margin-top:10px;"><strong>Клиент уходит от ответа и спрашивает только цену:</strong><br>«Цена зависит от параметров ваших линз и выбранной оправы (у нас есть варианты от [Цена] до [Цена] злотых). Чтобы назвать вам точную сумму под ваш бюджет, подскажите: у вас есть рецепт или нужно будет проверить зрение?»</li>
        </ul>
      </div>`,
    ua: `<div class="phase">
        <div class="phase-title">Етап 1 · Привітання та перехоплення ініціативи</div>
        <div class="phase-goal">Мета: показати, що на зв'язку жива людина, і одразу задати вектор бесіди.</div>
        <div class="phase-body">
          <div class="msg consultant">
            <div class="msg-label">Консультант</div>
            Доброго дня! Мене звати [Ім'я], я консультант оптики [Назва]. З радістю допоможу вам. Підкажіть, ви хочете підібрати окуляри, контактні лінзи або вас цікавить перевірка зору у лікаря?
          </div>
        </div>
      </div>
      <div class="phase">
        <div class="phase-title">Етап 2 · Блок кваліфікації — покроковий чат-діалог</div>
        <div class="phase-goal">Важливо: не ставте всі питання одночасно. Рухайтеся покроково.</div>
        <div class="phase-body">
          <div class="steps">
            <div class="step">
              <div class="step-header"><span class="step-num">1</span> Уточнення щодо рецепту</div>
              <div class="step-body">
                <div class="dialogue">
                  <div class="msg client"><div class="msg-label">Клієнт</div>Хочу замовити у вас окуляри.</div>
                  <div class="msg consultant"><div class="msg-label">Консультант</div>Відмінний вибір, з радістю допоможу визначитися з формою та лінзами! Підкажіть, будь ласка, у вас вже є готовий рецепт на руках, чи потрібно буде перевірити зір у нас в салоні?</div>
                </div>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">2</span> Визначення формату візиту</div>
              <div class="step-body">
                <div class="scenarios" style="gap:12px;">
                  <div class="scenario">
                    <div class="scenario-header"><span class="scenario-label">Рецепту немає</span></div>
                    <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Зрозуміла вас. У такому разі перед підбором оправи краще пройти діагностику у нашого лікаря-оптометриста. Це займе близько 20 хвилин, зате окуляри будуть ідеальними для очей. Ви плануєте приїхати до нас в салон особисто?</div></div>
                  </div>
                  <div class="scenario">
                    <div class="scenario-header"><span class="scenario-label">Рецепт є</span></div>
                    <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Чудово! Підкажіть, рецепт свіжий (до пів року) чи виписаний давно? І чи плануєте ви приїхати в салон на примірку оправ, чи хочете оформити замовлення онлайн?</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="phase">
        <div class="phase-title">Етап 3 · Маршрутизація та закриття на цільову дію</div>
        <div class="phase-goal">В онлайні «закриття» має супроводжуватися кнопками, посиланнями на онлайн-запис або конкретними тайм-слотами.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарій А</span>&nbsp; Рецепт є + Особистий візит → Бронювання часу</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Прекрасно! Раз рецепт готовий, ми чекаємо вас на примірку. У нас якраз оновився асортимент оправ. Щоб вам не довелося чекати, я можу забронювати за вами особистий час консультанта.<br>До якого салону зручніше підʼїхати: [Адреса 1] чи [Адреса 2]? Який день розглянемо — будній чи вихідний?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарій Б</span>&nbsp; Рецепту немає + Особистий візит → Запис до лікаря</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Тоді починаємо з найважливішого — точного рецепту. Наш лікар приймає за попереднім записом, щоб вам не довелося сидіти в черзі.<br>Можу запропонувати найближчі слоти на завтра: <strong>12:00</strong> або <strong>16:30</strong>. Який час забронювати?<br><em class="note">(Або: «Ви можете вибрати зручний час за цим посиланням: [Посилання на онлайн-запис]»)</em></div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарій В</span>&nbsp; Покупка товару онлайн → Дистанційне замовлення</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Прийнято! Приїжджати в салон необов'язково, ми можемо оформити все онлайн і відправити кур'єром.<br>Пришліть, будь ласка, фото вашого рецепту або напишіть параметри лінз (діоптрії, радіус кривизни, бренд). Я зараз перевірю наявність та розрахую вартість ✨</div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="tip-block">
        <h4>🛠 Шаблони на «складні» моменти</h4>
        <ul>
          <li><strong>Клієнт надіслав фото старого/нерозбірливого рецепту:</strong><br>«Бачу ваш рецепт, дякую! Підкажіть, а як давно ви його виписували? Якщо минуло більше року, параметри могли змінитися. Щоб нові окуляри не викликали втому очей, рекомендую оновити рецепт у нашого лікаря. Записати вас на діагностику?»</li>
          <li style="margin-top:10px;"><strong>Клієнт уникає відповіді та питає лише ціну:</strong><br>«Ціна залежить від параметрів лінз та обраної оправи (є варіанти від [Ціна] до [Ціна] злотих). Щоб назвати вам точну суму, підкажіть: у вас є рецепт чи потрібно буде перевірити зір?»</li>
        </ul>
      </div>`,
    pl: `<div class="phase">
        <div class="phase-title">Etap 1 · Powitanie i przejęcie inicjatywy</div>
        <div class="phase-goal">Cel: pokazać, że po drugiej stronie jest żywa osoba, i od razu nadać kierunek rozmowie.</div>
        <div class="phase-body">
          <div class="msg consultant">
            <div class="msg-label">Konsultant</div>
            Dzień dobry! Mam na imię [Imię], jestem konsultantem salonu optycznego [Nazwa]. Z przyjemnością pomogę. Proszę powiedzieć, czy chcą Państwo dobrać okulary, soczewki kontaktowe, czy interesuje Państwa badanie wzroku?
          </div>
        </div>
      </div>
      <div class="phase">
        <div class="phase-title">Etap 2 · Blok kwalifikacyjny — krok po kroku</div>
        <div class="phase-goal">Ważne: nie zadawać wszystkich pytań naraz. Postępować krok po kroku.</div>
        <div class="phase-body">
          <div class="steps">
            <div class="step">
              <div class="step-header"><span class="step-num">1</span> Pytanie o receptę</div>
              <div class="step-body">
                <div class="dialogue">
                  <div class="msg client"><div class="msg-label">Klient</div>Chciałbym/Chciałabym zamówić u Państwa okulary.</div>
                  <div class="msg consultant"><div class="msg-label">Konsultant</div>Świetny wybór, chętnie pomogę dobrać oprawę i soczewki! Proszę powiedzieć, czy mają już Państwo gotową receptę, czy potrzebują Państwo badania wzroku w naszym salonie?</div>
                </div>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">2</span> Ustalenie formy wizyty</div>
              <div class="step-body">
                <div class="scenarios" style="gap:12px;">
                  <div class="scenario">
                    <div class="scenario-header"><span class="scenario-label">Brak recepty</span></div>
                    <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Rozumiem. W takim razie przed doborem opraw najlepiej przeprowadzić diagnostykę u naszego optometrysty. Zajmuje to ok. 20 minut, dzięki czemu okulary będą idealne dla Państwa oczu. Czy planują Państwo przyjechać do nas osobiście?</div></div>
                  </div>
                  <div class="scenario">
                    <div class="scenario-header"><span class="scenario-label">Recepta jest</span></div>
                    <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Świetnie! Czy recepta jest aktualna (do pół roku) czy wystawiona dawno? I czy planują Państwo przyjazd do salonu na przymiarki, czy woleliby Państwo zamówić online?</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="phase">
        <div class="phase-title">Etap 3 · Routing i zamknięcie na działanie</div>
        <div class="phase-goal">W online «zamknięcie» powinno towarzyszyć linkom do rejestracji lub konkretnym propozycjom terminów.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Scenariusz A</span>&nbsp; Recepta jest + Wizyta osobista → Rezerwacja</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Wspaniale! Skoro recepta jest gotowa, zapraszamy na przymiarki. Właśnie odświeżyliśmy asortyment opraw. Żeby nie musieli Państwo czekać, mogę zarezerwować czas konsultanta.<br>Do którego salonu wygodniej przyjechać: [Adres 1] czy [Adres 2]? Który dzień rozważamy — powszedni czy weekend?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Scenariusz B</span>&nbsp; Brak recepty + Wizyta osobista → Rejestracja do lekarza</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>W takim razie zacznijmy od dokładnej recepty. Nasz lekarz przyjmuje po wcześniejszej rezerwacji.<br>Mogę zaproponować najbliższe terminy na jutro: <strong>12:00</strong> lub <strong>16:30</strong>. Który termin zarezerwować?<br><em class="note">(Lub: «Mogą Państwo samodzielnie wybrać termin pod tym linkiem: [Link do rejestracji online]»)</em></div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Scenariusz C</span>&nbsp; Zakup online → Zamówienie zdalne</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Oczywiście! Przyjazd do salonu nie jest konieczny, możemy wszystko załatwić online i wysłać kurierem.<br>Proszę przesłać zdjęcie recepty lub podać parametry soczewek (dioptrie, promień krzywizny, marka). Sprawdzę teraz dostępność i obliczę koszt ✨</div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="tip-block">
        <h4>🛠 Szablony na «trudne» momenty</h4>
        <ul>
          <li><strong>Klient przesłał zdjęcie starej/nieczytelnej recepty:</strong><br>«Widzę Państwa receptę, dziękuję! Proszę powiedzieć, jak dawno była wystawiana? Jeśli minął ponad rok, parametry mogły się zmienić. Aby nowe okulary nie powodowały zmęczenia oczu, polecam odświeżyć receptę u naszego lekarza. Czy mogę umówić Państwa na diagnostykę?»</li>
          <li style="margin-top:10px;"><strong>Klient pyta tylko o cenę:</strong><br>«Cena zależy od parametrów soczewek i wybranej oprawy (mamy warianty od [Cena] do [Cena] zł). Żebym mogła podać dokładną kwotę, proszę powiedzieć: czy mają Państwo receptę, czy potrzebują Państwo badania wzroku?»</li>
        </ul>
      </div>`,
  } as T,

  // RU-only — phone tab has no UA/PL in the legacy source.
  phoneBody: `<div class="phase">
      <div class="phase-title">Этап 1 · Приветствие и перехват инициативы</div>
      <div class="phase-goal">Цель: представиться и сразу перевести звонок в формат диалога-опроса, чтобы клиент не просто спросил «Сколько стоит?» и положил трубку.</div>
      <div class="phase-body">
        <div class="dialogue">
          <div class="msg consultant">
            <div class="msg-label">Консультант</div>
            Добрый день! Салон оптики [Название], меня зовут [Имя]. Слушаю вас!
          </div>
          <div class="msg client">
            <div class="msg-label">Клиент</div>
            (Задаёт свой вопрос, например: Хочу очки заказать или Сколько стоит проверка зрения?)
          </div>
          <div class="msg consultant">
            <div class="msg-label">Консультант</div>
            Да, конечно, я с удовольствием всё расскажу и сориентирую вас по ценам. Чтобы я подобрала для вас самое выгодное предложение, разрешите задать буквально пару уточняющих вопросов?
          </div>
        </div>
      </div>
    </div>

    <div class="phase">
      <div class="phase-title">Этап 2 · Блок квалификации по телефону (5 вопросов)</div>
      <div class="phase-goal">Цель: быстро собрать информацию, ведя клиента по логической цепочке.</div>
      <div class="phase-body">
        <div class="steps">
          <div class="step">
            <div class="step-header"><span class="step-num">1</span> Причина обращения</div>
            <div class="step-body">
              <div class="msg consultant">
                <div class="msg-label">Консультант</div>
                Подскажите, вы планируете заказать новые очки (для чтения, компьютера, постоянного ношения) или вас интересуют контактные линзы?
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-header"><span class="step-num">2–3</span> Рецепт и диагностика</div>
            <div class="step-body">
              <div class="dialogue">
                <div class="msg consultant">
                  <div class="msg-label">Консультант</div>
                  Уточните, пожалуйста, у вас уже есть на руках готовый рецепт от врача или нам нужно будет проверить зрение и выписать рецепт на месте, прямо в салоне?
                </div>
                <div class="msg consultant" style="background:var(--lime-light);">
                  <div class="msg-label" style="color:var(--text-muted);">Если рецепт есть — уточняем дополнительно</div>
                  Подскажите, а как давно вы его выписывали? Если прошло больше полугода-года, доктора обычно рекомендуют обновить данные перед заказом новых линз.
                </div>
              </div>
            </div>
          </div>
          <div class="step">
            <div class="step-header"><span class="step-num">4–5</span> Личный визит</div>
            <div class="step-body">
              <div class="msg consultant">
                <div class="msg-label">Консультант</div>
                Вы планируете приехать к нам в салон лично, чтобы примерить оправы, или хотите оформить доставку готового товара (например, линз)?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="phase">
      <div class="phase-title">Этап 3 · Маршрутизация и закрытие на действие</div>
      <div class="phase-goal">После ответов клиента — не просто даём информацию, а закрываем звонок конкретным предложением.</div>
      <div class="phase-body">
        <div class="scenarios">

          <div class="scenario">
            <div class="scenario-header">
              <span class="scenario-label">Сценарий А</span>&nbsp; Рецепт есть + Личный визит → Запись на подбор оправы
            </div>
            <div class="scenario-body">
              <div class="msg consultant">
                <div class="msg-label">Консультант</div>
                Отлично! Раз действующий рецепт у вас на руках, мы сразу сможем перейти к выбору. У нас сейчас как раз [поступила новая коллекция оправ / действует акция на линзы для очков]. Чтобы вам не пришлось ждать и я могла уделить вам максимум времени, давайте забронируем за вами удобный час? Вам комфортнее подъехать в будни или в выходные?
              </div>
            </div>
          </div>

          <div class="scenario">
            <div class="scenario-header">
              <span class="scenario-label">Сценарий Б</span>&nbsp; Рецепта нет / Нужна диагностика + Личный визит → Запись к врачу
            </div>
            <div class="scenario-body">
              <div class="msg consultant">
                <div class="msg-label">Консультант</div>
                Я вас поняла. В таком случае мы начнём с полной диагностики зрения. Наш врач-оптометрист проверит глаза, проведёт тесты и выпишет точный рецепт прямо под ваши задачи. Подскажите, вам удобно было бы подъехать сегодня во второй половине дня или лучше записаться на завтра/выходные?<br>
                <em class="note">* Если диагностика бесплатна при покупке очков, обязательно добавляем: «При заказе очков диагностика у нас идёт в подарок».</em>
              </div>
            </div>
          </div>

          <div class="scenario">
            <div class="scenario-header">
              <span class="scenario-label">Сценарий В</span>&nbsp; Покупка готового товара / Дистанционный заказ
            </div>
            <div class="scenario-body">
              <div class="msg consultant">
                <div class="msg-label">Консультант</div>
                Хорошо, если вам нужны только контактные линзы/раствор и параметры вы помните, ехать к доктору не обязательно. Напомните, пожалуйста, какую марку вы носите и какие у вас диоптрии? Я сейчас прямо при вас проверю наличие на складе и мы решим: отложить их в салоне к вашему приезду или оформить доставку.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="tip-block">
      <h4>🛠 Лайфхаки для телефонных продаж в оптике</h4>
      <ul>
        <li><strong>Не называйте «голую» цену.</strong> Если клиент спрашивает «Сколько стоят линзы?», отвечать «От 3000 рублей» — это потеря клиента. Правильно: «Цены на линзы зависят от рецепта и защитных покрытий, есть варианты от... и до... Скажите, а какой у вас рецепт?» — и уходите на вопросы квалификации.</li>
        <li><strong>Продавайте визит, а не очки.</strong> По телефону невозможно примерить оправу. Цель звонка — сделать так, чтобы клиент ногами пришёл в салон или записался к врачу.</li>
        <li><strong>Альтернативные вопросы.</strong> Всегда завершайте предложение записи выбором без выбора: «Вам удобно в 14:00 или в 18:30?», «Будни или выходные?» — это подталкивает клиента к принятию решения.</li>
      </ul>
    </div>`,

  nextBtn: { ru: 'Следующий шаг: Запись на визит →', ua: 'Наступний крок: Запис на візит →', pl: 'Następny krok: Rejestracja na wizytę →' } as T,
};
