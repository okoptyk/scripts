// src/config/stages.ts
// SINGLE SOURCE OF TRUTH for the set + order of script stages.
// Navbar, home cards, and the StagePath breadcrumb are all generated from this.
// To add a new script: add an entry here + create src/pages/<slug>/index.astro.

export interface Stage {
  slug: string;       // route segment, latin only
  navLabel: string;   // navbar text (RU); UA/PL come from src/i18n/ui.ts
  cardTitle: string;  // home card title (RU)
  cardDesc: string;   // home card description (RU)
  icon: string;       // emoji or 'poland-svg' sentinel for the custom SVG card
  pathLabel: string;  // short label used in the StagePath breadcrumb (RU)
}

export const stages: Stage[] = [
  {
    slug: 'novye-klienty',
    navLabel: 'Новые клиенты',
    cardTitle: 'Новые клиенты',
    cardDesc: 'Приветствуем нового подписчика, дарим промокод на 50 zł и переводим в запись.',
    icon: '🎁',
    pathLabel: 'Новые клиенты',
  },
  {
    slug: 'kvalifikaciya',
    navLabel: 'Квалификация',
    cardTitle: 'Квалификация клиента',
    cardDesc: 'Определяем потребность клиента и направляем его по правильному пути.',
    icon: '🔍',
    pathLabel: 'Квалификация',
  },
  {
    slug: 'poland',
    navLabel: 'Запись',
    cardTitle: 'Запись на визит',
    cardDesc: 'Согласовываем дату, время и адрес салона.',
    icon: 'poland-svg',
    pathLabel: 'Запись',
  },
  {
    slug: 'podtverzdenie',
    navLabel: 'Напоминание',
    cardTitle: 'Напоминание о визите',
    cardDesc: 'Напоминаем клиенту о записи, уточняем детали и оперативно переносим при необходимости.',
    icon: '✅',
    pathLabel: 'Напоминание',
  },
  {
    slug: 'kommunikaciya',
    navLabel: 'В салоне',
    cardTitle: 'Первичная коммуникация в салоне',
    cardDesc: 'Встречаем клиента, выявляем потребность и направляем к нужному сценарию обслуживания.',
    icon: '🏪',
    pathLabel: 'В салоне',
  },
  {
    slug: 'prodazha-online',
    navLabel: 'Онлайн-продажи',
    cardTitle: 'Продажа очков онлайн',
    cardDesc: 'Помогаем клиенту выбрать и оформить заказ дистанционно.',
    icon: '💻',
    pathLabel: 'Онлайн-продажи',
  },
  {
    slug: 'gotovnost-zakaza',
    navLabel: 'Готовность заказа',
    cardTitle: 'Уведомление о готовности заказа',
    cardDesc: 'Сообщаем клиенту, что очки готовы, и согласовываем удобное время для визита.',
    icon: '📦',
    pathLabel: 'Готовность заказа',
  },
  {
    slug: 'povtornye-prodazhi',
    navLabel: 'Повторные продажи',
    cardTitle: 'Повторные продажи',
    cardDesc: 'Заботимся о клиенте после покупки и реализуем потенциал повторной продажи.',
    icon: '🔁',
    pathLabel: 'Повторные продажи',
  },
  {
    slug: 'reaktivaciya',
    navLabel: 'Реактивация',
    cardTitle: 'Реактивация',
    cardDesc: 'Возвращаем «спящих» клиентов, которые ранее оставляли заявку на проверку зрения.',
    icon: '🔔',
    pathLabel: 'Реактивация',
  },
];
