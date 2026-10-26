// src/i18n/path-labels.ts
import type { Lang } from './ui';
export const pathLabels: Record<Lang, Record<string, string>> = {
  ru: {
    'novye-klienty': 'Новые клиенты',
    kvalifikaciya: 'Квалификация', poland: 'Запись', podtverzdenie: 'Напоминание',
    kommunikaciya: 'В салоне', 'prodazha-online': 'Онлайн-продажи',
    'gotovnost-zakaza': 'Готовность заказа', 'povtornye-prodazhi': 'Повторные продажи',
    reaktivaciya: 'Реактивация',
  },
  ua: {
    'novye-klienty': 'Нові клієнти',
    kvalifikaciya: 'Кваліфікація', poland: 'Запис', podtverzdenie: 'Нагадування',
    kommunikaciya: 'У салоні', 'prodazha-online': 'Онлайн-продажі',
    'gotovnost-zakaza': 'Готовність замовлення', 'povtornye-prodazhi': 'Повторні продажі',
    reaktivaciya: 'Реактивація',
  },
  pl: {
    'novye-klienty': 'Nowi klienci',
    kvalifikaciya: 'Kwalifikacja', poland: 'Rejestracja', podtverzdenie: 'Przypomnienie',
    kommunikaciya: 'W salonie', 'prodazha-online': 'Sprzedaż online',
    'gotovnost-zakaza': 'Gotowość zamówienia', 'povtornye-prodazhi': 'Sprzedaż ponowna',
    reaktivaciya: 'Reaktywacja',
  },
};
