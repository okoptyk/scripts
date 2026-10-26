// src/i18n/ui.ts
// Interface-level translations: nav labels, titles, footer. NOT script body text.
export type Lang = 'ru' | 'ua' | 'pl';

// Nav labels keyed by stage slug. RU comes from stages.ts navLabel.
export const navLabels: Record<'ua' | 'pl', Record<string, string>> = {
  ua: {
    index: 'Головна',
    'novye-klienty': 'Нові клієнти',
    kvalifikaciya: 'Кваліфікація',
    poland: 'Запис',
    podtverzdenie: 'Нагадування',
    kommunikaciya: 'У салоні',
    'prodazha-online': 'Онлайн-продажі',
    'gotovnost-zakaza': 'Готовність замовлення',
    'povtornye-prodazhi': 'Повторні продажі',
    reaktivaciya: 'Реактивація',
  },
  pl: {
    index: 'Strona główna',
    'novye-klienty': 'Nowi klienci',
    kvalifikaciya: 'Kwalifikacja',
    poland: 'Rejestracja',
    podtverzdenie: 'Przypomnienie',
    kommunikaciya: 'W salonie',
    'prodazha-online': 'Sprzedaż online',
    'gotovnost-zakaza': 'Gotowość zamówienia',
    'povtornye-prodazhi': 'Sprzedaż ponowna',
    reaktivaciya: 'Reaktywacja',
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
  'novye-klienty':     { ru: 'Новые клиенты · Скрипты', ua: 'Нові клієнти · Скрипти', pl: 'Nowi klienci · Skrypty' },
  kvalifikaciya:       { ru: 'Квалификация клиента · Скрипты', ua: 'Кваліфікація клієнта · Скрипти', pl: 'Kwalifikacja klienta · Skrypty' },
  poland:              { ru: 'Запись на визит · OkOptyk', ua: 'Запис на візит · OkOptyk', pl: 'Rejestracja na wizytę · OkOptyk' },
  podtverzdenie:       { ru: 'Напоминание о визите · Скрипты', ua: 'Нагадування про візит · Скрипти', pl: 'Przypomnienie o wizycie · Skrypty' },
  kommunikaciya:       { ru: 'Первичная коммуникация в салоне · Скрипты', ua: 'Первинна комунікація в салоні · Скрипти', pl: 'Pierwszy kontakt w salonie · Skrypty' },
  'prodazha-online':   { ru: 'Продажа очков онлайн · Скрипты', ua: 'Продаж окулярів онлайн · Скрипти', pl: 'Sprzedaż okularów online · Skrypty' },
  'gotovnost-zakaza':  { ru: 'Готовность заказа · Скрипты', ua: 'Готовність замовлення · Скрипти', pl: 'Gotowość zamówienia · Skrypty' },
  'povtornye-prodazhi':{ ru: 'Повторные продажи · Скрипты', ua: 'Повторні продажі · Скрипти', pl: 'Sprzedaż ponowna · Skrypty' },
  reaktivaciya:        { ru: 'Реактивация · Скрипты', ua: 'Реактивація · Скрипти', pl: 'Reaktywacja · Skrypty' },
};
