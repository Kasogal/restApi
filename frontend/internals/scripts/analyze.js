/* eslint-disable prefer-template */
const shelljs = require('shelljs');
const chalk = require('chalk');
const animateProgress = require('./helpers/progress');
const addCheckMark = require('./helpers/checkmark');

const progress = animateProgress('Generating stats');

shelljs.exec(
  'webpack --config internals/webpack/webpack.prod.babel.js --profile --json > stats.json',
  addCheckMark.bind(null, callback),
);

function callback() {
  clearInterval(progress);
  process.stdout.write(
    '\n\nEntre em ' +
      chalk.magenta('http://webpack.github.io/analyse/') +
      ' e faça a analise do arquivo stats.json!' +
      chalk.blue(
        '\n(Dica: ' + chalk.italic('CMD + clique duplo') + ' no link!)\n\n',
      ),
  );
}
