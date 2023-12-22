const fs = require("fs");
const path = require("path");

function createFolderToComponent(folderName) {
const pathRoot = path.dirname(
  require.main.filename)

  const pathWithFolderSrc = `${pathRoot}/src/components/`;

  if (!fs.existsSync(pathWithFolderSrc + folderName)) {
    fs.mkdirSync(pathWithFolderSrc + folderName, { recursive: true });
  }
}

module.exports = createFolderToComponent;
