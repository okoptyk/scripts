// src/i18n/path-labels.ts
import type { Lang } from './ui';
export const pathLabels: Record<Lang, Record<string, string>> = {
  ru: {
    kvalifikaciya: 'Квалификация', poland: 'Запись', podtverzdenie: 'Подтверждение',
    kommunikaciya: 'В салоне', 'prodazha-online': 'Онлайн-продажи',
    'gotovnost-zakaza': 'Готовность заказа', 'povtornye-prodazhi': 'Повторные продажи',
    reaktivaciya: 'Реактивация',
  },
  ua: {
    kvalifikaciya: 'Кваліфікація', poland: 'Запис', podtverzdenie: 'Підтвердження',
    kommunikaciya: 'У салоні', 'prodazha-online': 'Онлайн-продажі',
    'gotovnost-zakaza': 'Готовність замовлення', 'povtornye-prodazhi': 'Повторні продажі',
    reaktivaciya: 'Реактивація',
  },
  pl: {
    kvalifikaciya: 'Kwalifikacja', poland: 'Rejestracja', podtverzdenie: 'Potwierdzenie',
    kommunikaciya: 'W salonie', 'prodazha-online': 'Sprzedaż online',
    'gotovnost-zakaza': 'Gotowość zamówienia', 'povtornye-prodazhi': 'Sprzedaż ponowna',
    reaktivaciya: 'Reaktywacja',
  },
};
