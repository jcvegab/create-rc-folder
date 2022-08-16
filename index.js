const yargs = require('yargs');

const { createRCFolder } = require('./create-rc-folder');

const { name, type, dir } = yargs
  .usage('Usage: -n <name> -t <type> -d <dir>')
  .options({
    n: {
      alias: 'name',
      describe: 'Component Folder Name',
      type: 'string',
      demandOption: true,
    },
    t: {
      alias: 'type',
      describe: 'Choose an Component UI Type',
      type: 'string',
      choices: ['atoms', 'molecules', 'organisms'],
      demandOption: false,
    },
    d: {
      alias: 'dir',
      describe: 'Custom Dir to create React Component Folder',
      type: 'string',
      demandOption: false,
    },
  }).argv;

createRCFolder({ componentName: name, type, customDir: dir });
