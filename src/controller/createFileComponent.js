const fs = require('fs');
const path = require("path");

const contentFunctionComponent = require('./contentComponentReact');

function createFileToComponent(fileName) {
  const pathWithFolderSrc = `${path.dirname(
    require.main.filename
  )}/src/components/${fileName}`;

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