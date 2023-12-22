const fs = require('fs');
const path = require("path");

const contentFunctionComponent = require('./contentComponentReact');

function createFileToComponent(fileName) {
  const pathRoot = path.dirname(
    require.main.filename)

  const pathWithFolderSrc = `${pathRoot}/src/components/${fileName}`;

  if (fs.existsSync(pathWithFolderSrc)) {
    const pathToCreateComponent = `${pathWithFolderSrc}/index.tsx`;

    fs.writeFile(
      pathToCreateComponent,
      contentFunctionComponent(fileName),
      function (err) {
        if (err) console.error("err:>>", err);
        process.exit()
      }
    );
  }
}

module.exports = createFileToComponent