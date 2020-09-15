import { defineMessages } from 'react-intl';

export const scope = 'front.components.HeaderTop';

export default defineMessages({
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Clínico',
  },
  nameComplete: {
    id: `${scope}.nameComplete`,
    defaultMessage: 'Sistema de atendimento Clínico',
  },
  shortcut: {
    id: `${scope}.shortcut`,
    defaultMessage: 'Acesso Rápido',
  },
  notifications: {
    id: `${scope}.notifications`,
    defaultMessage: 'Notificações',
  },
  support: {
    id: `${scope}.support`,
    defaultMessage: 'Suporte Online',
  },
  settings: {
    id: `${scope}.settings`,
    defaultMessage: 'Configurações',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Sair',
  },
});
