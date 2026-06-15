// src/pages/prodazha-online/_i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

export const t = {
  headerTitle: { ru: 'Продажа очков онлайн', ua: 'Продаж окулярів онлайн', pl: 'Sprzedaż okularów online' } as T,
  headerSub:   { ru: 'Помогаем клиенту выбрать и оформить заказ дистанционно — с доставкой по Польше', ua: 'Допомагаємо клієнту обрати та оформити замовлення дистанційно — з доставкою по Польщі', pl: 'Pomagamy klientowi wybrać i złożyć zamówienie zdalnie — z dostawą na terenie Polski' } as T,

  tabMain: { ru: '🛍 Основной сценарий', ua: '🛍 Основний сценарій', pl: '🛍 Główny scenariusz' } as T,
  tabLost: { ru: '😶 Клиент пропал', ua: '😶 Клієнт зник', pl: '😶 Klient zniknął' } as T,

  introMain: {
    ru: `Клиент пишет сам и хочет заказать очки с доставкой. Задача — помочь подобрать оправу и оформить заказ, не торопя клиента.`,
    ua: `Клієнт пише сам і хоче замовити окуляри з доставкою. Завдання — допомогти підібрати оправу та оформити замовлення, не кваплячи клієнта.`,
    pl: `Klient pisze sam i chce zamówić okulary z dostawą. Zadanie — pomóc dobrać oprawę i złożyć zamówienie, nie poganiając klienta.`,
  } as T,
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
              <div class="msg consultant"><div class="msg-label">Консультант</div>Хороший выбор 😊<br><br>В данной оправе стоимость очков по вашему рецепту составит <strong>890 zł</strong> вместе с линзами.<br><br>В стоимость входит:<br>✔ изготовление линз по вашему рецепту<br>✔ установка линз в оправу<br>✔ настройка очков перед отправкой<br>✔ доставка по Польше<br><br>Если вариант подходит, могу подготовить заказ 😊<br><br>Для оформления понадобятся:<br>• имя и фамилия<br>• номер телефона<br>• адрес доставки</div>
            </div>
          </div>
        </div>
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
              <div class="msg consultant"><div class="msg-label">Консультант</div>Гарний вибір 😊<br><br>В даній оправі вартість окулярів за вашим рецептом складе <strong>890 zł</strong> разом з лінзами.<br><br>В вартість входить:<br>✔ виготовлення лінз за вашим рецептом<br>✔ встановлення лінз в оправу<br>✔ налаштування окулярів перед відправкою<br>✔ доставка по Польщі<br><br>Якщо варіант підходить, можу підготувати замовлення 😊<br><br>Для оформлення потрібні:<br>• ім'я та прізвище<br>• номер телефону<br>• адреса доставки</div>
            </div>
          </div>
        </div>
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
              <div class="msg consultant"><div class="msg-label">Konsultant</div>Dobry wybór 😊<br><br>W tej oprawie koszt okularów wg Państwa recepty wyniesie <strong>890 zł</strong> razem z soczewkami.<br><br>W cenie uwzględnione:<br>✔ wykonanie soczewek wg recepty<br>✔ osadzenie soczewek w oprawie<br>✔ regulacja okularów przed wysyłką<br>✔ dostawa po Polsce<br><br>Jeśli opcja odpowiada, mogę przygotować zamówienie 😊<br><br>Do realizacji potrzebne:<br>• imię i nazwisko<br>• numer telefonu<br>• adres dostawy</div>
            </div>
          </div>
        </div>
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
