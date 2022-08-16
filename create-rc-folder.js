const fs = require('fs');

// type createRCFolderArgs = {
//   componentName: string;
//   type?: 'atoms' | 'molecules' | 'organisms';
//   customDir?: string | null;
// };

const createRCFolder = (
  { componentName, type = 'atoms', customDir = null } /*: createRCFolderArgs*/
) => {
  const DEFAULT_DIR = 'apps/root/src/components/UI';
  const DEFAULT_COMPONENT = `${type}/${componentName}`;

  const selectedDir = `${
    !customDir ? DEFAULT_DIR : customDir
  }/${DEFAULT_COMPONENT}`;

  !fs.existsSync(selectedDir) && fs.mkdirSync(selectedDir, { recursive: true });

  /* Creating index export React Component File */
  fs.writeFile(
    `${selectedDir}/index.tsx`,
    `export { default } from './${componentName}';\n`,
    (err) => {
      if (err) throw err;
    }
  );

  /* Creating React Component File */
  fs.writeFile(
    `${selectedDir}/${componentName}.tsx`,
    `import css from './${componentName}.module.scss';

    type ${componentName}Props = {};
    
    const ${componentName} = (props: ${componentName}Props) => {
      const {} = props;
      return (<div className={css.${componentName}}></div>);
    };
    
    export default ${componentName};\n`,
    (err) => {
      if (err) throw err;
    }
  );

  /* Creating SCSS Modules React Component File */
  fs.writeFile(
    `${selectedDir}/${componentName}.module.scss`,
    `.${componentName.toLowerCase()}{};\n`,
    (err) => {
      if (err) throw err;
    }
  );
};

module.exports = { createRCFolder };
