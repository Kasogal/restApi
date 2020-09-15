const shell = require('shelljs');
const addCheckMark = require('./helpers/checkmark.js');

if (!shell.which('git')) {
  shell.echo('GIT não encontrado!');
  shell.exit(1);
}

if (!shell.test('-e', 'internals/templates')) {
  shell.echo('Exemplos apagados.');
  shell.exit(1);
}

process.stdout.write('Iniciando limpeza...');

shell.mv(
  'app/containers/LanguageProvider/tests',
  'internals/templates/containers/LanguageProvider',
);
shell.cp('app/tests/i18n.test.js', 'internals/templates/tests/i18n.test.js');

shell.rm('-rf', 'app/components/*');

shell.rm('-rf', 'app/containers');
shell.mv('internals/templates/containers', 'app');

shell.mv('internals/templates/tests', 'app');

shell.rm('-rf', 'app/translations');
shell.mv('internals/templates/translations', 'app');

shell.rm('-rf', 'app/utils');
shell.mv('internals/templates/utils', 'app');

shell.cp('internals/templates/app.js', 'app/app.js');
shell.cp('internals/templates/global-styles.js', 'app/global-styles.js');
shell.cp('internals/templates/i18n.js', 'app/i18n.js');
shell.cp('internals/templates/index.html', 'app/index.html');
shell.cp('internals/templates/reducers.js', 'app/reducers.js');
shell.cp('internals/templates/configureStore.js', 'app/configureStore.js');

shell.rm('-rf', 'internals/templates');

addCheckMark();

if (
  shell.exec('git add . --all && git commit -qm "Remove default example"')
    .code !== 0
) {
  shell.echo('\nErro: Falha ao realizar commit');
  shell.exit(1);
}

shell.echo('\nLimpeza finalizada!!!');
