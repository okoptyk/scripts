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

  tabPhone: { ru: '📞 Звонок', ua: '📞 Дзвінок', pl: '📞 Telefon' } as T,
  tabStart: { ru: '🧭 С чего начать', ua: '🧭 З чого почати', pl: '🧭 Od czego zacząć' } as T,
  tabOpto:  { ru: '👓 Оптометрист', ua: '👓 Оптометрист', pl: '👓 Optometrysta' } as T,
  tabOftal: { ru: '🩺 Офтальмолог', ua: '🩺 Офтальмолог', pl: '🩺 Okulista' } as T,

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

  // Вкладка «Звонок» — телефонная квалификация. Основной маршрут — оптометрист.
  phoneBody: {
    ru: `<div class="phase">
        <div class="phase-title">Этап 1 · Приветствие и перехват инициативы</div>
        <div class="phase-goal">Цель: представиться и перевести звонок в диалог, чтобы клиент не спросил «Сколько стоит?» и не положил трубку.</div>
        <div class="phase-body">
          <div class="dialogue">
            <div class="msg consultant"><div class="msg-label">Консультант</div>Добрый день! Оптика Ok.Optyk, меня зовут [Имя]. Слушаю вас!</div>
            <div class="msg client"><div class="msg-label">Клиент</div>(Задаёт вопрос, например: «Хочу заказать очки» или «Сколько стоит проверка зрения?»)</div>
            <div class="msg consultant"><div class="msg-label">Консультант</div>Да, конечно, я всё расскажу и сориентирую вас по ценам. Чтобы предложить самый выгодный вариант, позвольте задать пару коротких вопросов?</div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Этап 2 · Квалификация по телефону (4 вопроса)</div>
        <div class="phase-goal">Цель: понять, к кому записывать — к оптометристу (основной вариант) или к офтальмологу.</div>
        <div class="phase-body">
          <div class="steps">
            <div class="step">
              <div class="step-header"><span class="step-num">1</span> Для кого запись</div>
              <div class="step-body">
                <div class="msg consultant"><div class="msg-label">Консультант</div>Подскажите, запись нужна для вас или для ребёнка?</div>
                <em class="note">Ребёнок до 7 лет и у нас впервые → Сценарий Г (офтальмолог).</em>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">2</span> Причина обращения</div>
              <div class="step-body">
                <div class="msg consultant"><div class="msg-label">Консультант</div>Вы хотите подобрать новые очки или вас что-то беспокоит — дискомфорт, боль, покраснение, резкое ухудшение зрения?</div>
                <em class="note">Есть жалобы или заболевание глаз → Сценарий Г (офтальмолог). Жалоб нет → идём дальше.</em>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">3</span> Рецепт</div>
              <div class="step-body">
                <div class="dialogue">
                  <div class="msg consultant"><div class="msg-label">Консультант</div>У вас уже есть действующий рецепт на очки или нужно проверить зрение у нас в салоне?</div>
                  <div class="msg consultant" style="background:var(--lime-light);"><div class="msg-label" style="color:var(--text-muted);">Если рецепт есть — уточняем</div>Подскажите, как давно его выписывали? Если прошло больше года, зрение могло измениться — перед заказом новых очков рецепт лучше обновить.</div>
                </div>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">4</span> Формат визита</div>
              <div class="step-body">
                <div class="msg consultant"><div class="msg-label">Консультант</div>Вы планируете приехать к нам в салон, чтобы примерить оправы, или вам нужна только доставка контактных линз?</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Этап 3 · Маршрутизация и закрытие на запись</div>
        <div class="phase-goal">После ответов клиента не просто даём информацию, а закрываем звонок конкретным временем.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарий А</span>&nbsp; Рецепт свежий + визит → Подбор оправы</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Отлично! Раз рецепт свежий, сразу перейдём к выбору оправ. Давайте я забронирую за вами время, чтобы консультант занимался только вами. Вам удобнее в будни или в выходные?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарий Б ⭐</span>&nbsp; Рецепта нет / старый, жалоб нет → Оптометрист</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Тогда начнём с проверки зрения у оптометриста. Это специалист по проверке зрения и подбору очков: он точно измерит зрение и выпишет актуальный рецепт под ваши задачи — работа за компьютером, вождение, чтение.<br><br>Стоимость — 99 zł, а при заказе очков у нас проверка бесплатная. Вам удобнее [день, время] или [день, время]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарий В</span>&nbsp; Только контактные линзы → Дистанционный заказ</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Если нужны только контактные линзы и параметры у вас свежие, приезжать не обязательно. Подскажите, какую марку вы носите и какие у вас параметры? Я проверю наличие, и мы решим: отложить линзы в салоне или оформить доставку.</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарий Г</span>&nbsp; Жалобы / заболевание глаз / ребёнок до 7 лет впервые → Офтальмолог</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>В вашей ситуации рекомендую консультацию офтальмолога. Он проведёт комплексную проверку зрения, осмотрит глазное дно, оценит состояние глаз и при необходимости составит план лечения и выпишет рецепт на очки.<br><br>Стоимость — 219 zł. Ближайшие свободные термины: [день, время] или [день, время]. Какой вам удобнее?</div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-block">
        <h4>🛠 Лайфхаки для телефонных продаж в оптике</h4>
        <ul>
          <li><strong>Оптометрист — основной маршрут.</strong> Если жалоб нет и клиенту нужны очки — записываем к оптометристу. К офтальмологу — дети до 7 лет впервые, заболевания глаз и любые жалобы.</li>
          <li style="margin-top:10px;"><strong>Не называйте «голую» цену.</strong> Вместо «Очки от 300 zł» скажите: «Цена зависит от рецепта и покрытий линз, есть варианты от [Цена] до [Цена] zł. Скажите, а у вас есть рецепт?» — и возвращайтесь к вопросам.</li>
          <li style="margin-top:10px;"><strong>Продавайте визит, а не очки.</strong> По телефону оправу не примерить. Цель звонка — запись в салон.</li>
          <li style="margin-top:10px;"><strong>Выбор без выбора.</strong> «Вам удобно в 14:00 или в 18:30?», «Будни или выходные?» — так клиенту легче принять решение.</li>
        </ul>
      </div>`,
    ua: `<div class="phase">
        <div class="phase-title">Етап 1 · Привітання та перехоплення ініціативи</div>
        <div class="phase-goal">Мета: представитися і перевести дзвінок у діалог, щоб клієнт не запитав «Скільки коштує?» і не поклав слухавку.</div>
        <div class="phase-body">
          <div class="dialogue">
            <div class="msg consultant"><div class="msg-label">Консультант</div>Доброго дня! Оптика Ok.Optyk, мене звати [Ім’я]. Слухаю вас!</div>
            <div class="msg client"><div class="msg-label">Клієнт</div>(Ставить запитання, наприклад: «Хочу замовити окуляри» або «Скільки коштує перевірка зору?»)</div>
            <div class="msg consultant"><div class="msg-label">Консультант</div>Так, звісно, я все розповім і зорієнтую вас щодо цін. Щоб запропонувати найвигідніший варіант, дозвольте поставити кілька коротких запитань?</div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Етап 2 · Кваліфікація телефоном (4 запитання)</div>
        <div class="phase-goal">Мета: зрозуміти, до кого записувати — до оптометриста (основний варіант) чи до офтальмолога.</div>
        <div class="phase-body">
          <div class="steps">
            <div class="step">
              <div class="step-header"><span class="step-num">1</span> Для кого запис</div>
              <div class="step-body">
                <div class="msg consultant"><div class="msg-label">Консультант</div>Підкажіть, запис потрібен для вас чи для дитини?</div>
                <em class="note">Дитина до 7 років і в нас уперше → Сценарій Г (офтальмолог).</em>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">2</span> Причина звернення</div>
              <div class="step-body">
                <div class="msg consultant"><div class="msg-label">Консультант</div>Ви хочете підібрати нові окуляри чи вас щось турбує — дискомфорт, біль, почервоніння, різке погіршення зору?</div>
                <em class="note">Є скарги або захворювання очей → Сценарій Г (офтальмолог). Скарг немає → рухаємося далі.</em>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">3</span> Рецепт</div>
              <div class="step-body">
                <div class="dialogue">
                  <div class="msg consultant"><div class="msg-label">Консультант</div>У вас уже є чинний рецепт на окуляри чи потрібно перевірити зір у нас у салоні?</div>
                  <div class="msg consultant" style="background:var(--lime-light);"><div class="msg-label" style="color:var(--text-muted);">Якщо рецепт є — уточнюємо</div>Підкажіть, як давно його виписували? Якщо минуло більше року, зір міг змінитися — перед замовленням нових окулярів рецепт краще оновити.</div>
                </div>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">4</span> Формат візиту</div>
              <div class="step-body">
                <div class="msg consultant"><div class="msg-label">Консультант</div>Ви плануєте приїхати до нас у салон, щоб приміряти оправи, чи вам потрібна лише доставка контактних лінз?</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Етап 3 · Маршрутизація та закриття на запис</div>
        <div class="phase-goal">Після відповідей клієнта не просто даємо інформацію, а закриваємо дзвінок конкретним часом.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарій А</span>&nbsp; Рецепт свіжий + візит → Підбір оправи</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Чудово! Раз рецепт свіжий, одразу перейдемо до вибору оправ. Давайте я забронюю за вами час, щоб консультант займався тільки вами. Вам зручніше в будні чи у вихідні?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарій Б ⭐</span>&nbsp; Рецепту немає / старий, скарг немає → Оптометрист</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Тоді почнемо з перевірки зору в оптометриста. Це спеціаліст із перевірки зору та підбору окулярів: він точно виміряє зір і випише актуальний рецепт під ваші завдання — робота за комп’ютером, водіння, читання.<br><br>Вартість — 99 zł, а при замовленні окулярів у нас перевірка безкоштовна. Вам зручніше [день, час] чи [день, час]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарій В</span>&nbsp; Лише контактні лінзи → Дистанційне замовлення</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Якщо потрібні лише контактні лінзи і параметри у вас свіжі, приїжджати не обов’язково. Підкажіть, яку марку ви носите і які у вас параметри? Я перевірю наявність, і ми вирішимо: відкласти лінзи в салоні чи оформити доставку.</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Сценарій Г</span>&nbsp; Скарги / захворювання очей / дитина до 7 років уперше → Офтальмолог</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>У вашій ситуації рекомендую консультацію офтальмолога. Він проведе комплексну перевірку зору, огляне очне дно, оцінить стан очей і за потреби складе план лікування та випише рецепт на окуляри.<br><br>Вартість — 219 zł. Найближчі вільні терміни: [день, час] або [день, час]. Який вам зручніший?</div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-block">
        <h4>🛠 Лайфхаки для телефонних продажів в оптиці</h4>
        <ul>
          <li><strong>Оптометрист — основний маршрут.</strong> Якщо скарг немає і клієнту потрібні окуляри — записуємо до оптометриста. До офтальмолога — діти до 7 років уперше, захворювання очей і будь-які скарги.</li>
          <li style="margin-top:10px;"><strong>Не називайте «голу» ціну.</strong> Замість «Окуляри від 300 zł» скажіть: «Ціна залежить від рецепта та покриттів лінз, є варіанти від [Ціна] до [Ціна] zł. Скажіть, а у вас є рецепт?» — і повертайтеся до запитань.</li>
          <li style="margin-top:10px;"><strong>Продавайте візит, а не окуляри.</strong> Телефоном оправу не приміряти. Мета дзвінка — запис у салон.</li>
          <li style="margin-top:10px;"><strong>Вибір без вибору.</strong> «Вам зручно о 14:00 чи о 18:30?», «Будні чи вихідні?» — так клієнту легше ухвалити рішення.</li>
        </ul>
      </div>`,
    pl: `<div class="phase">
        <div class="phase-title">Etap 1 · Powitanie i przejęcie inicjatywy</div>
        <div class="phase-goal">Cel: przedstawić się i zamienić rozmowę w dialog, aby klient nie zapytał tylko «Ile kosztuje?» i nie odłożył słuchawki.</div>
        <div class="phase-body">
          <div class="dialogue">
            <div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry! Salon optyczny Ok.Optyk, mam na imię [Imię]. Słucham Państwa!</div>
            <div class="msg client"><div class="msg-label">Klient</div>(Zadaje pytanie, np.: «Chcę zamówić okulary» albo «Ile kosztuje badanie wzroku?»)</div>
            <div class="msg consultant"><div class="msg-label">Konsultant</div>Oczywiście, wszystko opowiem i przedstawię ceny. Żeby zaproponować najkorzystniejszy wariant, czy mogę zadać kilka krótkich pytań?</div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Etap 2 · Kwalifikacja przez telefon (4 pytania)</div>
        <div class="phase-goal">Cel: ustalić, do kogo zapisać — do optometrysty (wariant główny) czy do okulisty.</div>
        <div class="phase-body">
          <div class="steps">
            <div class="step">
              <div class="step-header"><span class="step-num">1</span> Dla kogo wizyta</div>
              <div class="step-body">
                <div class="msg consultant"><div class="msg-label">Konsultant</div>Proszę powiedzieć, czy wizyta jest dla Państwa, czy dla dziecka?</div>
                <em class="note">Dziecko poniżej 7 lat, pierwszy raz u nas → Scenariusz D (okulista).</em>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">2</span> Powód kontaktu</div>
              <div class="step-body">
                <div class="msg consultant"><div class="msg-label">Konsultant</div>Chcą Państwo dobrać nowe okulary, czy coś Państwa niepokoi — dyskomfort, ból, zaczerwienienie, nagłe pogorszenie wzroku?</div>
                <em class="note">Są dolegliwości lub choroba oczu → Scenariusz D (okulista). Brak dolegliwości → idziemy dalej.</em>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">3</span> Recepta</div>
              <div class="step-body">
                <div class="dialogue">
                  <div class="msg consultant"><div class="msg-label">Konsultant</div>Czy mają Państwo aktualną receptę na okulary, czy trzeba sprawdzić wzrok u nas w salonie?</div>
                  <div class="msg consultant" style="background:var(--lime-light);"><div class="msg-label" style="color:var(--text-muted);">Jeśli recepta jest — dopytujemy</div>Kiedy była wystawiona? Jeśli minęło ponad rok, wzrok mógł się zmienić — przed zamówieniem nowych okularów warto receptę odświeżyć.</div>
                </div>
              </div>
            </div>
            <div class="step">
              <div class="step-header"><span class="step-num">4</span> Forma wizyty</div>
              <div class="step-body">
                <div class="msg consultant"><div class="msg-label">Konsultant</div>Planują Państwo przyjechać do salonu, aby przymierzyć oprawy, czy potrzebna jest tylko dostawa soczewek kontaktowych?</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Etap 3 · Routing i zamknięcie na rejestrację</div>
        <div class="phase-goal">Po odpowiedziach klienta nie tylko podajemy informacje, ale kończymy rozmowę konkretnym terminem.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Scenariusz A</span>&nbsp; Aktualna recepta + wizyta → Dobór oprawy</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Świetnie! Skoro recepta jest aktualna, od razu przejdziemy do wyboru opraw. Zarezerwuję dla Państwa termin, aby konsultant zajmował się tylko Państwem. Wygodniej w dzień powszedni czy w weekend?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Scenariusz B ⭐</span>&nbsp; Brak recepty / stara, brak dolegliwości → Optometrysta</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>W takim razie zacznijmy od badania wzroku u optometrysty. To specjalista od badania wzroku i doboru okularów: dokładnie zmierzy wzrok i wystawi aktualną receptę dopasowaną do Państwa potrzeb — praca przy komputerze, prowadzenie auta, czytanie.<br><br>Koszt — 99 zł, a przy zamówieniu okularów u nas badanie jest bezpłatne. Pasuje Państwu [dzień, godzina] czy [dzień, godzina]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Scenariusz C</span>&nbsp; Tylko soczewki kontaktowe → Zamówienie zdalne</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Jeśli potrzebne są tylko soczewki kontaktowe, a parametry są aktualne, nie trzeba przyjeżdżać. Jaką markę Państwo noszą i jakie są parametry? Sprawdzę dostępność i ustalimy: odłożyć soczewki w salonie czy wysłać je kurierem.</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Scenariusz D</span>&nbsp; Dolegliwości / choroba oczu / dziecko poniżej 7 lat pierwszy raz → Okulista</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>W Państwa sytuacji polecam konsultację u okulisty. Przeprowadzi kompleksowe badanie wzroku, zbada dno oka, oceni stan oczu i w razie potrzeby zaplanuje leczenie oraz wystawi receptę na okulary.<br><br>Koszt — 219 zł. Najbliższe wolne terminy: [dzień, godzina] lub [dzień, godzina]. Który będzie wygodniejszy?</div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-block">
        <h4>🛠 Wskazówki do sprzedaży telefonicznej w salonie optycznym</h4>
        <ul>
          <li><strong>Optometrysta — trasa główna.</strong> Jeśli nie ma dolegliwości, a klient potrzebuje okularów — zapisujemy do optometrysty. Do okulisty — dzieci poniżej 7 lat po raz pierwszy, choroby oczu i wszelkie dolegliwości.</li>
          <li style="margin-top:10px;"><strong>Nie podawaj «gołej» ceny.</strong> Zamiast «Okulary od 300 zł» powiedz: «Cena zależy od recepty i powłok soczewek, mamy warianty od [Cena] do [Cena] zł. A czy mają Państwo receptę?» — i wróć do pytań.</li>
          <li style="margin-top:10px;"><strong>Sprzedawaj wizytę, nie okulary.</strong> Przez telefon nie da się przymierzyć oprawy. Celem rozmowy jest rejestracja do salonu.</li>
          <li style="margin-top:10px;"><strong>Wybór bez wyboru.</strong> «Pasuje 14:00 czy 18:30?», «Dzień powszedni czy weekend?» — tak klientowi łatwiej podjąć decyzję.</li>
        </ul>
      </div>`,
  } as T,

  // Вкладка «С чего начать» — первый ответ в мессенджере и маршрутизация (бывшие «Мессенджер» + «Проверка»).
  startBody: {
    ru: `<div class="info-box">
        <strong>Кого куда записываем:</strong>
        <ul style="margin-top:8px;">
          <li><strong>👓 Оптометрист — 99 zł, при заказе очков бесплатно.</strong> Основной маршрут: взрослые и дети от 7 лет без жалоб, которым нужны новые очки, обновить рецепт или стали хуже видеть.</li>
          <li><strong>🩺 Офтальмолог — 219 zł.</strong> Дети до 7 лет, которые у нас впервые; клиенты с заболеваниями глаз; любые жалобы — боль, покраснение, воспаление, резкое ухудшение зрения.</li>
        </ul>
      </div>

      <div class="phase">
        <div class="phase-title">Шаг 1 · Первый ответ</div>
        <div class="phase-goal">Цель: показать, что на связи живой человек, и сразу узнать, с чем пришёл клиент.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Добрый день! Спасибо, что написали в Ok.Optyk 😊<br><br>Подскажите, вы хотите подобрать очки, контактные линзы или вас интересует проверка зрения?</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Шаг 2 · Уточняем по ответу клиента</div>
        <div class="phase-goal">Не задавайте все вопросы сразу. Одно сообщение — один вопрос.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Проверка зрения</span>&nbsp; или очки без рецепта</div>
              <div class="scenario-body">
                <div class="msg consultant"><div class="msg-label">Консультант</div>Подскажите, пожалуйста, проверка зрения нужна для подбора очков или вас что-то беспокоит?</div>
                <em class="note">Если непонятно, для кого запись, — уточните: «Запись нужна для вас или для ребёнка?»</em>
              </div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Очки</span>&nbsp; Клиент хочет заказать очки</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>С радостью помогу подобрать оправу и линзы! Подскажите, у вас уже есть рецепт или нужно проверить зрение у нас в салоне?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Рецепт есть</span>&nbsp; Уточняем свежесть</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Отлично! Подскажите, когда выписывали рецепт? И планируете приехать в салон на примерку оправ или хотите оформить заказ онлайн?</div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Шаг 3 · Маршрутизация</div>
        <div class="phase-goal">По ответу клиента переходим на нужную вкладку или закрываем на действие прямо здесь.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">→ 👓 Оптометрист</span>&nbsp; Рецепта нет / старше года, жалоб нет</div>
              <div class="scenario-body"><div class="msg client"><div class="msg-label">Клиент</div>«Мне нужны очки» · «Хочу проверить зрение и подобрать очки» · «Стал хуже видеть» · «Рецепт старый»</div><em class="note">→ Продолжайте по вкладке «👓 Оптометрист».</em></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">→ 🩺 Офтальмолог</span>&nbsp; Жалобы / здоровье глаз / ребёнок до 7 лет</div>
              <div class="scenario-body"><div class="msg client"><div class="msg-label">Клиент</div>«У меня болят глаза» · «Есть воспаление» · «У меня глаукома / катаракта / диабет» · «Ребёнку 5 лет, ещё не проверяли»</div><em class="note">→ Продолжайте по вкладке «🩺 Офтальмолог».</em></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Рецепт свежий</span>&nbsp; Меньше года + визит → Подбор оправы</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Прекрасно! Раз рецепт свежий, ждём вас на примерку — у нас как раз обновился ассортимент оправ. Чтобы вам не пришлось ждать, я забронирую за вами время консультанта.<br><br>📍 Jeleniogórska 1/3 (напротив Aldi)<br><br>Вам удобнее в будни или в выходные?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Контактные линзы</span>&nbsp; Онлайн-заказ</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Принято! Ехать в салон не обязательно, мы можем оформить всё онлайн и отправить курьером.<br><br>Пришлите, пожалуйста, фото рецепта или напишите параметры ваших линз (диоптрии, радиус кривизны, бренд). Я проверю наличие и рассчитаю стоимость ✨</div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Если клиент не понимает разницу</div>
        <div class="phase-goal">Спокойно объясняем, в чём отличие приёмов, и снова даём выбор.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Объясняю 😊<br><br>Оптометрист — специалист по проверке зрения и подбору очков. Он точно измерит зрение и выпишет актуальный рецепт. Подходит, если вы хотите новые очки и ничего не беспокоит. Стоимость 99 zł, а при заказе очков — бесплатно.<br><br>Офтальмолог оценивает здоровье глаз: осматривает глазное дно и при необходимости назначает лечение. Подходит, если есть жалобы или заболевания глаз. Стоимость 219 zł.<br><br>Какой вариант вам подойдёт?</div>
        </div>
      </div>

      <div class="tip-block">
        <h4>🛠 Шаблоны на «сложные» моменты</h4>
        <ul>
          <li><strong>Клиент прислал фото старого/неразборчивого рецепта:</strong><br>«Вижу ваш рецепт, спасибо! Подскажите, как давно его выписывали? Если прошло больше года, параметры могли измениться. Чтобы новые очки не утомляли глаза, рекомендую обновить рецепт у нашего оптометриста — при заказе очков проверка бесплатная. Записать вас перед подбором оправы?»</li>
          <li style="margin-top:10px;"><strong>Клиент спрашивает только цену:</strong><br>«Цена зависит от параметров линз и выбранной оправы — есть варианты от [Цена] до [Цена] zł. Чтобы назвать точную сумму под ваш бюджет, подскажите: у вас есть рецепт или нужно проверить зрение?»</li>
        </ul>
      </div>`,
    ua: `<div class="info-box">
        <strong>Кого куди записуємо:</strong>
        <ul style="margin-top:8px;">
          <li><strong>👓 Оптометрист — 99 zł, при замовленні окулярів безкоштовно.</strong> Основний маршрут: дорослі та діти від 7 років без скарг, яким потрібні нові окуляри, оновити рецепт або які стали гірше бачити.</li>
          <li><strong>🩺 Офтальмолог — 219 zł.</strong> Діти до 7 років, які в нас уперше; клієнти із захворюваннями очей; будь-які скарги — біль, почервоніння, запалення, різке погіршення зору.</li>
        </ul>
      </div>

      <div class="phase">
        <div class="phase-title">Крок 1 · Перша відповідь</div>
        <div class="phase-goal">Мета: показати, що на зв’язку жива людина, і одразу дізнатися, з чим прийшов клієнт.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Доброго дня! Дякуємо, що написали в Ok.Optyk 😊<br><br>Підкажіть, ви хочете підібрати окуляри, контактні лінзи чи вас цікавить перевірка зору?</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Крок 2 · Уточнюємо за відповіддю клієнта</div>
        <div class="phase-goal">Не ставте всі запитання одразу. Одне повідомлення — одне запитання.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Перевірка зору</span>&nbsp; або окуляри без рецепта</div>
              <div class="scenario-body">
                <div class="msg consultant"><div class="msg-label">Консультант</div>Підкажіть, будь ласка, перевірка зору потрібна для підбору окулярів чи вас щось турбує?</div>
                <em class="note">Якщо незрозуміло, для кого запис, — уточніть: «Запис потрібен для вас чи для дитини?»</em>
              </div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Окуляри</span>&nbsp; Клієнт хоче замовити окуляри</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>З радістю допоможу підібрати оправу та лінзи! Підкажіть, у вас уже є рецепт чи потрібно перевірити зір у нас у салоні?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Рецепт є</span>&nbsp; Уточнюємо свіжість</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Чудово! Підкажіть, коли виписували рецепт? І чи плануєте приїхати в салон на примірку оправ, чи хочете оформити замовлення онлайн?</div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Крок 3 · Маршрутизація</div>
        <div class="phase-goal">За відповіддю клієнта переходимо на потрібну вкладку або закриваємо на дію просто тут.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">→ 👓 Оптометрист</span>&nbsp; Рецепта немає / старший за рік, скарг немає</div>
              <div class="scenario-body"><div class="msg client"><div class="msg-label">Клієнт</div>«Мені потрібні окуляри» · «Хочу перевірити зір і підібрати окуляри» · «Став гірше бачити» · «Рецепт старий»</div><em class="note">→ Продовжуйте за вкладкою «👓 Оптометрист».</em></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">→ 🩺 Офтальмолог</span>&nbsp; Скарги / здоров’я очей / дитина до 7 років</div>
              <div class="scenario-body"><div class="msg client"><div class="msg-label">Клієнт</div>«У мене болять очі» · «Є запалення» · «У мене глаукома / катаракта / діабет» · «Дитині 5 років, ще не перевіряли»</div><em class="note">→ Продовжуйте за вкладкою «🩺 Офтальмолог».</em></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Рецепт свіжий</span>&nbsp; Менше року + візит → Підбір оправи</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Чудово! Раз рецепт свіжий, чекаємо на вас на примірку — у нас якраз оновився асортимент оправ. Щоб вам не довелося чекати, я забронюю за вами час консультанта.<br><br>📍 Jeleniogórska 1/3 (навпроти Aldi)<br><br>Вам зручніше в будні чи у вихідні?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Контактні лінзи</span>&nbsp; Онлайн-замовлення</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Прийнято! Їхати в салон не обов’язково, ми можемо оформити все онлайн і надіслати кур’єром.<br><br>Надішліть, будь ласка, фото рецепта або напишіть параметри ваших лінз (діоптрії, радіус кривизни, бренд). Я перевірю наявність і розрахую вартість ✨</div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Якщо клієнт не розуміє різницю</div>
        <div class="phase-goal">Спокійно пояснюємо відмінність прийомів і знову даємо вибір.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Пояснюю 😊<br><br>Оптометрист — спеціаліст із перевірки зору та підбору окулярів. Він точно виміряє зір і випише актуальний рецепт. Підходить, якщо ви хочете нові окуляри і нічого не турбує. Вартість 99 zł, а при замовленні окулярів — безкоштовно.<br><br>Офтальмолог оцінює здоров’я очей: оглядає очне дно і за потреби призначає лікування. Підходить, якщо є скарги або захворювання очей. Вартість 219 zł.<br><br>Який варіант вам підійде?</div>
        </div>
      </div>

      <div class="tip-block">
        <h4>🛠 Шаблони на «складні» моменти</h4>
        <ul>
          <li><strong>Клієнт надіслав фото старого/нерозбірливого рецепта:</strong><br>«Бачу ваш рецепт, дякую! Підкажіть, як давно його виписували? Якщо минуло більше року, параметри могли змінитися. Щоб нові окуляри не втомлювали очі, рекомендую оновити рецепт у нашого оптометриста — при замовленні окулярів перевірка безкоштовна. Записати вас перед підбором оправи?»</li>
          <li style="margin-top:10px;"><strong>Клієнт питає лише ціну:</strong><br>«Ціна залежить від параметрів лінз і обраної оправи — є варіанти від [Ціна] до [Ціна] zł. Щоб назвати точну суму під ваш бюджет, підкажіть: у вас є рецепт чи потрібно перевірити зір?»</li>
        </ul>
      </div>`,
    pl: `<div class="info-box">
        <strong>Kogo gdzie zapisujemy:</strong>
        <ul style="margin-top:8px;">
          <li><strong>👓 Optometrysta — 99 zł, przy zamówieniu okularów bezpłatnie.</strong> Trasa główna: dorośli i dzieci od 7 lat bez dolegliwości, którzy potrzebują nowych okularów, odświeżenia recepty lub zaczęli gorzej widzieć.</li>
          <li><strong>🩺 Okulista — 219 zł.</strong> Dzieci poniżej 7 lat, które są u nas pierwszy raz; klienci z chorobami oczu; wszelkie dolegliwości — ból, zaczerwienienie, stan zapalny, nagłe pogorszenie wzroku.</li>
        </ul>
      </div>

      <div class="phase">
        <div class="phase-title">Krok 1 · Pierwsza odpowiedź</div>
        <div class="phase-goal">Cel: pokazać, że po drugiej stronie jest człowiek, i od razu dowiedzieć się, z czym przychodzi klient.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry! Dziękujemy za wiadomość do Ok.Optyk 😊<br><br>Proszę powiedzieć, czy chcą Państwo dobrać okulary, soczewki kontaktowe, czy interesuje Państwa badanie wzroku?</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Krok 2 · Dopytujemy według odpowiedzi klienta</div>
        <div class="phase-goal">Nie zadawaj wszystkich pytań naraz. Jedna wiadomość — jedno pytanie.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Badanie wzroku</span>&nbsp; lub okulary bez recepty</div>
              <div class="scenario-body">
                <div class="msg consultant"><div class="msg-label">Konsultant</div>Proszę powiedzieć, czy badanie wzroku jest potrzebne do doboru okularów, czy coś Państwa niepokoi?</div>
                <em class="note">Jeśli nie wiadomo, dla kogo jest wizyta — dopytaj: «Wizyta jest dla Państwa czy dla dziecka?»</em>
              </div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Okulary</span>&nbsp; Klient chce zamówić okulary</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Chętnie pomogę dobrać oprawę i soczewki! Czy mają Państwo już receptę, czy trzeba sprawdzić wzrok u nas w salonie?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Recepta jest</span>&nbsp; Sprawdzamy, czy aktualna</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Świetnie! Kiedy była wystawiona recepta? I czy planują Państwo przyjechać do salonu na przymiarkę opraw, czy wolą złożyć zamówienie online?</div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Krok 3 · Routing</div>
        <div class="phase-goal">Na podstawie odpowiedzi klienta przechodzimy do właściwej zakładki albo zamykamy na działanie od razu tutaj.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">→ 👓 Optometrysta</span>&nbsp; Brak recepty / starsza niż rok, brak dolegliwości</div>
              <div class="scenario-body"><div class="msg client"><div class="msg-label">Klient</div>«Potrzebuję okularów» · «Chcę sprawdzić wzrok i dobrać okulary» · «Zacząłem gorzej widzieć» · «Recepta jest stara»</div><em class="note">→ Kontynuuj według zakładki «👓 Optometrysta».</em></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">→ 🩺 Okulista</span>&nbsp; Dolegliwości / zdrowie oczu / dziecko poniżej 7 lat</div>
              <div class="scenario-body"><div class="msg client"><div class="msg-label">Klient</div>«Bolą mnie oczy» · «Mam stan zapalny» · «Mam jaskrę / zaćmę / cukrzycę» · «Dziecko ma 5 lat, jeszcze nie było badane»</div><em class="note">→ Kontynuuj według zakładki «🩺 Okulista».</em></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Aktualna recepta</span>&nbsp; Mniej niż rok + wizyta → Dobór oprawy</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Wspaniale! Skoro recepta jest aktualna, zapraszamy na przymiarkę — właśnie odświeżyliśmy kolekcję opraw. Żeby nie musieli Państwo czekać, zarezerwuję dla Państwa czas konsultanta.<br><br>📍 Jeleniogórska 1/3 (naprzeciwko Aldi)<br><br>Wygodniej w dzień powszedni czy w weekend?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Soczewki kontaktowe</span>&nbsp; Zamówienie online</div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Przyjęłam! Nie trzeba przyjeżdżać do salonu — możemy wszystko załatwić online i wysłać kurierem.<br><br>Proszę przesłać zdjęcie recepty lub napisać parametry soczewek (dioptrie, promień krzywizny, marka). Sprawdzę dostępność i wyliczę koszt ✨</div></div>
            </div>
          </div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Jeśli klient nie rozumie różnicy</div>
        <div class="phase-goal">Spokojnie wyjaśniamy różnicę między wizytami i ponownie dajemy wybór.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Konsultant</div>Już wyjaśniam 😊<br><br>Optometrysta to specjalista od badania wzroku i doboru okularów. Dokładnie zmierzy wzrok i wystawi aktualną receptę. To dobry wybór, jeśli chcą Państwo nowe okulary i nic nie dolega. Koszt 99 zł, a przy zamówieniu okularów — bezpłatnie.<br><br>Okulista ocenia zdrowie oczu: bada dno oka i w razie potrzeby zaleca leczenie. To dobry wybór, jeśli występują dolegliwości lub choroby oczu. Koszt 219 zł.<br><br>Który wariant będzie dla Państwa odpowiedni?</div>
        </div>
      </div>

      <div class="tip-block">
        <h4>🛠 Szablony na «trudne» sytuacje</h4>
        <ul>
          <li><strong>Klient przesłał zdjęcie starej/nieczytelnej recepty:</strong><br>«Widzę Państwa receptę, dziękuję! Kiedy była wystawiona? Jeśli minął ponad rok, parametry mogły się zmienić. Aby nowe okulary nie męczyły oczu, polecam odświeżyć receptę u naszego optometrysty — przy zamówieniu okularów badanie jest bezpłatne. Zapisać Państwa przed doborem oprawy?»</li>
          <li style="margin-top:10px;"><strong>Klient pyta tylko o cenę:</strong><br>«Cena zależy od parametrów soczewek i wybranej oprawy — mamy warianty od [Cena] do [Cena] zł. Żeby podać dokładną kwotę dopasowaną do budżetu, proszę powiedzieć: czy mają Państwo receptę, czy trzeba sprawdzić wzrok?»</li>
        </ul>
      </div>`,
  } as T,

  // Вкладка «Оптометрист» — основной маршрут (акция: 99 zł, при заказе очков бесплатно).
  optoBody: {
    ru: `<div class="info-box">
        <strong>👓 Кого записываем к оптометристу:</strong> взрослых и детей от 7 лет <strong>без жалоб</strong> — нужны новые очки, рецепта нет или он старше года, стали хуже видеть.<br>
        <strong>Акция:</strong> проверка зрения <strong>99 zł</strong>, при заказе очков — <strong>бесплатно</strong>.<br>
        <strong>Цель:</strong> бо́льшую часть обращений по проверке зрения ведём сюда.
      </div>

      <div class="phase">
        <div class="phase-title">Этап 1 · Предложение приёма</div>
        <div class="phase-goal">Сразу показываем, что входит в приём, называем цену с акцией и даём 2 конкретных термина.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Здравствуйте! Спасибо, что выбрали нашу оптику 💚<br><br>Предлагаем профессиональную проверку зрения с подбором очков. Приём включает:<br>— компьютерную диагностику зрения<br>— проверку остроты зрения вдаль и вблизи<br>— подбор линз на пробной оправе: вы сразу увидите, как будете видеть в новых очках<br>— актуальный рецепт на очки<br><br>Стоимость: 99 zł, а при заказе очков у нас — бесплатно 🎁<br><br>Доступные термины:<br>— [день, время]<br>— [день, время]<br><br>Подходит ли вам это время? 😊</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Этап 2 · Почему оптометрист — аргументы для клиента</div>
        <div class="phase-goal">Используйте, если клиент сомневается. Одно сообщение — один аргумент.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Оптометрист специализируется именно на проверке зрения и подборе очков, поэтому рецепт получается точным и комфортным для носки.</div>
          <div class="msg consultant" style="margin-top:10px;"><div class="msg-label">Консультант</div>Рецепт подбирается под ваши задачи: работа за компьютером, вождение, чтение — чтобы в новых очках глаза не уставали.</div>
          <div class="msg consultant" style="margin-top:10px;"><div class="msg-label">Консультант</div>Если во время проверки оптометрист заметит что-то, что требует внимания, он порекомендует консультацию офтальмолога.</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Этап 3 · Ответы на возражения</div>
        <div class="phase-goal">Отвечаем коротко и сразу возвращаем к выбору времени.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Хочу к офтальмологу, а не к оптометристу»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Понимаю вас 😊 Оптометрист — специалист с профильным образованием по проверке зрения и подбору очков, поэтому для новых очков это самый точный вариант.<br><br>Если же вас что-то беспокоит или есть заболевания глаз, с удовольствием запишу вас к офтальмологу — стоимость 219 zł. Подскажите, есть ли жалобы?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Почему проверка платная?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Если вы заказываете очки у нас, проверка бесплатная 🎁 Оплата 99 zł — только если нужна проверка без заказа очков. Записать вас на [день, время]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«У меня есть рецепт»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Отлично! Подскажите, когда его выписывали? Если меньше года назад — приходите сразу на подбор оправы. Если больше — рекомендую обновить: при заказе очков проверка у нас бесплатная, а очки по свежему рецепту не будут утомлять глаза.</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Сколько длится приём?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Около 20 минут. После проверки можно сразу выбрать оправу — всё за один визит. Вам удобнее [день, время] или [день, время]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Я подумаю»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Конечно! Чтобы удобное время не заняли, могу предварительно забронировать за вами [день, время]. Если планы изменятся — просто напишите, и мы перенесём. Бронирую?</div></div>
            </div>
          </div>
        </div>
      </div>`,
    ua: `<div class="info-box">
        <strong>👓 Кого записуємо до оптометриста:</strong> дорослих і дітей від 7 років <strong>без скарг</strong> — потрібні нові окуляри, рецепта немає або він старший за рік, стали гірше бачити.<br>
        <strong>Акція:</strong> перевірка зору <strong>99 zł</strong>, при замовленні окулярів — <strong>безкоштовно</strong>.<br>
        <strong>Мета:</strong> більшість звернень щодо перевірки зору ведемо сюди.
      </div>

      <div class="phase">
        <div class="phase-title">Етап 1 · Пропозиція прийому</div>
        <div class="phase-goal">Одразу показуємо, що входить у прийом, називаємо ціну з акцією і даємо 2 конкретні терміни.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Вітаю! Дякуємо, що обрали нашу оптику 💚<br><br>Пропонуємо професійну перевірку зору з підбором окулярів. Прийом включає:<br>— комп’ютерну діагностику зору<br>— перевірку гостроти зору вдалину та зблизька<br>— підбір лінз на пробній оправі: ви одразу побачите, як бачитимете в нових окулярах<br>— актуальний рецепт на окуляри<br><br>Вартість: 99 zł, а при замовленні окулярів у нас — безкоштовно 🎁<br><br>Доступні терміни:<br>— [день, час]<br>— [день, час]<br><br>Чи підходить вам цей час? 😊</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Етап 2 · Чому оптометрист — аргументи для клієнта</div>
        <div class="phase-goal">Використовуйте, якщо клієнт вагається. Одне повідомлення — один аргумент.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Оптометрист спеціалізується саме на перевірці зору та підборі окулярів, тому рецепт виходить точним і комфортним для носіння.</div>
          <div class="msg consultant" style="margin-top:10px;"><div class="msg-label">Консультант</div>Рецепт підбирається під ваші завдання: робота за комп’ютером, водіння, читання — щоб у нових окулярах очі не втомлювалися.</div>
          <div class="msg consultant" style="margin-top:10px;"><div class="msg-label">Консультант</div>Якщо під час перевірки оптометрист помітить щось, що потребує уваги, він порекомендує консультацію офтальмолога.</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Етап 3 · Відповіді на заперечення</div>
        <div class="phase-goal">Відповідаємо коротко й одразу повертаємо до вибору часу.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Хочу до офтальмолога, а не до оптометриста»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Розумію вас 😊 Оптометрист — спеціаліст із профільною освітою з перевірки зору та підбору окулярів, тому для нових окулярів це найточніший варіант.<br><br>Якщо ж вас щось турбує або є захворювання очей, із задоволенням запишу вас до офтальмолога — вартість 219 zł. Підкажіть, чи є скарги?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Чому перевірка платна?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Якщо ви замовляєте окуляри в нас, перевірка безкоштовна 🎁 Оплата 99 zł — лише якщо потрібна перевірка без замовлення окулярів. Записати вас на [день, час]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«У мене є рецепт»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Чудово! Підкажіть, коли його виписували? Якщо менше року тому — приходьте одразу на підбір оправи. Якщо більше — рекомендую оновити: при замовленні окулярів перевірка в нас безкоштовна, а окуляри за свіжим рецептом не втомлюватимуть очі.</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Скільки триває прийом?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Близько 20 хвилин. Після перевірки можна одразу вибрати оправу — усе за один візит. Вам зручніше [день, час] чи [день, час]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Я подумаю»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Звісно! Щоб зручний час не зайняли, можу попередньо забронювати за вами [день, час]. Якщо плани зміняться — просто напишіть, і ми перенесемо. Бронюю?</div></div>
            </div>
          </div>
        </div>
      </div>`,
    pl: `<div class="info-box">
        <strong>👓 Kogo zapisujemy do optometrysty:</strong> dorosłych i dzieci od 7 lat <strong>bez dolegliwości</strong> — potrzebne nowe okulary, brak recepty lub jest starsza niż rok, gorzej widzą.<br>
        <strong>Promocja:</strong> badanie wzroku <strong>99 zł</strong>, przy zamówieniu okularów — <strong>bezpłatnie</strong>.<br>
        <strong>Cel:</strong> większość zgłoszeń na badanie wzroku kierujemy tutaj.
      </div>

      <div class="phase">
        <div class="phase-title">Etap 1 · Propozycja wizyty</div>
        <div class="phase-goal">Od razu pokazujemy, co obejmuje wizyta, podajemy cenę z promocją i 2 konkretne terminy.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry! Dziękujemy, że wybrali Państwo nasz salon 💚<br><br>Proponujemy profesjonalne badanie wzroku z doborem okularów. Wizyta obejmuje:<br>— komputerowe badanie wzroku<br>— badanie ostrości wzroku do dali i do bliży<br>— dobór soczewek w oprawie próbnej: od razu zobaczą Państwo, jak będą widzieć w nowych okularach<br>— aktualną receptę na okulary<br><br>Koszt: 99 zł, a przy zamówieniu okularów u nas — bezpłatnie 🎁<br><br>Dostępne terminy:<br>— [dzień, godzina]<br>— [dzień, godzina]<br><br>Czy ten termin Państwu odpowiada? 😊</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Etap 2 · Dlaczego optometrysta — argumenty dla klienta</div>
        <div class="phase-goal">Używaj, jeśli klient się waha. Jedna wiadomość — jeden argument.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Konsultant</div>Optometrysta specjalizuje się właśnie w badaniu wzroku i doborze okularów, dlatego recepta jest dokładna i wygodna w noszeniu.</div>
          <div class="msg consultant" style="margin-top:10px;"><div class="msg-label">Konsultant</div>Receptę dobieramy do Państwa potrzeb: praca przy komputerze, prowadzenie auta, czytanie — aby oczy nie męczyły się w nowych okularach.</div>
          <div class="msg consultant" style="margin-top:10px;"><div class="msg-label">Konsultant</div>Jeśli podczas badania optometrysta zauważy coś, co wymaga uwagi, zaleci konsultację u okulisty.</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Etap 3 · Odpowiedzi na obiekcje</div>
        <div class="phase-goal">Odpowiadamy krótko i od razu wracamy do wyboru terminu.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Wolę okulistę niż optometrystę»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Rozumiem 😊 Optometrysta to specjalista z wykształceniem kierunkowym w zakresie badania wzroku i doboru okularów, dlatego przy nowych okularach to najdokładniejszy wybór.<br><br>Jeśli jednak coś Państwa niepokoi lub mają Państwo choroby oczu, chętnie zapiszę do okulisty — koszt 219 zł. Czy występują jakieś dolegliwości?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Dlaczego badanie jest płatne?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Przy zamówieniu okularów u nas badanie jest bezpłatne 🎁 Opłata 99 zł obowiązuje tylko wtedy, gdy potrzebne jest samo badanie bez zamówienia okularów. Zapisać Państwa na [dzień, godzina]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Mam receptę»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Świetnie! Kiedy była wystawiona? Jeśli mniej niż rok temu — zapraszamy od razu na dobór oprawy. Jeśli dawniej — polecam ją odświeżyć: przy zamówieniu okularów badanie u nas jest bezpłatne, a okulary według aktualnej recepty nie będą męczyć oczu.</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Ile trwa wizyta?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Około 20 minut. Po badaniu można od razu wybrać oprawę — wszystko podczas jednej wizyty. Pasuje Państwu [dzień, godzina] czy [dzień, godzina]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Zastanowię się»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Oczywiście! Żeby dogodny termin nie przepadł, mogę wstępnie zarezerwować dla Państwa [dzień, godzina]. Jeśli plany się zmienią — wystarczy napisać, a przełożymy wizytę. Rezerwuję?</div></div>
            </div>
          </div>
        </div>
      </div>`,
  } as T,

  // Вкладка «Офтальмолог» — дети до 7 лет впервые, заболевания и жалобы (219 zł).
  oftalBody: {
    ru: `<div class="info-box">
        <strong>🩺 Кого записываем к офтальмологу:</strong>
        <ul style="margin-top:8px;">
          <li>детей <strong>до 7 лет</strong>, которые у нас впервые;</li>
          <li>клиентов с заболеваниями глаз (глаукома, катаракта, после операций на глазах) или с диабетом;</li>
          <li>клиентов с жалобами: боль, покраснение, воспаление, резкое ухудшение зрения, «мушки» и вспышки, двоение;</li>
          <li>клиентов, которым нужна консультация по лечению.</li>
        </ul>
        <strong>Стоимость: 219 zł</strong> (не зависит от заказа очков).<br>
        <strong>⚠ Внезапная потеря зрения, травма или химический ожог глаза</strong> — запись не ждём: советуем срочно обратиться в SOR или позвонить 112.
      </div>

      <div class="phase">
        <div class="phase-title">Этап 1 · Предложение приёма</div>
        <div class="phase-goal">Показываем ценность комплексной проверки, называем цену и даём 2 конкретных термина.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Здравствуйте! Спасибо, что выбрали нашу оптику 💚<br><br>Комплексная проверка зрения у офтальмолога включает:<br>— компьютерную диагностику (выявление близорукости, дальнозоркости, астигматизма)<br>— осмотр глазного дна (оценка состояния сетчатки и сосудов глаз)<br>— проверку остроты зрения<br>— заключение офтальмолога<br><br>При необходимости офтальмолог выпишет рецепт на очки и составит план лечения.<br>Стоимость: 219 zł.<br><br>Доступные термины:<br>— [день, время]<br>— [день, время]<br><br>Подходит ли вам это время? 😊</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Этап 1б · Вариант для ребёнка до 7 лет</div>
        <div class="phase-goal">Родителю важно понять, почему первая проверка — именно у офтальмолога.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Здравствуйте! Спасибо, что выбрали нашу оптику 💚<br><br>Первую проверку зрения ребёнка мы проводим у офтальмолога: он не только проверит остроту зрения, но и оценит здоровье глаз. Это важно сделать до подбора очков.<br><br>Приём включает:<br>— компьютерную диагностику зрения<br>— осмотр глазного дна<br>— проверку остроты зрения<br>— заключение офтальмолога и рекомендации<br><br>Стоимость: 219 zł.<br><br>Доступные термины:<br>— [день, время]<br>— [день, время]<br><br>Подходит ли вам это время? 😊</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Этап 2 · Ответы на возражения</div>
        <div class="phase-goal">Отвечаем коротко и возвращаем к выбору времени.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Почему 219 zł, а у оптометриста 99?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Это разные приёмы. Офтальмолог оценивает здоровье глаз: осматривает глазное дно, даёт заключение и при необходимости назначает лечение. С вашими [жалобами / диагнозом] важно, чтобы глаза осмотрел именно офтальмолог. Записать вас на [день, время]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Можно ребёнка к оптометристу? Дешевле»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Первую проверку детям до 7 лет мы проводим у офтальмолога: важно убедиться, что глаза здоровы, прежде чем подбирать очки. В следующий раз, если всё в порядке, можно будет записаться к оптометристу. Какое время вам удобнее?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Можно сразу заказать очки?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Да! Если офтальмолог выпишет рецепт, после приёма консультант поможет подобрать оправу и линзы — всё за один визит 😊</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Жалоб нет, нужны только очки</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Тогда вам подойдёт проверка у оптометриста — специалиста по подбору очков. Стоимость 99 zł, а при заказе очков — бесплатно. Записать вас?</div><em class="note">→ Продолжайте по вкладке «👓 Оптометрист».</em></div>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-block">
        <h4>💡 Важно</h4>
        <ul>
          <li><strong>Слово «врач» в переписке не используем</strong> — пишем «офтальмолог».</li>
          <li style="margin-top:10px;"><strong>Не ставим диагнозы и не советуем лечение.</strong> Задача консультанта — записать клиента. Всё о здоровье глаз скажет офтальмолог.</li>
          <li style="margin-top:10px;"><strong>Узнайте у офтальмолога, закапывает ли он капли для расширения зрачка.</strong> Если да — предупреждайте клиента, что после приёма несколько часов не стоит садиться за руль.</li>
        </ul>
      </div>`,
    ua: `<div class="info-box">
        <strong>🩺 Кого записуємо до офтальмолога:</strong>
        <ul style="margin-top:8px;">
          <li>дітей <strong>до 7 років</strong>, які в нас уперше;</li>
          <li>клієнтів із захворюваннями очей (глаукома, катаракта, після операцій на очах) або з діабетом;</li>
          <li>клієнтів зі скаргами: біль, почервоніння, запалення, різке погіршення зору, «мушки» та спалахи, двоїння;</li>
          <li>клієнтів, яким потрібна консультація щодо лікування.</li>
        </ul>
        <strong>Вартість: 219 zł</strong> (не залежить від замовлення окулярів).<br>
        <strong>⚠ Раптова втрата зору, травма або хімічний опік ока</strong> — запису не чекаємо: радимо терміново звернутися до SOR або зателефонувати 112.
      </div>

      <div class="phase">
        <div class="phase-title">Етап 1 · Пропозиція прийому</div>
        <div class="phase-goal">Показуємо цінність комплексної перевірки, називаємо ціну і даємо 2 конкретні терміни.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Вітаю! Дякуємо, що обрали нашу оптику 💚<br><br>Комплексна перевірка зору в офтальмолога включає:<br>— комп’ютерну діагностику (виявлення короткозорості, далекозорості, астигматизму)<br>— огляд очного дна (оцінка стану сітківки та судин очей)<br>— перевірку гостроти зору<br>— висновок офтальмолога<br><br>За потреби офтальмолог випише рецепт на окуляри та складе план лікування.<br>Вартість: 219 zł.<br><br>Доступні терміни:<br>— [день, час]<br>— [день, час]<br><br>Чи підходить вам цей час? 😊</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Етап 1б · Варіант для дитини до 7 років</div>
        <div class="phase-goal">Батькам важливо зрозуміти, чому перша перевірка — саме в офтальмолога.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Консультант</div>Вітаю! Дякуємо, що обрали нашу оптику 💚<br><br>Першу перевірку зору дитини ми проводимо в офтальмолога: він не лише перевірить гостроту зору, а й оцінить здоров’я очей. Це важливо зробити до підбору окулярів.<br><br>Прийом включає:<br>— комп’ютерну діагностику зору<br>— огляд очного дна<br>— перевірку гостроти зору<br>— висновок офтальмолога та рекомендації<br><br>Вартість: 219 zł.<br><br>Доступні терміни:<br>— [день, час]<br>— [день, час]<br><br>Чи підходить вам цей час? 😊</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Етап 2 · Відповіді на заперечення</div>
        <div class="phase-goal">Відповідаємо коротко й повертаємо до вибору часу.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Чому 219 zł, а в оптометриста 99?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Це різні прийоми. Офтальмолог оцінює здоров’я очей: оглядає очне дно, дає висновок і за потреби призначає лікування. З вашими [скаргами / діагнозом] важливо, щоб очі оглянув саме офтальмолог. Записати вас на [день, час]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Можна дитину до оптометриста? Дешевше»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Першу перевірку дітям до 7 років ми проводимо в офтальмолога: важливо переконатися, що очі здорові, перш ніж підбирати окуляри. Наступного разу, якщо все гаразд, можна буде записатися до оптометриста. Який час вам зручніший?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Можна одразу замовити окуляри?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Так! Якщо офтальмолог випише рецепт, після прийому консультант допоможе підібрати оправу та лінзи — усе за один візит 😊</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Скарг немає, потрібні лише окуляри</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Консультант</div>Тоді вам підійде перевірка в оптометриста — спеціаліста з підбору окулярів. Вартість 99 zł, а при замовленні окулярів — безкоштовно. Записати вас?</div><em class="note">→ Продовжуйте за вкладкою «👓 Оптометрист».</em></div>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-block">
        <h4>💡 Важливо</h4>
        <ul>
          <li><strong>Слово «лікар» у листуванні не використовуємо</strong> — пишемо «офтальмолог».</li>
          <li style="margin-top:10px;"><strong>Не ставимо діагнозів і не радимо лікування.</strong> Завдання консультанта — записати клієнта. Усе про здоров’я очей скаже офтальмолог.</li>
          <li style="margin-top:10px;"><strong>Дізнайтеся в офтальмолога, чи закапує він краплі для розширення зіниці.</strong> Якщо так — попереджайте клієнта, що після прийому кілька годин не варто сідати за кермо.</li>
        </ul>
      </div>`,
    pl: `<div class="info-box">
        <strong>🩺 Kogo zapisujemy do okulisty:</strong>
        <ul style="margin-top:8px;">
          <li>dzieci <strong>poniżej 7 lat</strong>, które są u nas pierwszy raz;</li>
          <li>klientów z chorobami oczu (jaskra, zaćma, po operacjach oczu) lub z cukrzycą;</li>
          <li>klientów z dolegliwościami: ból, zaczerwienienie, stan zapalny, nagłe pogorszenie wzroku, «muszki» i błyski, podwójne widzenie;</li>
          <li>klientów, którzy potrzebują konsultacji w sprawie leczenia.</li>
        </ul>
        <strong>Koszt: 219 zł</strong> (niezależnie od zamówienia okularów).<br>
        <strong>⚠ Nagła utrata wzroku, uraz lub oparzenie chemiczne oka</strong> — nie czekamy na wizytę: zalecamy pilny kontakt z SOR lub telefon pod 112.
      </div>

      <div class="phase">
        <div class="phase-title">Etap 1 · Propozycja wizyty</div>
        <div class="phase-goal">Pokazujemy wartość kompleksowego badania, podajemy cenę i 2 konkretne terminy.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry! Dziękujemy, że wybrali Państwo nasz salon 💚<br><br>Kompleksowe badanie wzroku u okulisty obejmuje:<br>— komputerowe badanie wzroku (wykrycie krótkowzroczności, nadwzroczności, astygmatyzmu)<br>— badanie dna oka (ocena stanu siatkówki i naczyń krwionośnych oka)<br>— badanie ostrości wzroku<br>— opinię okulisty<br><br>W razie potrzeby okulista wystawi receptę na okulary i zaplanuje leczenie.<br>Koszt: 219 zł.<br><br>Dostępne terminy:<br>— [dzień, godzina]<br>— [dzień, godzina]<br><br>Czy ten termin Państwu odpowiada? 😊</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Etap 1b · Wariant dla dziecka poniżej 7 lat</div>
        <div class="phase-goal">Rodzic musi zrozumieć, dlaczego pierwsze badanie odbywa się właśnie u okulisty.</div>
        <div class="phase-body">
          <div class="msg consultant"><div class="msg-label">Konsultant</div>Dzień dobry! Dziękujemy, że wybrali Państwo nasz salon 💚<br><br>Pierwsze badanie wzroku dziecka przeprowadzamy u okulisty: sprawdzi nie tylko ostrość wzroku, ale też oceni zdrowie oczu. Warto to zrobić przed doborem okularów.<br><br>Wizyta obejmuje:<br>— komputerowe badanie wzroku<br>— badanie dna oka<br>— badanie ostrości wzroku<br>— opinię okulisty i zalecenia<br><br>Koszt: 219 zł.<br><br>Dostępne terminy:<br>— [dzień, godzina]<br>— [dzień, godzina]<br><br>Czy ten termin Państwu odpowiada? 😊</div>
        </div>
      </div>

      <div class="phase">
        <div class="phase-title">Etap 2 · Odpowiedzi na obiekcje</div>
        <div class="phase-goal">Odpowiadamy krótko i wracamy do wyboru terminu.</div>
        <div class="phase-body">
          <div class="scenarios">
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Dlaczego 219 zł, a u optometrysty 99?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>To różne wizyty. Okulista ocenia zdrowie oczu: bada dno oka, wydaje opinię i w razie potrzeby zaleca leczenie. Przy Państwa [dolegliwościach / diagnozie] ważne jest, aby oczy zbadał właśnie okulista. Zapisać Państwa na [dzień, godzina]?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Czy dziecko może iść do optometrysty? Taniej»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Pierwsze badanie dzieci poniżej 7 lat przeprowadzamy u okulisty: ważne jest, aby upewnić się, że oczy są zdrowe, zanim dobierzemy okulary. Następnym razem, jeśli wszystko będzie w porządku, można zapisać się do optometrysty. Który termin będzie wygodniejszy?</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">«Czy mogę od razu zamówić okulary?»</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>Tak! Jeśli okulista wystawi receptę, po wizycie konsultant pomoże dobrać oprawę i soczewki — wszystko podczas jednej wizyty 😊</div></div>
            </div>
            <div class="scenario">
              <div class="scenario-header"><span class="scenario-label">Brak dolegliwości, potrzebne tylko okulary</span></div>
              <div class="scenario-body"><div class="msg consultant"><div class="msg-label">Konsultant</div>W takim razie odpowiednie będzie badanie u optometrysty — specjalisty od doboru okularów. Koszt 99 zł, a przy zamówieniu okularów — bezpłatnie. Zapisać Państwa?</div><em class="note">→ Kontynuuj według zakładki «👓 Optometrysta».</em></div>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-block">
        <h4>💡 Ważne</h4>
        <ul>
          <li><strong>W korespondencji nie używamy słowa «lekarz»</strong> — piszemy «okulista».</li>
          <li style="margin-top:10px;"><strong>Nie stawiamy diagnoz i nie doradzamy leczenia.</strong> Zadaniem konsultanta jest zapisanie klienta. O zdrowiu oczu powie okulista.</li>
          <li style="margin-top:10px;"><strong>Zapytaj okulistę, czy podaje krople rozszerzające źrenicę.</strong> Jeśli tak — uprzedzaj klienta, że przez kilka godzin po wizycie nie powinien prowadzić auta.</li>
        </ul>
      </div>`,
  } as T,

  nextBtn: { ru: 'Следующий шаг: Запись на визит →', ua: 'Наступний крок: Запис на візит →', pl: 'Następny krok: Rejestracja na wizytę →' } as T,
};
