const express = require('express')
const {uploadFileAudio,coverFileUpload} = require('../service/imagekit.service')
const multer = require("multer")
const AiService = require('../service/ai.service')   
const songModel = require('../models/songs.model')

const router = express.Router()

const upload = multer({ storage: multer.memoryStorage() });

// const audiofile = multer({storage:multer.memoryStorage()})
// const coverfile = multer({storage:multer.memoryStorage()})




router.post('/songs',upload.fields([
    { name: 'audio'},
     { name: 'cover' }
    ]),async(req,res)=>{
        
        console.log(req.files.audio[0].originalname);
        console.log(req.files.cover[0].originalname);
    

const AudioUrl = await uploadFileAudio(req.files.audio[0])

const mood = await AiService(req.files.audio[0].originalname)

const coverUrl = await coverFileUpload(req.files.cover[0]);
   let moodText = mood.text;

   moodText = moodText.substring(moodText.indexOf(`{`),moodText.lastIndexOf(`}`)+1)
    moodText = JSON.parse(moodText);


   const newSong = await songModel.create({
        title:moodText.title,
        artist:moodText.artist,
        audio:AudioUrl.url,
        mood:moodText.mood,
        cover:coverUrl.url
    })
    res.json({
        Message:"request sent successfully",
        data:newSong
        
    })
})


router.get('/songs',async(req,res)=>{
    const songs = await songModel.find()
    res.json({
        Message:"request sent successfully",
        data:songs
})
})

module.exports=router