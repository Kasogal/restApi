import { defineMessages } from 'react-intl';

export const scope = 'front.components.Footer';

export default defineMessages({
  corporate: {
    id: `${scope}.corporate`,
    defaultMessage: 'Copyright © 2019-2020',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Clínico',
  },
  nameComplete: {
    id: `${scope}.nameComplete`,
    defaultMessage: 'Sistema de Atendimento Clínico.',
  },
  version: {
    id: `${scope}.version`,
    defaultMessage: 'Versão',
  },
});
