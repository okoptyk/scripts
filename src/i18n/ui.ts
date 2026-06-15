// src/i18n/ui.ts
// Interface-level translations: nav labels, titles, footer. NOT script body text.
export type Lang = 'ru' | 'ua' | 'pl';

// Nav labels keyed by stage slug. RU comes from stages.ts navLabel.
export const navLabels: Record<'ua' | 'pl', Record<string, string>> = {
  ua: {
    index: 'Головна',
    kvalifikaciya: 'Кваліфікація',
    poland: 'Запис',
    podtverzdenie: 'Підтвердження',
    kommunikaciya: 'У салоні',
    'prodazha-online': 'Онлайн-продажі',
    'gotovnost-zakaza': 'Готовність замовлення',
    'povtornye-prodazhi': 'Повторні продажі',
  },
  pl: {
    index: 'Strona główna',
    kvalifikaciya: 'Kwalifikacja',
    poland: 'Rejestracja',
    podtverzdenie: 'Potwierdzenie',
    kommunikaciya: 'W salonie',
    'prodazha-online': 'Sprzedaż online',
    'gotovnost-zakaza': 'Gotowość zamówienia',
    'povtornye-prodazhi': 'Sprzedaż ponowna',
  },
};

export const footerNote: Record<Lang, string> = {
  ru: '© OkOptyk · Скрипты для менеджеров',
  ua: '© OkOptyk · Скрипти для менеджерів',
  pl: '© OkOptyk · Skrypty dla menedżerów',
};

// Page <title> per slug per language. 'index' is the home page.
export const titles: Record<string, Record<Lang, string>> = {
  index:               { ru: 'Скрипты · OkOptyk', ua: 'Скрипти · OkOptyk', pl: 'Skrypty · OkOptyk' },
  kvalifikaciya:       { ru: 'Квалификация клиента · Скрипты', ua: 'Кваліфікація клієнта · Скрипти', pl: 'Kwalifikacja klienta · Skrypty' },
  poland:              { ru: 'Запись на визит · OkOptyk', ua: 'Запис на візит · OkOptyk', pl: 'Rejestracja na wizytę · OkOptyk' },
  podtverzdenie:       { ru: 'Подтверждение визита · Скрипты', ua: 'Підтвердження візиту · Скрипти', pl: 'Potwierdzenie wizyty · Skrypty' },
  kommunikaciya:       { ru: 'Первичная коммуникация в салоне · Скрипты', ua: 'Первинна комунікація в салоні · Скрипти', pl: 'Pierwszy kontakt w salonie · Skrypty' },
  'prodazha-online':   { ru: 'Продажа очков онлайн · Скрипты', ua: 'Продаж окулярів онлайн · Скрипти', pl: 'Sprzedaż okularów online · Skrypty' },
  'gotovnost-zakaza':  { ru: 'Готовность заказа · Скрипты', ua: 'Готовність замовлення · Скрипти', pl: 'Gotowość zamówienia · Skrypty' },
  'povtornye-prodazhi':{ ru: 'Повторные продажи · Скрипты', ua: 'Повторні продажі · Скрипти', pl: 'Sprzedaż ponowna · Skrypty' },
};
