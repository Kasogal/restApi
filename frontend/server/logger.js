/* eslint-disable no-console */

const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('\n-----------------------------------');

const logger = {
  error: err => {
    console.error(chalk.red(err));
  },

  appStarted: (port, host, tunnelStarted) => {
    console.log(`Servidor iniciado ! ${chalk.green('✓')}`);

    if (tunnelStarted) {
      console.log(`Tunel iniciado ${chalk.green('✓')}`);
    }

    console.log(`
${chalk.bold('URL disponíveis:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
        (tunnelStarted
          ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}`
          : '')}${divider}
${chalk.blue(`Combine ${chalk.italic('CTRL-C')} para parar.`)}
    `);
  },
};

module.exports = logger;
