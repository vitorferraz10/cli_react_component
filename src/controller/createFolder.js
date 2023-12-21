const fs = require("fs");
const path = require("path");

function createFolderToComponent(folderName) {
  const pathWithFolderSrc = `${path.dirname(
    require.main.filename
  )}/src/components/`;

  if (!fs.existsSync(pathWithFolderSrc + folderName)) {
    fs.mkdirSync(pathWithFolderSrc + folderName, { recursive: true });
  }
}

module.exports = createFolderToComponent;
