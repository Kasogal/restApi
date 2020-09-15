import { defineMessages } from 'react-intl';

export const scope = 'front.containers.Security';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Informações de acesso',
  },
  subTitle: {
    id: `${scope}.subTitle`,
    defaultMessage: 'Para ter acesso ao sistema informe as credenciais!',
  },
  formUserName: {
    id: `${scope}.form.userName`,
    defaultMessage: 'E-mail',
  },
  formPassword: {
    id: `${scope}.form.password`,
    defaultMessage: 'Senha',
  },
  formConnected: {
    id: `${scope}.form.connected`,
    defaultMessage: 'Manter Conectado?',
  },
  formPtBR: {
    id: `${scope}.form.ptbr`,
    defaultMessage: 'Português (BR)',
  },
  formEnUS: {
    id: `${scope}.form.enus`,
    defaultMessage: 'Inglês (US)',
  },
  btnAccess: {
    id: `${scope}.btn.access`,
    defaultMessage: 'Acessar o sistema',
  },
  btnRecover: {
    id: `${scope}.btn.recover`,
    defaultMessage: 'Recuperar senha',
  },
  validateInvalidUserName: {
    id: `${scope}.validate.invalid.userName`,
    defaultMessage: 'Informe um e-mail válido.',
  },
  validateRequiredUserName: {
    id: `${scope}.validate.required.userName`,
    defaultMessage: 'Informe um e-mail.',
  },
  validateRequiredPassword: {
    id: `${scope}.validate.required.password`,
    defaultMessage: 'Informe uma senha.',
  },
  modalErrorBtnClose: {
    id: `${scope}.modal.error.btnclose`,
    defaultMessage: 'Fechar',
  },
  modalErrorTitle: {
    id: `${scope}.modal.error.title`,
    defaultMessage: 'Atenção',
  },
  modalErrorSubtitle: {
    id: `${scope}.modal.error.subtitle`,
    defaultMessage: 'Falha de Login!',
  },
  modalErrorMsg: {
    id: `${scope}.modal.error.msg`,
    defaultMessage:
      'Ocorreu uma falha ao acessar o sistema, por favor revise suas credenciais e tente novamente! ',
  },
});
