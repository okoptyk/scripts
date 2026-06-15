// src/pages/index.i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;
type Card = { title: string; desc: string };
type CardsT = Record<Lang, Card[]>;

export const t = {
  heroH1: { ru: 'Скрипты для менеджеров', ua: 'Скрипти для менеджерів', pl: 'Skrypty dla menedżerów' } as T,
  heroP: {
    ru: `Руководство по работе с клиентами для сети оптик<br><strong>OkOptyk</strong>`,
    ua: `Посібник із роботи з клієнтами для мережі оптик<br><strong>OkOptyk</strong>`,
    pl: `Przewodnik po obsłudze klientów dla sieci salonów optycznych<br><strong>OkOptyk</strong>`,
  } as T,

  intro: {
    ru: `<strong>Почему скрипты так важны?</strong><br><br>
    За каждым звонком или сообщением — живой человек. Кто-то хочет лучше видеть своих детей. Кто-то наконец решился позаботиться о глазах после долгих лет откладывания. Кто-то нервничает, потому что не знает, что его ждёт в салоне.<br><br>
    Скрипты — это не жёсткий сценарий, а инструмент внимания. Они помогают вам сразу задать верный тон: не торопить клиента, не теряться в его вопросах, показать, что вы рядом и готовы помочь. Когда клиент чувствует, что его понимают — он доверяет. А доверие — это основа долгих отношений с каждым человеком, который переступает порог нашего салона.<br><br>
    <em>Используйте скрипты как ориентир. Добавляйте тепло, чуткость и свою личность — именно это превращает хорошее общение в незабываемое.</em>`,
    ua: `<strong>Чому скрипти такі важливі?</strong><br><br>За кожним дзвінком чи повідомленням — жива людина. Хтось хоче краще бачити своїх дітей. Хтось нарешті наважився подбати про очі після довгих років відкладання. Хтось хвилюється, бо не знає, що на нього чекає в салоні.<br><br>Скрипти — це не жорсткий сценарій, а інструмент уваги. Вони допомагають одразу задати правильний тон: не квапити клієнта, не губитися в його запитаннях, показати, що ви поруч і готові допомогти. Коли клієнт відчуває, що його розуміють — він довіряє. А довіра — це основа тривалих стосунків із кожною людиною, яка переступає поріг нашого салону.<br><br><em>Використовуйте скрипти як орієнтир. Додавайте тепло, чуйність і свою особистість — саме це перетворює добре спілкування на незабутнє.</em>`,
    pl: `<strong>Dlaczego skrypty są tak ważne?</strong><br><br>Za każdym telefonem czy wiadomością stoi żywy człowiek. Ktoś chce lepiej widzieć swoje dzieci. Ktoś wreszcie zdecydował się zadbać o wzrok po latach odkładania. Ktoś się denerwuje, bo nie wie, co czeka go w salonie.<br><br>Skrypty to nie sztywny scenariusz, lecz narzędzie uważności. Pomagają od razu nadać właściwy ton: nie poganiać klienta, nie gubić się w jego pytaniach, pokazać, że jesteśmy obok i gotowi pomóc. Gdy klient czuje, że jest rozumiany — ufa. A zaufanie to podstawa długiej relacji z każdym, kto przekracza próg naszego salonu.<br><br><em>Traktuj skrypty jako drogowskaz. Dodawaj ciepło, wrażliwość i własną osobowość — to właśnie zamienia dobrą rozmowę w niezapomnianą.</em>`,
  } as T,

  slogan: {
    ru: `Сделанное с любовью — носи с гордостью!`,
    ua: `Зроблене з любов'ю — носи з гордістю!`,
    pl: `Zrobione z miłością — noś z dumą!`,
  } as T,

  razdely: { ru: 'Разделы', ua: 'Розділи', pl: 'Sekcje' } as T,
  subtitle: {
    ru: 'Выберите нужный этап работы с клиентом:',
    ua: 'Оберіть потрібний етап роботи з клієнтом:',
    pl: 'Wybierz odpowiedni etap pracy z klientem:',
  } as T,

  // Parallel to stages.ts order: kvalifikaciya, poland, podtverzdenie,
  // kommunikaciya, prodazha-online, gotovnost-zakaza, povtornye-prodazhi
  cards: {
    ru: [
      { title: 'Квалификация клиента', desc: 'Определяем потребность клиента и направляем его по правильному пути.' },
      { title: 'Запись на визит', desc: 'Согласовываем дату, время и адрес салона.' },
      { title: 'Подтверждение визита', desc: 'Напоминаем клиенту о записи, уточняем детали и оперативно переносим при необходимости.' },
      { title: 'Первичная коммуникация в салоне', desc: 'Встречаем клиента, выявляем потребность и направляем к нужному сценарию обслуживания.' },
      { title: 'Продажа очков онлайн', desc: 'Помогаем клиенту выбрать и оформить заказ дистанционно.' },
      { title: 'Уведомление о готовности заказа', desc: 'Сообщаем клиенту, что очки готовы, и согласовываем удобное время для визита.' },
      { title: 'Повторные продажи', desc: 'Заботимся о клиенте после покупки и реализуем потенциал повторной продажи.' },
    ],
    ua: [
      { title: 'Кваліфікація клієнта', desc: 'Визначаємо потребу клієнта та спрямовуємо його правильним шляхом.' },
      { title: 'Запис на візит', desc: 'Узгоджуємо дату, час та адресу салону.' },
      { title: 'Підтвердження візиту', desc: 'Нагадуємо клієнту про запис, уточнюємо деталі та оперативно переносимо за потреби.' },
      { title: 'Первинна комунікація в салоні', desc: 'Зустрічаємо клієнта, виявляємо потребу та спрямовуємо до потрібного сценарію обслуговування.' },
      { title: 'Продаж окулярів онлайн', desc: 'Допомагаємо клієнту обрати та оформити замовлення дистанційно.' },
      { title: 'Повідомлення про готовність замовлення', desc: 'Повідомляємо клієнту, що окуляри готові, та узгоджуємо зручний час для візиту.' },
      { title: 'Повторні продажі', desc: 'Дбаємо про клієнта після покупки та реалізуємо потенціал повторного продажу.' },
    ],
    pl: [
      { title: 'Kwalifikacja klienta', desc: 'Ustalamy potrzebę klienta i kierujemy go właściwą ścieżką.' },
      { title: 'Rejestracja na wizytę', desc: 'Ustalamy datę, godzinę i adres salonu.' },
      { title: 'Potwierdzenie wizyty', desc: 'Przypominamy klientowi o wizycie, doprecyzowujemy szczegóły i w razie potrzeby szybko przekładamy.' },
      { title: 'Pierwszy kontakt w salonie', desc: 'Witamy klienta, ustalamy potrzebę i kierujemy do właściwego scenariusza obsługi.' },
      { title: 'Sprzedaż okularów online', desc: 'Pomagamy klientowi wybrać i złożyć zamówienie zdalnie.' },
      { title: 'Powiadomienie o gotowości zamówienia', desc: 'Informujemy klienta, że okulary są gotowe, i ustalamy dogodny termin wizyty.' },
      { title: 'Sprzedaż ponowna', desc: 'Dbamy o klienta po zakupie i wykorzystujemy potencjał ponownej sprzedaży.' },
    ],
  } as CardsT,

  principles: {
    ru: `<h3 style="font-size:1rem; color:var(--primary-dark); margin-bottom:12px;">💡 Три принципа работы с клиентом</h3>
    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; text-align:center;">
      <div>
        <strong style="font-size:.9rem;">Слушай, не продавай</strong>
        <p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">Сначала понять задачу клиента — потом предложить решение. Не наоборот.</p>
      </div>
      <div>
        <strong style="font-size:.9rem;">Продавай визит, не товар</strong>
        <p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">По телефону и в чате невозможно примерить оправу. Цель — привести человека в салон.</p>
      </div>
      <div>
        <strong style="font-size:.9rem;">Давай выбор без выбора</strong>
        <p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">«Вам удобнее в будний или в выходной?» — так клиенту легче принять решение.</p>
      </div>
    </div>`,
    ua: `<h3 style="font-size:1rem; color:var(--primary-dark); margin-bottom:12px;">💡 Три принципи роботи з клієнтом</h3><div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; text-align:center;"><div><strong style="font-size:.9rem;">Слухай, не продавай</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">Спершу зрозуміти задачу клієнта — потім пропонувати рішення. Не навпаки.</p></div><div><strong style="font-size:.9rem;">Продавай візит, а не товар</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">Телефоном і в чаті неможливо приміряти оправу. Мета — привести людину в салон.</p></div><div><strong style="font-size:.9rem;">Давай вибір без вибору</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">«Вам зручніше в будній чи у вихідний?» — так клієнту легше ухвалити рішення.</p></div></div>`,
    pl: `<h3 style="font-size:1rem; color:var(--primary-dark); margin-bottom:12px;">💡 Trzy zasady pracy z klientem</h3><div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; text-align:center;"><div><strong style="font-size:.9rem;">Słuchaj, nie sprzedawaj</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">Najpierw zrozum potrzebę klienta — potem zaproponuj rozwiązanie. Nie odwrotnie.</p></div><div><strong style="font-size:.9rem;">Sprzedawaj wizytę, nie towar</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">Przez telefon i czat nie da się przymierzyć oprawy. Cel — sprowadzić osobę do salonu.</p></div><div><strong style="font-size:.9rem;">Dawaj wybór bez wyboru</strong><p style="font-size:.85rem; color:var(--text-muted); margin-top:4px;">«Wygodniej w dzień powszedni czy w weekend?» — tak klientowi łatwiej podjąć decyzję.</p></div></div>`,
  } as T,
};
