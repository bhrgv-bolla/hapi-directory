const os = require("os");
const path = require("path");
const tmpdir = os.tmpdir();
const fs = require("fs");
const archiver = require("archiver");
const zipdir = path.join(tmpdir, "hapi-directory");
const Promise = require("bluebird");

const zipDirectory = async (directoryPath) => {
    const zipPath = path.join(tmpdir, "randomFileName.zip");
    const archive = archiver("zip", {
        store: true
    });
    const promiseResolver = (resolve, reject) => {
        if (fs.existsSync(directoryPath)) {
            const outputdir = fs.mkdtempSync(path.join(zipdir, "download-"));
            const downloadFilePath = path.join(outputdir, "download.zip");
            const zippedFile = fs.createWriteStream(downloadFilePath);
            archive.pipe(zippedFile);
            archive.directory(directoryPath, false);
            archive.on("error", (err) => {
                reject(err);
            });
            zippedFile.on("close", () => {
                resolve(downloadFilePath);
            });
            archive.finalize();
        }
    };
    return new Promise(promiseResolver);
};


module.exports = exports = {
    zipDirectory
};
