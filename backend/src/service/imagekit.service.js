var ImageKit = require("imagekit");
var mongoose = require('mongoose')



var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY ,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT,
});


function uploadFileAudio(file){
    return new Promise((resolve, reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:file.originalname,
            folder:"music-uploads"
        },(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}

function coverFileUpload(file){
    return new Promise((resolve, reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:file.originalname,
            folder:"CoverPhoto"
        },(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}

module.exports = { uploadFileAudio, coverFileUpload };