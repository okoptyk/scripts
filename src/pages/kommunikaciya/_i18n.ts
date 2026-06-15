// src/pages/kommunikaciya/_i18n.ts
import type { Lang } from '@/i18n/ui';
type T = Record<Lang, string>;

export const t = {
  headerTitle: { ru: 'Первичная коммуникация в салоне', ua: 'Первинна комунікація в салоні', pl: 'Pierwszy kontakt w salonie' } as T,
  headerSub: { ru: 'Встречаем клиента, выявляем потребность и направляем к нужному сценарию обслуживания', ua: 'Зустрічаємо клієнта, виявляємо потребу та спрямовуємо до потрібного сценарію обслуговування', pl: 'Witamy klienta, ustalamy potrzebę i kierujemy do właściwego scenariusza obsługi' } as T,

  metaCkpLabel:   { ru: 'ЦКП', ua: 'ЦКП', pl: 'Cel etapu' } as T,
  metaCkp:        { ru: 'Потребность определена, клиент переведён на этап «Изделие подобрано»', ua: 'Потреба визначена, клієнта переведено на етап «Виріб підібрано»', pl: 'Potrzeba ustalona, klient przeniesiony do etapu «Wyrób dobrany»' } as T,
  metaStartLabel: { ru: 'Стартовая точка', ua: 'Початкова точка', pl: 'Punkt startowy' } as T,
  metaStart:      { ru: 'Личный визит клиента в салон', ua: 'Особистий візит клієнта в салон', pl: 'Osobista wizyta klienta w salonie' } as T,
  metaDeadlineLabel: { ru: 'Дедлайн', ua: 'Дедлайн', pl: 'Termin' } as T,
  metaDeadline:   { ru: '1 рабочий день', ua: '1 робочий день', pl: '1 dzień roboczy' } as T,
  metaResponsibleLabel: { ru: 'Ответственный', ua: 'Відповідальний', pl: 'Odpowiedzialny' } as T,
  metaResponsible: { ru: 'Продавец-консультант, Менеджер', ua: 'Продавець-консультант, Менеджер', pl: 'Doradca klienta, Menedżer' } as T,

  intro: {
    ru: 'Этот скрипт применяется в двух случаях: клиент пришёл по записи (после воронки «Визит / консультация») или зашёл в салон без записи. В обоих случаях задача одна — понять потребность и перейти к одному из 5 сценариев.',
    ua: 'Цей скрипт застосовується у двох випадках: клієнт прийшов за записом (після воронки «Візит / консультація») або зайшов до салону без запису. В обох випадках завдання одне — зрозуміти потребу та перейти до одного з 5 сценаріїв.',
    pl: 'Ten skrypt stosuje się w dwóch sytuacjach: klient przyszedł umówiony (po lejku «Wizyta / konsultacja») lub wszedł do salonu bez rejestracji. W obu przypadkach cel jest jeden — zrozumieć potrzebę i przejść do jednego z 5 scenariuszy.',
  } as T,

  // RU-only — phase/scenario bodies have no UA/PL in the legacy source.
  body: `<div class="phase">
    <div class="phase-title">Этап 1 · Приветствие и установление контакта</div>
    <div class="phase-goal">Цель: создать доброжелательную атмосферу и перехватить инициативу.</div>
    <div class="phase-body">
      <div class="scenarios" style="gap:12px;">
        <div class="scenario">
          <div class="scenario-header"><span class="scenario-label">Без записи</span>&nbsp; Клиент пришёл сам</div>
          <div class="scenario-body">
            <div class="msg consultant">
              <div class="msg-label">Консультант</div>
              Добрый день! Рад(а) приветствовать вас в нашем салоне оптики. Меня зовут [Имя]. Подскажите, вы у нас впервые или уже бывали ранее?
            </div>
          </div>
        </div>
        <div class="scenario">
          <div class="scenario-header"><span class="scenario-label">По записи</span>&nbsp; Продолжение воронки «Визит / консультация»</div>
          <div class="scenario-body">
            <div class="msg consultant">
              <div class="msg-label">Консультант</div>
              Добрый день, [Имя клиента]! Рад(а) снова видеть вас. Мы успешно провели первичную консультацию, и теперь готовы двигаться дальше, чтобы подобрать идеальное решение для вашего зрения. Меня зовут [Имя], я помогу вам на этом этапе.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="phase">
    <div class="phase-title">Этап 2 · Уточнение цели и определение потребности</div>
    <div class="phase-goal">Цель: задать открытый вопрос, внимательно выслушать и определить один из 5 сценариев.</div>
    <div class="phase-body">
      <div class="msg consultant">
        <div class="msg-label">Консультант — универсальный вопрос</div>
        Расскажите, пожалуйста, подробнее, какой вопрос или задачу мы сегодня хотим решить? Что именно вы ищете?
      </div>
    </div>
  </div>

  <div class="phase">
    <div class="phase-title">Этап 3 · Сценарные ветки</div>
    <div class="phase-goal">Выберите подходящий блок вопросов на основе озвученной клиентом потребности.</div>
    <div class="phase-body">
      <div class="scenarios">

        <div class="scenario">
          <div class="scenario-header"><span class="scenario-label">Сценарий 1</span>&nbsp; Заказ очков по рецепту</div>
          <div class="scenario-body">
            <div class="msg consultant">
              <div class="msg-label">Консультант</div>
              Отлично, это как раз по моему профилю! Подскажите, рецепт у вас с собой (в распечатанном или электронном виде)? И для каких целей в основном будут очки — для работы за компьютером, чтения или постоянного ношения?
            </div>
            <p style="margin-top:10px; font-size:.85rem; color:var(--text-muted);">→ Переход к демонстрации оправ.</p>
          </div>
        </div>

        <div class="scenario">
          <div class="scenario-header"><span class="scenario-label">Сценарий 2</span>&nbsp; Диагностика + подбор очков</div>
          <div class="scenario-body">
            <div class="msg consultant">
              <div class="msg-label">Консультант</div>
              Прекрасное решение. Чтобы очки были максимально комфортными, мы обязательно проверим зрение. Подскажите, вы замечаете ухудшение в последнее время или просто пришло время обновить оптику? Давайте проверим, свободен ли сейчас наш специалист по диагностике, и сразу после этого перейдём к выбору оправы.
            </div>
            <p style="margin-top:10px; font-size:.85rem; color:var(--text-muted);">→ Проверка доступности кабинета диагностики.</p>
          </div>
        </div>

        <div class="scenario">
          <div class="scenario-header"><span class="scenario-label">Сценарий 3</span>&nbsp; Покупка контактных линз</div>
          <div class="scenario-body">
            <div class="msg consultant">
              <div class="msg-label">Консультант</div>
              Да, конечно, контактные линзы — это очень удобно. Подскажите, какими марками вы обычно пользуетесь и помните ли параметры (диоптрии, радиус кривизны)? Если нет, не переживайте — мы можем поднять вашу карту или быстро уточнить параметры.
            </div>
            <p style="margin-top:10px; font-size:.85rem; color:var(--text-muted);">→ Проверка наличия на складе / подбор.</p>
          </div>
        </div>

        <div class="scenario">
          <div class="scenario-header"><span class="scenario-label">Сценарий 4</span>&nbsp; Аксессуары (чехол, спрей и т.д.)</div>
          <div class="scenario-body">
            <div class="msg consultant">
              <div class="msg-label">Консультант</div>
              С удовольствием помогу вам выбрать. Для каких очков подбираем аксессуар — солнцезащитных или для зрения? У нас как раз есть отличные защитные футляры, салфетки из микрофибры и очищающие спреи. Пойдёмте, я покажу, где они представлены.
            </div>
            <p style="margin-top:10px; font-size:.85rem; color:var(--text-muted);">→ Проводка к витрине с аксессуарами.</p>
          </div>
        </div>

        <div class="scenario">
          <div class="scenario-header"><span class="scenario-label">Сценарий 5</span>&nbsp; Замена линз в существующей оправе</div>
          <div class="scenario-body">
            <div class="msg consultant">
              <div class="msg-label">Консультант</div>
              Понимаю вас, если оправа любимая и удобная, её стоит сохранить. Покажите, пожалуйста, очки — мне нужно оценить состояние оправы и креплений. Подскажите, линзы меняем из-за изменения зрения или на старых появились царапины?
            </div>
            <p style="margin-top:10px; font-size:.85rem; color:var(--text-muted);">→ Осмотр оправы на предмет износа.</p>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="phase">
    <div class="phase-title">Этап 4 · Фиксация потребности и переход к целевому действию</div>
    <div class="phase-goal">Цель: получить согласие клиента на подбор конкретного изделия и перевести сделку на этап «Изделие подобрано».</div>
    <div class="phase-body">
      <div class="steps">
        <div class="step">
          <div class="step-header"><span class="step-num">1</span> Резюмирование — техника «Эхо»</div>
          <div class="step-body">
            <div class="msg consultant">
              <div class="msg-label">Консультант</div>
              Итак, [Имя клиента], фиксирую: наша задача сегодня — [сформулировать потребность, например: подобрать лёгкую оправу для работы за компьютером по вашему рецепту]. Всё верно?
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-header"><span class="step-num">2</span> Призыв к действию</div>
          <div class="step-body">
            <div class="msg consultant">
              <div class="msg-label">Консультант</div>
              Супер! С потребностью мы определились. Предлагаю пройти к этой витрине, я покажу модели, которые идеально подойдут под ваши параметры и форму лица. Примерим несколько вариантов?
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,

  checklist: {
    ru: `<h3>✅ Чек-лист для продавца-консультанта</h3>
    <ul>
      <li>Выслушать клиента, <strong>не перебивая</strong>.</li>
      <li>Чётко определить один из 5 сценариев.</li>
      <li>Получить от клиента чёткое «Да, давайте подбирать» (ЦКП этапа).</li>
      <li>Перевести статус сделки в CRM на этап <strong>«Изделие подобрано»</strong>.</li>
    </ul>`,
    ua: `<h3>✅ Чек-лист для продавця-консультанта</h3><ul><li>Вислухати клієнта, <strong>не перебиваючи</strong>.</li><li>Чітко визначити один з 5 сценаріїв.</li><li>Отримати від клієнта чітке «Так, давайте підбирати» (ЦКП етапу).</li><li>Перевести статус угоди в CRM на етап <strong>«Виріб підібрано»</strong>.</li></ul>`,
    pl: `<h3>✅ Lista kontrolna dla doradcy klienta</h3><ul><li>Wysłuchać klienta, <strong>nie przerywając</strong>.</li><li>Jasno określić jeden z 5 scenariuszy.</li><li>Uzyskać od klienta wyraźne «Tak, dobierajmy» (cel etapu).</li><li>Zmienić status transakcji w CRM na etap <strong>«Wyrób dobrany»</strong>.</li></ul>`,
  } as T,

  nextBtn: { ru: 'Следующий шаг: Готовность заказа →', ua: 'Наступний крок: Готовність замовлення →', pl: 'Następny krok: Gotowość zamówienia →' } as T,
};
