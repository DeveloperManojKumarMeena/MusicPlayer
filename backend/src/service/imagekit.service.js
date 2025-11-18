// backend/src/service/imagekit.service.js

const ImageKit = require('@imagekit/nodejs'); // @imagekit/nodejs होना जरुरी है

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file.buffer, 
            fileName: file.originalname || "Music_File" // Original name use करें तो बेहतर है
        }, (error, result) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        });
    });
}

module.exports = uploadFile;