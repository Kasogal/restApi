const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line
const ptBRLocaleData = require('react-intl/locale-data/br');
const enLocaleData = require('react-intl/locale-data/en');

const ptTranslationMessages = require('./translations/br.json');
const enTranslationMessages = require('./translations/en.json');

addLocaleData(ptBRLocaleData);
addLocaleData(enLocaleData);

const DEFAULT_LOCALE = 'br';

// prettier-ignore
const appLocales = [
  'br',
  'en',
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  br: formatTranslationMessages('br', ptTranslationMessages),
  en: formatTranslationMessages('en', enTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
