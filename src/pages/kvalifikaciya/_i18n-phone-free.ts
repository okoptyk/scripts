// src/pages/kvalifikaciya/_i18n-phone-free.ts
// Вкладка «Звонок» → переключатель «0 zł · акция».
// Берём текущий телефонный скрипт (t.phoneBody, вариант «99 zł») и заменяем
// только реплику сценария «Б» (оптометрист). Если текст сценария «Б» в _i18n.ts
// поменяют, сборка упадёт с понятной ошибкой — тогда поправить OLD ниже.
import type { Lang } from '@/i18n/ui';
import { t } from './_i18n';
type T = Record<Lang, string>;

const OLD: T = {
  ru: 'Стоимость — 99 zł, а при заказе очков у нас проверка бесплатная.',
  ua: 'Вартість — 99 zł, а при замовленні окулярів у нас перевірка безкоштовна.',
  pl: 'Koszt — 99 zł, a przy zamówieniu okularów u nas badanie jest bezpłatne.',
};
const NEW: T = {
  ru: 'Сейчас у нас акция: проверка зрения за 0 zł, без обязательства покупать очки.',
  ua: 'Зараз у нас акція: перевірка зору за 0 zł, без зобов’язання купувати окуляри.',
  pl: 'Teraz mamy promocję: badanie wzroku za 0 zł, bez obowiązku zakupu okularów.',
};

function swap(l: Lang): string {
  const src = t.phoneBody[l];
  if (!src.includes(OLD[l])) throw new Error(`_i18n-phone-free: не найдена реплика сценария Б (${l})`);
  return src.replace(OLD[l], NEW[l]);
}

export const phoneFreeBody: T = { ru: swap('ru'), ua: swap('ua'), pl: swap('pl') };
