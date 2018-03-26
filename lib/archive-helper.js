const os = require("os");
const path = require("path");
const tmpdir = os.tmpdir();
const fs = require("fs");

const zipDirectory = async (directoryPath) => {
    const zipPath = path.join(tmpdir, "templates.zip");
    if (fs.existsSync(directoryPath)) {

    }
};


module.exports = exports = {
    zipDirectory
};
